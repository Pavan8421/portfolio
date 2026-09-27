# Pavan Kumar Varanasi — Portfolio

Personal portfolio site for Pavan Kumar Varanasi, an AI Engineer building AI agents, voice AI systems, and LLM-powered products.


## Installation

### Prerequisites

- Node.js 18+
- Bun (recommended) or npm/yarn

### 1. Install dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory and add your environment variables:

```env
GITHUB_TOKEN=
COUNTER_API_KEY=
COUNTER_WORKSPACE=
COUNTER_NAME=visits
```

- `GITHUB_TOKEN` — GitHub personal access token for the contribution graph and repo stars (optional)
- `COUNTER_API_KEY` / `COUNTER_WORKSPACE` — CounterAPI v2 credentials for the footer visitor count
- `COUNTER_NAME` — counter name in your CounterAPI workspace (defaults to `visits`)

Create the counter named `visits` (or your custom `COUNTER_NAME`) in the CounterAPI dashboard first. On Vercel, add the same env vars in Project Settings → Environment Variables.

### 3. Run the development server

```bash
# Using Bun
bun dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build for Production

```bash
# Using Bun
bun run build
bun start

# Or using npm
npm run build
npm start
```

## Project Structure

```text
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
│   ├── ui/             # UI primitives
│   ├── sections/       # Page sections
│   └── layout/         # Layout components
├── constants/          # Static data and constants
├── lib/               # Utility functions
└── utils/             # Additional utilities
```

## Customization

### 1. Update Personal Information

Edit the constants in `src/constants/index.js`:

- Navigation links
- Personal introductions
- Work experiences
- Projects showcase

### 2. Modify Theme Colors

Update the theme in `src/app/globals.css`:

- CSS custom properties for light/dark themes
- Tailwind configuration in `tailwind.config.js`

### 3. Add/Remove Sections

Components are modular and can be easily added or removed from the main pages.

## Deployment Considerations

- Set the `GITHUB_TOKEN` environment variable on your host (e.g. Vercel) for the contribution graph and star counts to populate.
- Update `opengraph.png`, `favicon.ico`, and the metadata URLs in `src/app/layout.jsx` / `src/app/sitemap.js` once a custom domain is live.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://radix-ui.com/)
- Animations powered by [Framer Motion](https://framer.com/motion/)
- Original template design and structure by [Shiva Bhattacharjee](https://github.com/ShivaBhattacharjee)
