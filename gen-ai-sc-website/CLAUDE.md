# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 dashboard application that visualizes Square Support Center search analytics and pre-canned suggestion recommendations. The application displays search query data, user behavior metrics, and proposed homepage suggestions to improve support content discoverability.

## Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint

# Install new shadcn/ui components
npx shadcn@latest add [component-name]
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **Components**: shadcn/ui (Radix UI primitives with Tailwind styling)
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React

### Data Flow
1. **Static Data Source**: All analytics data is hardcoded in `/lib/data.ts` (parsed from markdown documentation)
2. **Type Definitions**: TypeScript interfaces in `/lib/types.ts` define the shape of Query, Suggestion, Category, ExecutiveSummary, and CoverageData
3. **Components**: React components in `/components/` consume typed data and handle interactivity
4. **Main Page**: `/app/page.tsx` orchestrates the dashboard layout with sidebar navigation and section tracking

### Key Features
- **Sidebar Navigation**: Responsive navigation with mobile hamburger menu, tracks active section using Intersection Observer
- **Dark Mode**: Theme toggle with localStorage persistence
- **Interactive Tables**: Sortable and searchable query data with color-coded CTR indicators
- **Suggestion Cards**: Accordion-based expandable cards grouped by tiers with copy-to-clipboard functionality
- **Data Visualization**: Pie and bar charts showing coverage metrics
- **Category Analysis**: Tabbed interface for viewing queries by category

### Component Structure
- `sidebar-nav.tsx`: Navigation with mobile sheet and active section tracking
- `executive-summary.tsx`: Key metric cards
- `top-queries-table.tsx`: Sortable table with search functionality
- `suggestion-card.tsx`: Tiered accordion cards for pre-canned suggestions
- `coverage-chart.tsx`: Recharts visualizations
- `category-breakdown.tsx`: Tabbed category analysis

### Theming
Uses shadcn/ui's CSS variable system for consistent theming. Dark mode toggle switches between light and dark theme variables defined in `globals.css`.