import { MarkdownRenderer } from '@/components/markdown-renderer'
import { loadMarkdownContent } from '@/lib/markdown-content'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Home() {
  const fullContent = loadMarkdownContent()

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header - Left Aligned */}
        <header className="mb-8 text-left border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Square Support Center
          </h1>
          <p className="text-lg text-gray-600">
            Homepage Suggestions & Pre-Canned Queries Implementation Guide
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-gray max-w-none">
          <MarkdownRenderer content={fullContent} />
        </div>
      </div>
    </main>
  )
}