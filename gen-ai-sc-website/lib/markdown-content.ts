import fs from 'fs'
import path from 'path'

export function loadMarkdownContent() {
  const filePath = path.join(process.cwd(), 'content', 'square_homepage_suggestions_guide.md')
  const content = fs.readFileSync(filePath, 'utf8')
  return content
}

// Split content into sections based on headers
export function parseMarkdownSections(content: string) {
  // Split by Tier sections for the accordion
  const sections = {
    overview: '',
    tier1: '',
    tier2: '',
    tier3: '',
    tier4: '',
    implementation: '',
    metrics: '',
    roadmap: '',
  }

  // Extract Executive Summary and Problem Statement for overview
  const overviewMatch = content.match(/^#[^#].*?(?=##\s+Implementation Structure)/s)
  if (overviewMatch) {
    sections.overview = overviewMatch[0]
  }

  // Extract Tier 1
  const tier1Match = content.match(/### Tier 1:.*?(?=### Tier 2:|## Technical Implementation|$)/s)
  if (tier1Match) {
    sections.tier1 = tier1Match[0]
  }

  // Extract Tier 2
  const tier2Match = content.match(/### Tier 2:.*?(?=### Tier 3:|## Technical Implementation|$)/s)
  if (tier2Match) {
    sections.tier2 = tier2Match[0]
  }

  // Extract Tier 3
  const tier3Match = content.match(/### Tier 3:.*?(?=### Tier 4:|## Technical Implementation|$)/s)
  if (tier3Match) {
    sections.tier3 = tier3Match[0]
  }

  // Extract Tier 4
  const tier4Match = content.match(/### Tier 4:.*?(?=## Technical Implementation|$)/s)
  if (tier4Match) {
    sections.tier4 = tier4Match[0]
  }

  // Extract Implementation section
  const implementationMatch = content.match(/## Technical Implementation.*?(?=## Success Metrics|$)/s)
  if (implementationMatch) {
    sections.implementation = implementationMatch[0]
  }

  // Extract Metrics section
  const metricsMatch = content.match(/## Success Metrics.*?(?=## Priority Implementation Roadmap|$)/s)
  if (metricsMatch) {
    sections.metrics = metricsMatch[0]
  }

  // Extract Roadmap and remaining sections
  const roadmapMatch = content.match(/## Priority Implementation Roadmap.*$/s)
  if (roadmapMatch) {
    sections.roadmap = roadmapMatch[0]
  }

  return sections
}