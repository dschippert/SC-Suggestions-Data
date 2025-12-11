'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent } from '@/components/ui/card'
import { Suggestion } from '@/lib/types'
import { TrendingUp, Copy, Check, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SuggestionCardProps {
  suggestions: Suggestion[]
}

export function SuggestionCards({ suggestions }: SuggestionCardProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const getTierColor = (tier: number) => {
    switch (tier) {
      case 1:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 2:
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 3:
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 4:
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const groupedSuggestions = suggestions.reduce((acc, suggestion) => {
    const tier = suggestion.tier
    if (!acc[tier]) {
      acc[tier] = []
    }
    acc[tier].push(suggestion)
    return acc
  }, {} as Record<number, Suggestion[]>)

  const tierTitles = {
    1: 'Critical Onboarding',
    2: 'Hardware & Modern Payments',
    3: 'High-Value Features',
    4: 'Additional Support'
  }

  return (
    <div className="space-y-6">
      {Object.entries(groupedSuggestions).map(([tier, tierSuggestions]) => (
        <div key={tier} className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge className={cn('text-lg px-3 py-1', getTierColor(Number(tier)))}>
              Tier {tier}
            </Badge>
            <h3 className="text-lg font-semibold">
              {tierTitles[Number(tier) as keyof typeof tierTitles]}
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {tierSuggestions.map((suggestion) => (
              <AccordionItem
                key={suggestion.id}
                value={suggestion.id}
                className="border rounded-lg"
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{suggestion.icon}</span>
                      <h3 className="text-lg font-semibold text-left">
                        {suggestion.buttonText}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">
                        {suggestion.searches.toLocaleString()} searches
                      </Badge>
                      <Badge
                        variant={suggestion.ctr > 10 ? 'default' : 'destructive'}
                      >
                        {suggestion.ctr.toFixed(1)}% CTR
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <Alert>
                      <TrendingUp className="h-4 w-4" />
                      <AlertTitle>Why This Works</AlertTitle>
                      <AlertDescription>
                        <ul className="list-disc pl-4 space-y-1 mt-2">
                          {suggestion.whyItWorks.map((reason, index) => (
                            <li key={index}>{reason}</li>
                          ))}
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">LLM Prompt Structure</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(suggestion.llmPrompt, suggestion.id)}
                          >
                            {copiedId === suggestion.id ? (
                              <>
                                <Check className="h-4 w-4 mr-2" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-2" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                        <Card className="bg-gray-50 dark:bg-gray-900">
                          <CardContent className="p-4">
                            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                              <code>{suggestion.llmPrompt}</code>
                            </pre>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-medium">Related Terms:</span>
                        {suggestion.relatedTerms.map((term) => (
                          <Badge key={term} variant="secondary">
                            {term}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Target Articles:</span>
                        {suggestion.targetArticles.map((article) => (
                          <Badge key={article} variant="outline">
                            {article}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}