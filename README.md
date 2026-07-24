<div align="center">
  <h1>Rajashree Production Portfolio</h1>
  <p>A premium, fully responsive Framer-style portfolio website for Rajashree Production LLP showcasing outstanding cinematic works, commercials, documentaries, and creative visual campaigns.</p>
</div>

## Project Structure

```
rajashree-production/
├── client/                    # React + Vite + TypeScript (deployed on Vercel)
│   ├── public/images/         # Static image assets
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page-level components
│   │   ├── data/              # Static data (projects, albums, artists, blogs)
│   │   ├── utils/             # Utility functions & constants
│   │   ├── types.ts           # TypeScript type definitions
│   │   ├── App.tsx            # Root application component
│   │   ├── main.tsx           # Vite entry point
│   │   └── index.css          # Global styles / Tailwind
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── vercel.json                # Vercel deployment config
├── .gitignore
├── package.json               # Root monorepo (workspace: client)
└── README.md
```

## Run Locally

**Prerequisites:** Node.js >= 18

```bash
npm install
npm run dev       # starts Vite dev on port 3000
```

## Deploy to Vercel

```bash
npx vercel --prod
```

The `vercel.json` config points to `client/` as the root directory and uses Vite's build output.
