# Miyuri Portfolio (Next.js)

This is a sample, fully working Next.js portfolio site. Replace the placeholder project descriptions and images with your own content.

Features
- Static portfolio homepage with sample projects
- Contact form that sends email via an API route using Nodemailer (requires SMTP credentials)

Quick start

1. Copy `.env.example` to `.env.local` and fill the SMTP values and `RECEIVER_EMAIL`.

2. Install dependencies and run development server:

```powershell
cd "d:/Miyuri/Miyuri Lokuhewage/Miyuri-web"
npm install
npm run dev
```

3. Open `http://localhost:3000`.

How contact emails work
- The contact form submits to `POST /api/contact`.
- The API route uses `nodemailer` and the SMTP settings from environment variables to forward the message to `RECEIVER_EMAIL`.

Deployment
- This works well on Vercel. Add the same environment variables to Vercel dashboard.

Notes
- Replace images in the `public/` folder and update project text in `pages/index.js`.
