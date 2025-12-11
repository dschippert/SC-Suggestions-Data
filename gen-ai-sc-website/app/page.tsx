'use client'

import { useState, useEffect } from 'react'
import { SidebarNav } from '@/components/sidebar-nav'
import { ExecutiveSummaryCards } from '@/components/executive-summary'
import { TopQueriesTable } from '@/components/top-queries-table'
import { SuggestionCards } from '@/components/suggestion-card'
import { CoverageChart } from '@/components/coverage-chart'
import { CategoryBreakdown } from '@/components/category-breakdown'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Moon, Sun, Target, TrendingUp, AlertCircle } from 'lucide-react'
import {
  navigationSections,
  executiveSummary,
  topQueries,
  suggestions,
  categories,
  coverageData
} from '@/lib/data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('executive-summary')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -70% 0px' }
    )

    navigationSections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav
        sections={navigationSections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Content */}
      <main className="md:ml-72">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold">SC Pre-canned Suggestions Data</h1>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </header>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
          {/* Executive Summary */}
          <section id="executive-summary" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Executive Summary</h2>
              <p className="text-muted-foreground">
                Based on 90 days of search data analysis
              </p>
            </div>
            <ExecutiveSummaryCards data={executiveSummary} />
            <Alert>
              <Target className="h-4 w-4" />
              <AlertTitle>Key Finding</AlertTitle>
              <AlertDescription>
                We&apos;ve identified 12 pre-canned suggestions that will cover 62.9% of all search volume,
                optimized for LLM retrieval and user engagement.
              </AlertDescription>
            </Alert>
          </section>

          <Separator />

          {/* Top Queries Table */}
          <section id="top-queries" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top 50 Queries Analysis</h2>
              <p className="text-muted-foreground">
                Sortable and searchable query performance data
              </p>
            </div>
            <TopQueriesTable queries={topQueries} />
          </section>

          <Separator />

          {/* 12 Suggestions */}
          <section id="suggestions" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">The 12 Pre-Canned Suggestions</h2>
              <p className="text-muted-foreground">
                Expandable cards with full implementation details
              </p>
            </div>
            <SuggestionCards suggestions={suggestions} />
          </section>

          <Separator />

          {/* Category Breakdown */}
          <section id="category-breakdown" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Category Breakdown</h2>
              <p className="text-muted-foreground">
                Performance analysis by query category
              </p>
            </div>
            <CategoryBreakdown categories={categories} />
          </section>

          <Separator />

          {/* Coverage Analysis */}
          <section id="coverage-analysis" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Coverage Analysis</h2>
              <p className="text-muted-foreground">
                Visual breakdown of query coverage
              </p>
            </div>
            <CoverageChart data={coverageData} />
          </section>

        </div>
      </main>
    </div>
  )
}