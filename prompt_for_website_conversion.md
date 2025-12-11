# Prompt for LLM: Convert Markdown to Next.js Website with shadcn/ui

## Context
I have a markdown document (`square_homepage_suggestions_guide.md`) that contains data analysis and recommendations for Square Support Center pre-canned suggestions. I need you to convert this into a beautiful, interactive Next.js website using shadcn/ui components.

## Requirements

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **UI Library:** shadcn/ui components
- **Styling:** Tailwind CSS
- **Typography:** Use proper heading hierarchy and readable font sizes

### Design Guidelines

#### 1. **Layout & Structure**
- Create a clean, professional layout with a sidebar navigation
- Sticky header with document title
- Sidebar should show all major sections with smooth scroll navigation
- Main content area with proper spacing and max-width for readability (max-w-4xl)
- Responsive design (mobile-friendly sidebar that collapses to hamburger menu)

#### 2. **shadcn/ui Components to Use**

**For Data Tables:**
- Use `<Table>` component from shadcn/ui for all data tables
- Make tables sortable and searchable where appropriate
- Add hover states and alternating row colors
- Include pagination for tables with >20 rows
- Make tables responsive (horizontal scroll on mobile)

**For Statistics & Metrics:**
- Use `<Card>` components for key metrics in the Executive Summary
- Use `<Badge>` for CTR percentages and fire emoji indicators (🔥)
- Use `<Progress>` bars to visualize coverage percentages

**For Sections:**
- Use `<Accordion>` for collapsible sections (especially the 12 suggestions)
- Use `<Tabs>` to organize the 4 category breakdowns (Onboarding, Payments, Hardware, Products)
- Use `<Separator>` between major sections

**For Callouts & Insights:**
- Use `<Alert>` component for key insights and observations
- Use different alert variants (default, destructive, warning) for different insight types

**For Code Blocks:**
- Use `<Code>` component with proper syntax highlighting for LLM prompt structures
- Add copy-to-clipboard button for each code block

**For Navigation:**
- Use `<ScrollArea>` for sidebar navigation
- Use `<Button>` with ghost variant for navigation items
- Highlight active section in sidebar

#### 3. **Visual Enhancements**

**Color Coding:**
- Use green/success colors for high CTR (>20%)
- Use yellow/warning colors for medium CTR (5-20%)
- Use red/destructive colors for low CTR (<1%)
- Use blue/primary colors for onboarding-related items

**Icons:**
- Add relevant Lucide icons to section headers
- Use `TrendingUp`, `TrendingDown` icons for CTR indicators
- Use `Search`, `Users`, `Target` icons for metrics
- Use `CheckCircle2`, `XCircle` for included/excluded queries

**Data Visualization:**
- Create a simple bar chart for the "Coverage Analysis" section using Recharts
- Show the 62.9% vs 37.1% split visually
- Add a donut chart for category breakdown percentages

#### 4. **Interactive Features**

**Search & Filter:**
- Add a search bar at the top to filter through the 50 queries
- Add filter buttons for categories (Onboarding, Payments, Hardware, Products)
- Highlight search matches in the table

**Expandable Suggestion Cards:**
- Each of the 12 suggestions should be in an expandable card
- Show: Button text, Data coverage, CTR, and "Why This Works"
- Click to expand and see full LLM Prompt Structure
- Add a "Copy Prompt" button for each suggestion

**Tooltips:**
- Add tooltips to explain CTR, unique users, etc.
- Use `<Tooltip>` component from shadcn/ui

#### 5. **Specific Section Implementations**

**Executive Summary:**
```jsx
- 3 stat cards showing:
  1. Total searches (88,177+)
  2. Unique users (43,050)
  3. Coverage (62.9%)
- Each card should have an icon, large number, and description
```

**Top 50 Queries Table:**
```jsx
- Sortable table with columns: Rank, Query, Searches, Users, Article, Clicks, CTR
- Color-code CTR column based on percentage
- Add 🔥 emoji badge for CTR >20%
- Add search/filter functionality
- Sticky header when scrolling
```

**12 Suggestions Mapping Table:**
```jsx
- Expandable rows showing which queries each suggestion covers
- Progress bar for combined volume
- Click row to jump to detailed suggestion below
```

**Category Breakdown:**
```jsx
- Use Tabs component with 4 tabs: Onboarding, Payments, Hardware, Products
- Each tab shows:
  - Summary stats card
  - Detailed query table
  - Key insight alert
```

**The 12 Suggestions:**
```jsx
- Accordion with 12 items (grouped by tier)
- Each item shows:
  - Tier badge (Tier 1, 2, 3, 4)
  - Button text (large, prominent)
  - Quick stats (searches covered, CTR)
  - Expandable section with:
    - LLM Prompt Structure (code block with copy button)
    - "Why This Works" bullet points
    - Related queries list
```

**Coverage Analysis:**
```jsx
- Visual chart showing 62.9% covered vs 37.1% not covered
- Breakdown tree visualization
- Use different colors for each category
```

#### 6. **Additional Features**

**Dark Mode:**
- Implement dark mode toggle using shadcn/ui theme
- Ensure all colors work in both light and dark mode

**Export Options:**
- Add button to export data as CSV
- Add button to print-friendly view

**Accessibility:**
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

### File Structure

```
app/
├── page.tsx (main page)
├── layout.tsx (root layout with sidebar)
├── components/
│   ├── executive-summary.tsx
│   ├── top-queries-table.tsx
│   ├── suggestions-mapping.tsx
│   ├── category-breakdown.tsx
│   ├── suggestion-card.tsx
│   ├── coverage-chart.tsx
│   ├── sidebar-nav.tsx
│   └── search-filter.tsx
├── lib/
│   └── data.ts (parsed markdown data)
└── styles/
    └── globals.css
```

### Data Parsing

Parse the markdown file and extract:
1. All tables into typed TypeScript objects
2. All statistics and metrics
3. All 12 suggestions with their prompt structures
4. Category breakdowns
5. Coverage analysis data

Create proper TypeScript interfaces for:
- `Query` (rank, query, searches, users, article, clicks, ctr)
- `Suggestion` (id, tier, buttonText, intent, relatedTerms, targetArticles, coverage, ctr)
- `Category` (name, queries, totalSearches, totalUsers, avgCtr, insight)

### Example Component Structure

```tsx
// Example for Suggestion Card
<Accordion type="single" collapsible>
  <AccordionItem value="suggestion-1">
    <AccordionTrigger>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Tier 1</Badge>
          <h3 className="text-lg font-semibold">
            How do I get started with Square?
          </h3>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline">26,114 searches</Badge>
          <Badge variant="destructive">0.3% CTR</Badge>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4">
        <Alert>
          <TrendingUp className="h-4 w-4" />
          <AlertTitle>Why This Works</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-4 space-y-1">
              <li>Addresses 11,936 "how to" searches (13.5% of all volume)</li>
              <li>Captures generic queries from lost users</li>
              <li>LLM can expand to cover: account creation, basic setup, first steps</li>
            </ul>
          </AlertDescription>
        </Alert>
        
        <div>
          <h4 className="font-semibold mb-2">LLM Prompt Structure</h4>
          <CodeBlock code={promptStructure} language="yaml" />
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Output Requirements

Please provide:
1. Complete Next.js app code with all components
2. TypeScript interfaces for data structures
3. Data parsing logic to convert markdown to structured data
4. Installation instructions (including shadcn/ui components to install)
5. Any additional dependencies needed (Recharts for charts, etc.)

## Design Inspiration

The website should feel like:
- Modern SaaS dashboard (clean, professional)
- Data-focused (tables and charts prominent)
- Easy to navigate (clear hierarchy)
- Interactive (expandable sections, search, filters)
- Print-friendly (for sharing with stakeholders)

## Priority

Focus on:
1. **Data clarity** - Tables and charts must be easy to read
2. **Navigation** - Easy to jump between sections
3. **Interactivity** - Search, filter, expand/collapse
4. **Professional design** - This will be shared with leadership

## Additional Notes

- Use the actual data from the markdown file (don't make up numbers)
- Preserve all insights and observations from the original document
- Make sure the "Why This Works" sections are prominent for each suggestion
- Highlight the 62.9% coverage statistic prominently
- Make it easy to copy LLM prompt structures for implementation

---

**Markdown File Location:** `/Users/dschippert/Desktop/gen ai sc suggestions/square_homepage_suggestions_guide.md`

Please generate the complete Next.js application with all components, styling, and functionality described above.
