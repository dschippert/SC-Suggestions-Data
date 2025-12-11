'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { Card, CardContent } from '@/components/ui/card'
import 'highlight.js/styles/github.css'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-10 mb-6 text-gray-900 border-b pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-800 border-b pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => {
            const text = String(children)
            const isTier = text.includes('Tier')

            if (isTier) {
              return (
                <Card className="mt-8 mb-4 border-2 border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {children}
                    </h3>
                  </CardContent>
                </Card>
              )
            }

            return (
              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-700">
                {children}
              </h3>
            )
          },
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mt-6 mb-2 text-gray-600">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-gray-700 text-base">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 ml-6 list-disc space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 ml-6 list-decimal space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-700 leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-400 bg-blue-50 pl-6 pr-4 py-4 my-6 italic text-gray-700 rounded-r">
              {children}
            </blockquote>
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            const isInline = !match

            if (isInline) {
              return (
                <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono text-gray-800" {...props}>
                  {children}
                </code>
              )
            }

            return (
              <div className="my-6">
                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto">
                  <code className={`${className} text-sm leading-relaxed`} {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            )
          },
          pre: ({ children }) => <>{children}</>,
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-100">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-3 text-gray-700">
              {children}
            </td>
          ),
          hr: () => <hr className="my-10 border-gray-300" />,
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-700">
              {children}
            </em>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}