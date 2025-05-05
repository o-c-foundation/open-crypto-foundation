import { NextApiRequest, NextApiResponse } from 'next';
import { verifyTokenHoldings } from '../../../utils/dao';
import { getDatabase } from '../../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { proposalId, option, walletAddress } = req.body;
  const db = await getDatabase();

  try {
    // Verify eligibility
    const { isEligible } = await verifyTokenHoldings(walletAddress);
    if (!isEligible) {
      return res.status(403).json({ error: 'Not eligible to vote' });
    }

    // Get the proposal
    const proposal = await db.collection('proposals').findOne({ id: proposalId });
    if (!proposal) {
      return res.status(404).json({ error: 'Proposal not found' });
    }

    if (proposal.status === 'closed') {
      return res.status(400).json({ error: 'Proposal is closed' });
    }

    // Check if user has already voted
    const existingVote = await db.collection('votes').findOne({
      proposalId,
      walletAddress,
    });

    if (existingVote) {
      // Update existing vote
      await db.collection('votes').updateOne(
        { proposalId, walletAddress },
        { $set: { option } }
      );
    } else {
      // Create new vote
      await db.collection('votes').insertOne({
        proposalId,
        walletAddress,
        option,
        timestamp: new Date().toISOString(),
      });
    }

    // Update proposal votes count
    const votes = await db.collection('votes')
      .find({ proposalId })
      .toArray();

    const voteCounts = votes.reduce((acc, vote) => {
      acc[vote.option] = (acc[vote.option] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    await db.collection('proposals').updateOne(
      { id: proposalId },
      { $set: { votes: voteCounts } }
    );

    // Get updated proposal
    const updatedProposal = await db.collection('proposals').findOne({ id: proposalId });
    res.status(200).json(updatedProposal);
  } catch (error) {
    console.error('Error processing vote:', error);
    res.status(500).json({ error: 'Failed to process vote' });
  }
} 