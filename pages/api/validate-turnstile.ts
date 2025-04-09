import type { NextApiRequest, NextApiResponse } from 'next';

// Cloudflare Turnstile secret key
const TURNSTILE_SECRET_KEY = '0x4AAAAAABG_7VpKXi4ydYPUB2WyMQXHvtE';

type TurnstileResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  error_codes?: string[];
  action?: string;
  cdata?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { token } = req.body;

    // Ensure token is provided
    if (!token) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing token' 
      });
    }

    // Get client IP for additional security
    const ip = req.headers['x-forwarded-for'] || 
               req.connection.remoteAddress || 
               'unknown';

    // Make request to Cloudflare Turnstile API to validate the token
    const formData = new URLSearchParams();
    formData.append('secret', TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    formData.append('remoteip', ip as string);

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const outcome: TurnstileResponse = await result.json();

    // If Cloudflare says the token is valid
    if (outcome.success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Token validated successfully' 
      });
    } else {
      console.error('Turnstile validation failed:', outcome);
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid token',
        errors: outcome.error_codes
      });
    }
  } catch (error) {
    console.error('Error validating turnstile token:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error'
    });
  }
} 