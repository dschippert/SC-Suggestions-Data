'use client'

import { useState, useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Query } from '@/lib/types'
import { ArrowUpDown, Search, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TopQueriesTableProps {
  queries: Query[]
}

export function TopQueriesTable({ queries }: TopQueriesTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Query
    direction: 'asc' | 'desc'
  }>({ key: 'rank', direction: 'asc' })

  const handleSort = (key: keyof Query) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  const filteredAndSortedQueries = useMemo(() => {
    let filtered = queries.filter((query) =>
      query.query.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return filtered.sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue === null || aValue === undefined) return 1
      if (bValue === null || bValue === undefined) return -1

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [queries, searchTerm, sortConfig])

  const getCTRColor = (ctr: number) => {
    if (ctr > 20) return 'text-green-600 dark:text-green-400'
    if (ctr > 5) return 'text-yellow-600 dark:text-yellow-400'
    if (ctr < 1) return 'text-red-600 dark:text-red-400'
    return 'text-gray-600 dark:text-gray-400'
  }

  const getCTRBadgeVariant = (ctr: number) => {
    if (ctr > 20) return 'default'
    if (ctr > 5) return 'secondary'
    return 'destructive'
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search queries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('rank')}
                  className="h-8 px-2"
                >
                  Rank
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('query')}
                  className="h-8 px-2"
                >
                  Query
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('searches')}
                  className="h-8 px-2"
                >
                  Searches
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('users')}
                  className="h-8 px-2"
                >
                  Users
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="text-center">Article</TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('clicks')}
                  className="h-8 px-2"
                >
                  Clicks
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('ctr')}
                  className="h-8 px-2"
                >
                  CTR %
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="text-center">Tier</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedQueries.map((query) => (
              <TableRow key={query.rank}>
                <TableCell className="font-medium">{query.rank}</TableCell>
                <TableCell className="font-medium">
                  <span className={cn(
                    'font-mono text-sm',
                    searchTerm && query.query.includes(searchTerm) && 'bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded'
                  )}>
                    {query.query}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {query.searches.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {query.users.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {query.article ? (
                    <Badge variant="outline">{query.article}</Badge>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {query.clicks.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className={cn('font-semibold', getCTRColor(query.ctr))}>
                      {query.ctr.toFixed(1)}%
                    </span>
                    {query.ctr > 20 && <Flame className="h-4 w-4 text-orange-500" />}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {query.tier && (
                    <Badge variant={getCTRBadgeVariant(query.ctr)}>
                      T{query.tier}
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}