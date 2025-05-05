import { NextApiRequest, NextApiResponse } from 'next';
import { verifyTokenHoldings } from '../../../utils/dao';
import { getDatabase } from '../../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await getDatabase();

  if (req.method === 'GET') {
    try {
      const proposals = await db.collection('proposals').find({}).toArray();
      res.status(200).json(proposals);
    } catch (error) {
      console.error('Error fetching proposals:', error);
      res.status(500).json({ error: 'Failed to fetch proposals' });
    }
  } else if (req.method === 'POST') {
    const { proposal, walletAddress } = req.body;

    try {
      // Verify admin status
      const { isAdmin } = await verifyTokenHoldings(walletAddress);
      if (!isAdmin) {
        return res.status(403).json({ error: 'Only admin can create proposals' });
      }

      const newProposal = {
        ...proposal,
        id: Date.now().toString(),
        votes: {},
        createdAt: new Date().toISOString(),
        status: 'active',
      };

      await db.collection('proposals').insertOne(newProposal);
      res.status(201).json(newProposal);
    } catch (error) {
      console.error('Error creating proposal:', error);
      res.status(500).json({ error: 'Failed to create proposal' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 