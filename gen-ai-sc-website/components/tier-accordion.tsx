'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent } from '@/components/ui/card'

interface TierAccordionProps {
  tier1: string
  tier2: string
  tier3: string
  tier4: string
}

export function TierAccordion({ tier1, tier2, tier3, tier4 }: TierAccordionProps) {
  const tiers = [
    { id: 'tier1', title: 'Tier 1: Critical Onboarding', content: tier1, icon: '🎯' },
    { id: 'tier2', title: 'Tier 2: Hardware & Modern Payments', content: tier2, icon: '📱' },
    { id: 'tier3', title: 'Tier 3: High-Value Features', content: tier3, icon: '💎' },
    { id: 'tier4', title: 'Tier 4: Additional Support', content: tier4, icon: '🔧' },
  ]

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {tiers.map((tier) => (
        <AccordionItem key={tier.id} value={tier.id} className="border rounded-lg">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{tier.icon}</span>
              <span className="text-lg font-semibold text-gray-800">{tier.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <MarkdownRenderer content={tier.content} />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}