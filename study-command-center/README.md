# Study Command Center — Local-First

A lightweight personal study dashboard for IBPS RRB Officer Scale-I and SSC Scientific Assistant in IMD preparation.

## Why this version is lighter

The original MERN version used Express, MongoDB, Mongoose, JWT cookies and Vercel serverless API routing. For a single-user study app, that adds deployment and maintenance work without much benefit.

This version is **frontend-only**:

- React + Vite
- Browser `localStorage` for tasks, progress, mistakes, mocks and syllabus tracking
- No Express server
- No MongoDB
- No API routes
- No database seed command
- No backend environment variables
- Static Vercel deployment
- JSON export/import for backups or moving to another browser/device
- Local PIN lock for convenience (not server-side security)

## Run locally

From the project root:

```bash
npm install
npm --prefix client install
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

On first launch, create a local PIN. Your data is stored only in that browser.

## Production build

```bash
npm run build
```

The production files are created in `client/dist`.

## Deploy to Vercel

Import the repository into Vercel. The included `vercel.json` already points Vercel to the Vite build.

No MongoDB, Express server, API deployment or environment variables are required.

## Data backup

Use **Settings → Export JSON** regularly. Use **Import** to restore a backup on another browser/device.

## Important privacy note

Because this is a static client-side app, the local PIN is only a convenience lock. It does not hide the deployed JavaScript source or provide server-side authentication. Do not store passwords, financial information or other sensitive secrets in the app.
