# HelloBiom

A React + Next.js application for visualizing skin microbiome data with filtering and sorting.

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **MUI v7** — table and UI components
- **CSS Modules** — component-level styling
- **next/font** — Roboto (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  app/            # Next.js App Router (layout, pages)
  components/     # UI components
  data/           # Static mock data
  hooks/          # Custom React hooks
  types/          # Shared TypeScript types
  globals.css     # Global styles and CSS variables
```

## Features

- Filter microbes by type (All / Bacteria / Fungi)
- Sort by abundance (ascending / descending)
- Color-coded role badges (Beneficial / Neutral / Pathogenic)
- Empty state when filter returns no results

## Time Spent

~2-3 hours

## What I Would Improve With More Time

- Fetch data from a real API instead of using static mock data
- Add pagination or infinite scroll for larger datasets
- Write unit tests for the filtering and sorting logic
- Make the UI fully responsive for mobile screens
