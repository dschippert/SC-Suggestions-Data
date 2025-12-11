'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, Users, Target, AlertCircle } from 'lucide-react'
import { ExecutiveSummary } from '@/lib/types'

interface ExecutiveSummaryProps {
  data: ExecutiveSummary
}

export function ExecutiveSummaryCards({ data }: ExecutiveSummaryProps) {
  const cards = [
    {
      title: 'Total Searches',
      value: data.totalSearches.toLocaleString(),
      description: '90-day search volume',
      icon: TrendingUp,
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: 'Unique Users',
      value: data.uniqueUsers.toLocaleString(),
      description: 'Individual searchers',
      icon: Users,
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      title: 'Coverage',
      value: `${data.coverage}%`,
      description: 'Queries covered by suggestions',
      icon: Target,
      change: 'Target: 75%',
      changeType: 'neutral' as const
    },
    {
      title: 'Generic Onboarding',
      value: `${data.genericOnboardingPercentage}%`,
      description: 'Users lost and needing guidance',
      icon: AlertCircle,
      change: 'Too high',
      changeType: 'negative' as const
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
              {card.title === 'Coverage' && (
                <Progress value={data.coverage} className="mt-2" />
              )}
              <div className="mt-2">
                <Badge
                  variant={
                    card.changeType === 'positive'
                      ? 'default'
                      : card.changeType === 'negative'
                      ? 'destructive'
                      : 'secondary'
                  }
                >
                  {card.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}