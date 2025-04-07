import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Claim } from './index';

// Get the path to our JSON file that will store claims
const dataFilePath = path.join(process.cwd(), 'data', 'claims.json');

// Get all claims
const getClaims = (): Claim[] => {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading claims:', error);
    return [];
  }
}

// Save claims to the file
const saveClaims = (claims: Claim[]) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(claims, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving claims:', error);
    throw new Error('Failed to save claims');
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow PATCH method for updating claim status
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get claim ID from URL parameter
    const { id } = req.query;
    const claimId = Array.isArray(id) ? id[0] : id;
    
    // Get status from request body
    const { status } = req.body;
    
    if (!status || (status !== 'pending' && status !== 'completed')) {
      return res.status(400).json({ error: 'Valid status (pending/completed) is required' });
    }
    
    // Get current claims
    const claims = getClaims();
    
    // Find the claim by ID (using timestamp as ID)
    const claimIndex = claims.findIndex(claim => claim.timestamp === claimId);
    
    if (claimIndex === -1) {
      return res.status(404).json({ error: 'Claim not found' });
    }
    
    // Update claim status
    claims[claimIndex].status = status;
    
    // Save updated claims
    saveClaims(claims);
    
    return res.status(200).json(claims[claimIndex]);
  } catch (error) {
    console.error('Error updating claim:', error);
    return res.status(500).json({ error: 'Failed to update claim' });
  }
} 