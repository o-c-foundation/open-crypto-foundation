import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Define the claims data structure
export interface Claim {
  timestamp: string;
  walletAddress: string;
  allocation: number;
  status: 'pending' | 'completed';
}

// Get the path to our JSON file that will store claims
const dataFilePath = path.join(process.cwd(), 'data', 'claims.json');

// Make sure the data directory exists
const ensureDirectoryExists = () => {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Get all claims
const getClaims = (): Claim[] => {
  try {
    ensureDirectoryExists();
    if (!fs.existsSync(dataFilePath)) {
      // If file doesn't exist yet, return empty array
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
    ensureDirectoryExists();
    fs.writeFileSync(dataFilePath, JSON.stringify(claims, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving claims:', error);
    throw new Error('Failed to save claims');
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      // Return all claims
      return res.status(200).json(getClaims());
    
    case 'POST':
      try {
        // Add a new claim
        const { walletAddress, allocation } = req.body;
        
        if (!walletAddress || !allocation) {
          return res.status(400).json({ error: 'Wallet address and allocation are required' });
        }
        
        const claims = getClaims();
        const newClaim: Claim = {
          timestamp: new Date().toISOString(),
          walletAddress,
          allocation,
          status: 'pending'
        };
        
        claims.push(newClaim);
        saveClaims(claims);
        
        return res.status(201).json(newClaim);
      } catch (error) {
        console.error('Error creating claim:', error);
        return res.status(500).json({ error: 'Failed to create claim' });
      }
    
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
} 