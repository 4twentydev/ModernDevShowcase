# Developer Portfolio Website

A modern, responsive developer portfolio website with project showcase and contact capabilities.

## Features

- Modern responsive design
- Light/dark mode toggle
- Project showcase with filtering
- Contact form with validation
- Skills visualization
- About section

## Deployment to Vercel

This project is set up to be deployed to Vercel. Follow these steps to deploy:

1. Push your code to a GitHub repository
2. Log in to your Vercel account
3. Click "New Project" 
4. Import your GitHub repository
5. Configure the project:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click "Deploy"

## Environment Variables

If you need to connect to an external API or service, you may need to set up the following environment variables in Vercel:

- `BACKEND_URL`: The URL of your backend API (if hosted separately)

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:5000