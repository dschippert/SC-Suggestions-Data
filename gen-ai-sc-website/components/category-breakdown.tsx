'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Category } from '@/lib/types'
import { TrendingUp, AlertCircle } from 'lucide-react'

interface CategoryBreakdownProps {
  categories: Category[]
}

export function CategoryBreakdown({ categories }: CategoryBreakdownProps) {
  return (
    <Tabs defaultValue={categories[0].name} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {categories.map((category) => (
          <TabsTrigger key={category.name} value={category.name}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category.name} value={category.name} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {category.totalSearches.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  in this category
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Unique Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {category.totalUsers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  searching in category
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average CTR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {category.avgCtr.toFixed(1)}%
                </div>
                <Badge
                  variant={category.avgCtr > 10 ? 'default' : category.avgCtr > 5 ? 'secondary' : 'destructive'}
                  className="mt-1"
                >
                  {category.avgCtr > 10 ? 'Strong' : category.avgCtr > 5 ? 'Moderate' : 'Needs Work'}
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Key Insight</AlertTitle>
            <AlertDescription className="mt-2">
              {category.insight}
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Top Queries in {category.name}</CardTitle>
              <CardDescription>
                Queries categorized under {category.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.queries.slice(0, 10).map((query) => (
                  <div key={query.rank} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">#{query.rank}</Badge>
                      <span className="font-medium">{query.query}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">
                        {query.searches.toLocaleString()} searches
                      </Badge>
                      <Badge
                        variant={query.ctr > 10 ? 'default' : query.ctr > 5 ? 'secondary' : 'destructive'}
                      >
                        {query.ctr.toFixed(1)}% CTR
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}