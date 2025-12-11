export interface Query {
  rank: number
  query: string
  searches: number
  users: number
  article: number | null
  clicks: number
  ctr: number
  category?: string
  tier?: number
}

export interface Suggestion {
  id: string
  tier: number
  buttonText: string
  userFacing: string
  llmPrompt: string
  intent: string
  relatedTerms: string[]
  targetArticles: number[]
  coverage: number
  searches: number
  ctr: number
  whyItWorks: string[]
  icon?: string
}

export interface Category {
  name: string
  queries: Query[]
  totalSearches: number
  totalUsers: number
  avgCtr: number
  insight: string
  color: string
}

export interface ExecutiveSummary {
  totalSearches: number
  uniqueUsers: number
  coverage: number
  genericOnboardingPercentage: number
  topPerformingQuery: {
    query: string
    ctr: number
  }
}

export interface MetricCard {
  title: string
  value: string | number
  description: string
  icon: string
  trend?: 'up' | 'down' | 'neutral'
  change?: number
}

export interface CoverageData {
  covered: number
  notCovered: number
  breakdown: {
    category: string
    percentage: number
    color: string
  }[]
}