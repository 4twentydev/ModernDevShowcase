import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

// Create a serverless function for Vercel
export default async function handler(req, res) {
  // Redirect API requests to the Express backend
  if (req.url.startsWith('/api/')) {
    // This would normally connect to your backend
    // For Vercel deployment, you might need to use serverless functions
    // or a separate backend service
    const response = await fetch(`${process.env.BACKEND_URL || ''}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });
    
    const data = await response.json();
    return res.status(response.status).json(data);
  }
  
  // For non-API requests, serve the static frontend
  return res.status(200).send('OK');
}