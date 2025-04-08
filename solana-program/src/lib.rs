use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer as SplTransfer};
use std::mem::size_of;

declare_id!("REPLACE_WITH_YOUR_DEPLOYED_PROGRAM_ID");

#[program]
pub mod ocf_presale {
    use super::*;

    pub fn initialize(
        ctx: Context<Initialize>,
        treasury_wallet: Pubkey,
        token_mint: Pubkey,
        presale_start: i64,
        presale_end: i64,
        token_price: u64,
        min_purchase_usd: u64,
        max_purchase_usd: u64,
        hard_cap_usd: u64,
        vesting_percent_immediate: u8,
        vesting_duration_months: u8,
    ) -> Result<()> {
        let presale_config = &mut ctx.accounts.presale_config;
        presale_config.authority = ctx.accounts.authority.key();
        presale_config.treasury_wallet = treasury_wallet;
        presale_config.token_mint = token_mint;
        presale_config.presale_start = presale_start;
        presale_config.presale_end = presale_end;
        presale_config.token_price = token_price;
        presale_config.min_purchase_usd = min_purchase_usd;
        presale_config.max_purchase_usd = max_purchase_usd;
        presale_config.hard_cap_usd = hard_cap_usd;
        presale_config.total_raised = 0;
        presale_config.participant_count = 0;
        presale_config.vesting_percent_immediate = vesting_percent_immediate;
        presale_config.vesting_duration_months = vesting_duration_months;
        presale_config.bump = *ctx.bumps.get("presale_config").unwrap();
        Ok(())
    }

    pub fn purchase(
        ctx: Context<Purchase>,
        sol_amount: u64,
        usd_amount: u64,
        token_amount: u64,
    ) -> Result<()> {
        let presale_config = &mut ctx.accounts.presale_config;
        let clock = Clock::get()?;
        
        // Check if presale is active
        require!(
            clock.unix_timestamp >= presale_config.presale_start,
            PresaleError::PresaleNotStarted
        );
        require!(
            clock.unix_timestamp <= presale_config.presale_end,
            PresaleError::PresaleEnded
        );
        
        // Validate purchase amount
        require!(
            usd_amount >= presale_config.min_purchase_usd,
            PresaleError::BelowMinimumPurchase
        );
        require!(
            usd_amount <= presale_config.max_purchase_usd,
            PresaleError::AboveMaximumPurchase
        );
        
        // Check if hardcap is reached
        let new_total_raised = presale_config.total_raised.checked_add(usd_amount)
            .ok_or(PresaleError::MathOverflow)?;
        require!(
            new_total_raised <= presale_config.hard_cap_usd,
            PresaleError::HardCapReached
        );
        
        // Transfer SOL to treasury
        let transfer_ix = anchor_lang::solana_program::system_instruction::transfer(
            &ctx.accounts.buyer.key(),
            &presale_config.treasury_wallet,
            sol_amount
        );
        
        anchor_lang::solana_program::program::invoke(
            &transfer_ix,
            &[
                ctx.accounts.buyer.to_account_info(),
                ctx.accounts.system_program.to_account_info(),
            ],
        )?;
        
        // Update state
        presale_config.total_raised = new_total_raised;
        
        // Create or update user allocation record
        let user_allocation = &mut ctx.accounts.user_allocation;
        if !user_allocation.initialized {
            user_allocation.buyer = ctx.accounts.buyer.key();
            user_allocation.initialized = true;
            user_allocation.bump = *ctx.bumps.get("user_allocation").unwrap();
            presale_config.participant_count = presale_config.participant_count.checked_add(1)
                .ok_or(PresaleError::MathOverflow)?;
        }
        
        // Calculate vesting info
        let immediate_amount = token_amount
            .checked_mul(presale_config.vesting_percent_immediate as u64)
            .ok_or(PresaleError::MathOverflow)?
            .checked_div(100)
            .ok_or(PresaleError::MathOverflow)?;
        let vested_amount = token_amount.checked_sub(immediate_amount)
            .ok_or(PresaleError::MathOverflow)?;
        
        // Update user allocation
        user_allocation.total_allocation = user_allocation.total_allocation
            .checked_add(token_amount)
            .ok_or(PresaleError::MathOverflow)?;
        user_allocation.immediate_amount = user_allocation.immediate_amount
            .checked_add(immediate_amount)
            .ok_or(PresaleError::MathOverflow)?;
        user_allocation.vested_amount = user_allocation.vested_amount
            .checked_add(vested_amount)
            .ok_or(PresaleError::MathOverflow)?;
        user_allocation.vesting_end = clock.unix_timestamp
            .checked_add((presale_config.vesting_duration_months as i64) * 30 * 86400)
            .ok_or(PresaleError::MathOverflow)?;
        
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    
    #[account(
        init,
        payer = authority,
        space = 8 + size_of::<PresaleConfig>(),
        seeds = [b"presale_config"],
        bump
    )]
    pub presale_config: Account<'info, PresaleConfig>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Purchase<'info> {
    #[account(mut)]
    pub buyer: Signer<'info>,
    
    #[account(
        mut,
        seeds = [b"presale_config"],
        bump = presale_config.bump
    )]
    pub presale_config: Account<'info, PresaleConfig>,
    
    #[account(
        init_if_needed,
        payer = buyer,
        space = 8 + size_of::<UserAllocation>(),
        seeds = [b"user_allocation", buyer.key().as_ref()],
        bump
    )]
    pub user_allocation: Account<'info, UserAllocation>,
    
    pub system_program: Program<'info, System>,
}

#[account]
pub struct PresaleConfig {
    pub authority: Pubkey,
    pub treasury_wallet: Pubkey,
    pub token_mint: Pubkey,
    pub presale_start: i64,
    pub presale_end: i64,
    pub token_price: u64,       // Price in lamports per token, scaled by 10^9
    pub min_purchase_usd: u64,  // Minimum purchase in USD cents
    pub max_purchase_usd: u64,  // Maximum purchase in USD cents
    pub hard_cap_usd: u64,      // Hard cap in USD cents
    pub total_raised: u64,      // Total raised in USD cents
    pub participant_count: u64,
    pub vesting_percent_immediate: u8,
    pub vesting_duration_months: u8,
    pub bump: u8,
}

#[account]
pub struct UserAllocation {
    pub initialized: bool,
    pub buyer: Pubkey,
    pub total_allocation: u64,
    pub immediate_amount: u64,
    pub vested_amount: u64,
    pub vesting_end: i64,
    pub bump: u8,
}

#[error_code]
pub enum PresaleError {
    #[msg("Presale has not started yet")]
    PresaleNotStarted,
    
    #[msg("Presale has ended")]
    PresaleEnded,
    
    #[msg("Purchase amount is below minimum")]
    BelowMinimumPurchase,
    
    #[msg("Purchase amount is above maximum")]
    AboveMaximumPurchase,
    
    #[msg("Hard cap reached")]
    HardCapReached,
    
    #[msg("Math overflow")]
    MathOverflow,
} 