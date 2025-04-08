export const PALM_PRESALE_IDL = {
  "version": "0.1.0",
  "name": "palm_presale",
  "instructions": [
    {
      "name": "createPresale",
      "accounts": [
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "tokenMintAddress", "type": "publicKey" },
        { "name": "softcapAmount", "type": "u64" },
        { "name": "hardcapAmount", "type": "u64" },
        { "name": "maxTokenAmountPerAddress", "type": "u64" },
        { "name": "pricePerToken", "type": "u64" },
        { "name": "startTime", "type": "u64" },
        { "name": "endTime", "type": "u64" }
      ]
    },
    {
      "name": "updatePresale",
      "accounts": [
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false }
      ],
      "args": [
        { "name": "maxTokenAmountPerAddress", "type": "u64" },
        { "name": "pricePerToken", "type": "u64" },
        { "name": "softcapAmount", "type": "u64" },
        { "name": "hardcapAmount", "type": "u64" },
        { "name": "startTime", "type": "u64" },
        { "name": "endTime", "type": "u64" }
      ]
    },
    {
      "name": "depositToken",
      "accounts": [
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false },
        { "name": "presaleVault", "isMut": true, "isSigner": false },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "tokenAccount", "isMut": true, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "rent", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "amount", "type": "u64" }
      ]
    },
    {
      "name": "startPresale",
      "accounts": [
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false }
      ],
      "args": [
        { "name": "startTime", "type": "u64" },
        { "name": "endTime", "type": "u64" }
      ]
    },
    {
      "name": "buyToken",
      "accounts": [
        { "name": "buyer", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "userTransaction", "isMut": true, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "tokenAmount", "type": "u64" },
        { "name": "quoteAmount", "type": "u64" }
      ]
    },
    {
      "name": "claimToken",
      "accounts": [
        { "name": "claimer", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false },
        { "name": "userTransaction", "isMut": true, "isSigner": false },
        { "name": "presaleVault", "isMut": true, "isSigner": false },
        { "name": "tokenAccount", "isMut": true, "isSigner": false },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "rent", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "bump", "type": "u8" }
      ]
    },
    {
      "name": "withdrawSol",
      "accounts": [
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "amount", "type": "u64" },
        { "name": "bump", "type": "u8" }
      ]
    },
    {
      "name": "withdrawToken",
      "accounts": [
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "presale", "isMut": true, "isSigner": false },
        { "name": "presaleVault", "isMut": true, "isSigner": false },
        { "name": "tokenAccount", "isMut": true, "isSigner": false },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "rent", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "amount", "type": "u64" },
        { "name": "bump", "type": "u8" }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Presale",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "authority", "type": "publicKey" },
          { "name": "tokenMint", "type": "publicKey" },
          { "name": "softcapAmount", "type": "u64" },
          { "name": "hardcapAmount", "type": "u64" },
          { "name": "totalAmount", "type": "u64" },
          { "name": "pricePerToken", "type": "u64" },
          { "name": "maxTokenAmountPerAddress", "type": "u64" },
          { "name": "startTime", "type": "u64" },
          { "name": "endTime", "type": "u64" },
          { "name": "bump", "type": "u8" }
        ]
      }
    },
    {
      "name": "UserTransaction",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "buyer", "type": "publicKey" },
          { "name": "tokenAmount", "type": "u64" },
          { "name": "quoteAmount", "type": "u64" },
          { "name": "isClaimed", "type": "bool" },
          { "name": "bump", "type": "u8" }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidTimestamp",
      "msg": "The timestamp is invalid"
    },
    {
      "code": 6001,
      "name": "PresaleNotStarted",
      "msg": "Presale has not started"
    },
    {
      "code": 6002,
      "name": "PresaleEnded",
      "msg": "Presale has already ended"
    },
    {
      "code": 6003,
      "name": "PresaleInProgress",
      "msg": "Presale is in progress"
    },
    {
      "code": 6004,
      "name": "PresaleNotEnded",
      "msg": "Presale has not ended"
    },
    {
      "code": 6005,
      "name": "SoftcapNotReached",
      "msg": "Softcap not reached"
    },
    {
      "code": 6006,
      "name": "HardcapReached",
      "msg": "Hardcap reached"
    },
    {
      "code": 6007,
      "name": "MaxAmountPerAddressReached",
      "msg": "Max amount per address reached"
    },
    {
      "code": 6008,
      "name": "AlreadyClaimed",
      "msg": "Already claimed"
    },
    {
      "code": 6009,
      "name": "InvalidMaxTokenAmountPerAddress",
      "msg": "Invalid max token amount per address"
    },
    {
      "code": 6010,
      "name": "NothingToWithdraw",
      "msg": "Nothing to withdraw"
    }
  ]
}; 