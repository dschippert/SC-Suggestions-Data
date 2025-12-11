import { Query, Suggestion, Category, ExecutiveSummary, CoverageData } from './types'

export const executiveSummary: ExecutiveSummary = {
  totalSearches: 88177,
  uniqueUsers: 43050,
  coverage: 62.9,
  genericOnboardingPercentage: 28,
  topPerformingQuery: {
    query: 'invoice',
    ctr: 37
  }
}

export const topQueries: Query[] = [
  { rank: 1, query: 'how to', searches: 11936, users: 6820, article: 8335, clicks: 33, ctr: 0.3, category: 'Onboarding', tier: 1 },
  { rank: 2, query: 'invoice', searches: 2966, users: 2099, article: 5062, clicks: 1094, ctr: 36.9, category: 'Products' },
  { rank: 3, query: 'set up', searches: 2842, users: 1995, article: 8335, clicks: 23, ctr: 0.8, category: 'Onboarding', tier: 1 },
  { rank: 4, query: 'payment', searches: 2185, users: 1560, article: 5062, clicks: 19, ctr: 0.9, category: 'Payments', tier: 1 },
  { rank: 5, query: 'qr code', searches: 1926, users: 1466, article: 7142, clicks: 142, ctr: 7.4, category: 'Payments', tier: 2 },
  { rank: 6, query: 'tap to pay', searches: 1729, users: 1339, article: 7786, clicks: 132, ctr: 7.6, category: 'Payments', tier: 2 },
  { rank: 7, query: 'print labels', searches: 1658, users: 1088, article: 5062, clicks: 23, ctr: 1.4, category: 'Hardware' },
  { rank: 8, query: 'payment link', searches: 1433, users: 1016, article: 6692, clicks: 150, ctr: 10.5, category: 'Payments', tier: 4 },
  { rank: 9, query: 'reset password', searches: 1327, users: 1289, article: 5062, clicks: 29, ctr: 2.2, category: 'Onboarding' },
  { rank: 10, query: 'how to set up', searches: 1251, users: 891, article: 5062, clicks: 20, ctr: 1.6, category: 'Onboarding', tier: 1 },
  { rank: 11, query: 'delete account', searches: 1222, users: 1137, article: 6029, clicks: 139, ctr: 11.4, category: 'Onboarding' },
  { rank: 12, query: 'download', searches: 1195, users: 866, article: 8305, clicks: 92, ctr: 7.7, category: 'Products' },
  { rank: 13, query: 'refund', searches: 1174, users: 796, article: 3788, clicks: 239, ctr: 20.4, category: 'Payments' },
  { rank: 14, query: 'square fees', searches: 1063, users: 847, article: 5068, clicks: 106, ctr: 10.0, category: 'Onboarding', tier: 3 },
  { rank: 15, query: 'cash app', searches: 1056, users: 838, article: 5822, clicks: 61, ctr: 5.8, category: 'Products' },
  { rank: 16, query: 'dashboard', searches: 1015, users: 754, article: 5062, clicks: 393, ctr: 38.7, category: 'Products', tier: 3 },
  { rank: 17, query: 'import products', searches: 967, users: 691, article: 5119, clicks: 137, ctr: 14.2, category: 'Products' },
  { rank: 18, query: 'chargeback', searches: 958, users: 762, article: 3788, clicks: 224, ctr: 23.4, category: 'Payments' },
  { rank: 19, query: 'add product', searches: 843, users: 622, article: 5119, clicks: 142, ctr: 16.8, category: 'Products' },
  { rank: 20, query: 'link bank account', searches: 831, users: 681, article: 3896, clicks: 90, ctr: 10.8, category: 'Onboarding', tier: 1 },
  { rank: 21, query: 'device', searches: 804, users: 554, article: 5062, clicks: 3, ctr: 0.4, category: 'Hardware', tier: 4 },
  { rank: 22, query: 'sales tax', searches: 800, users: 583, article: 5062, clicks: 59, ctr: 7.4, category: 'Products' },
  { rank: 23, query: 'dispute', searches: 792, users: 613, article: 3788, clicks: 184, ctr: 23.2, category: 'Payments' },
  { rank: 24, query: 'void transaction', searches: 789, users: 599, article: 3788, clicks: 140, ctr: 17.7, category: 'Payments' },
  { rank: 25, query: 'appointments', searches: 768, users: 607, article: 9209, clicks: 52, ctr: 6.8, category: 'Products' },
  { rank: 26, query: 'square reader', searches: 762, users: 569, article: 5639, clicks: 24, ctr: 3.1, category: 'Hardware', tier: 2 },
  { rank: 27, query: 'transfer money', searches: 756, users: 616, article: 6688, clicks: 37, ctr: 4.9, category: 'Payments' },
  { rank: 28, query: 'payroll', searches: 747, users: 602, article: 4949, clicks: 150, ctr: 20.1, category: 'Products' },
  { rank: 29, query: 'recurring payments', searches: 705, users: 560, article: 5062, clicks: 3, ctr: 0.4, category: 'Payments' },
  { rank: 30, query: 'instant deposit', searches: 703, users: 543, article: 3896, clicks: 128, ctr: 18.2, category: 'Payments' },
  { rank: 31, query: 'loyalty program', searches: 700, users: 531, article: 8522, clicks: 74, ctr: 10.6, category: 'Products' },
  { rank: 32, query: 'add bank account', searches: 685, users: 581, article: 5062, clicks: 18, ctr: 2.6, category: 'Onboarding' },
  { rank: 33, query: 'barcode', searches: 684, users: 520, article: 5062, clicks: 8, ctr: 1.2, category: 'Products' },
  { rank: 34, query: 'balance', searches: 639, users: 506, article: 3896, clicks: 42, ctr: 6.6, category: 'Payments' },
  { rank: 35, query: 'bank account', searches: 638, users: 492, article: 3896, clicks: 63, ctr: 9.9, category: 'Onboarding' },
  { rank: 36, query: 'customer directory', searches: 631, users: 462, article: 5062, clicks: 14, ctr: 2.2, category: 'Products' },
  { rank: 37, query: 'taxes', searches: 628, users: 461, article: 5062, clicks: 16, ctr: 2.5, category: 'Products' },
  { rank: 38, query: 'buy now pay later', searches: 627, users: 489, article: 7917, clicks: 79, ctr: 12.6, category: 'Payments' },
  { rank: 39, query: 'terminal', searches: 626, users: 463, article: 5062, clicks: 10, ctr: 1.6, category: 'Hardware' },
  { rank: 40, query: 'deactivate account', searches: 624, users: 575, article: 6029, clicks: 53, ctr: 8.5, category: 'Onboarding' },
  { rank: 41, query: 'payout', searches: 614, users: 487, article: 3896, clicks: 59, ctr: 9.6, category: 'Payments' },
  { rank: 42, query: 'inventory management', searches: 612, users: 432, article: 5119, clicks: 132, ctr: 21.6, category: 'Products' },
  { rank: 43, query: 'add customer', searches: 611, users: 459, article: 5062, clicks: 7, ctr: 1.1, category: 'Products' },
  { rank: 44, query: 'export', searches: 603, users: 452, article: 5062, clicks: 14, ctr: 2.3, category: 'Products' },
  { rank: 45, query: 'team management', searches: 574, users: 402, article: 5142, clicks: 96, ctr: 16.7, category: 'Products' },
  { rank: 46, query: 'gift cards', searches: 570, users: 445, article: 5062, clicks: 10, ctr: 1.8, category: 'Products' },
  { rank: 47, query: 'receipt', searches: 570, users: 417, article: 5062, clicks: 11, ctr: 1.9, category: 'Payments' },
  { rank: 48, query: 'change password', searches: 567, users: 528, article: 5062, clicks: 17, ctr: 3.0, category: 'Onboarding' },
  { rank: 49, query: 'business hours', searches: 560, users: 410, article: 5062, clicks: 4, ctr: 0.7, category: 'Products' },
  { rank: 50, query: 'shipping', searches: 555, users: 447, article: 7405, clicks: 59, ctr: 10.6, category: 'Products' }
]

export const suggestions: Suggestion[] = [
  {
    id: 'getting-started',
    tier: 1,
    buttonText: 'How do I get started with Square?',
    userFacing: 'How do I get started with Square?',
    llmPrompt: `User Intent: New merchant onboarding, first-time setup, account creation
Query: "How do I get started with Square? I'm a new user and need to set up my account for the first time."
Related Terms: setup, begin, start, new account, first time, onboarding, getting started
Target Articles: 8335, 5062
Context: User has never used Square before and needs comprehensive getting started guidance`,
    intent: 'New merchant onboarding',
    relatedTerms: ['setup', 'begin', 'start', 'new account', 'first time', 'onboarding', 'getting started'],
    targetArticles: [8335, 5062],
    coverage: 26114,
    searches: 11936,
    ctr: 0.3,
    whyItWorks: [
      'Addresses 11,936 "how to" searches (13.5% of all volume)',
      'Captures generic queries from lost users',
      'LLM can expand to cover: account creation, basic setup, first steps'
    ],
    icon: '🎯'
  },
  {
    id: 'account-setup',
    tier: 1,
    buttonText: 'How do I set up my Square account?',
    userFacing: 'How do I set up my Square account?',
    llmPrompt: `User Intent: Account configuration, initial setup, profile creation
Query: "How do I set up my Square account? I need to configure my business information and account settings."
Related Terms: setup account, configure, create account, account setup, business profile, initial configuration
Target Articles: 5062, 8568
Context: User needs step-by-step account setup instructions including business details, banking info, and basic settings`,
    intent: 'Account configuration',
    relatedTerms: ['setup account', 'configure', 'create account', 'account setup', 'business profile'],
    targetArticles: [5062, 8568],
    coverage: 4093,
    searches: 4093,
    ctr: 1.2,
    whyItWorks: [
      'Addresses 4,093 combined "set up" + "how to set up" searches',
      'Explicit setup intent from new users',
      'LLM can guide through: business info, verification, settings'
    ],
    icon: '⚙️'
  },
  {
    id: 'first-payment',
    tier: 1,
    buttonText: 'How do I accept my first payment?',
    userFacing: 'How do I accept my first payment?',
    llmPrompt: `User Intent: Process first transaction, learn payment acceptance basics
Query: "How do I accept my first payment with Square? I'm ready to take my first customer payment."
Related Terms: first transaction, accept payment, process payment, take payment, first sale, payment basics
Target Articles: 5062, 5119
Context: New merchant ready to process their first transaction, needs simple step-by-step guidance`,
    intent: 'Process first transaction',
    relatedTerms: ['first transaction', 'accept payment', 'process payment', 'take payment', 'first sale'],
    targetArticles: [5062, 5119],
    coverage: 2185,
    searches: 2185,
    ctr: 0.9,
    whyItWorks: [
      'Addresses 2,185 "payment" searches',
      'Core functionality for new users',
      'LLM can cover: payment methods, card readers, mobile payments'
    ],
    icon: '💳'
  },
  {
    id: 'bank-linking',
    tier: 1,
    buttonText: 'How do I link my bank account?',
    userFacing: 'How do I link my bank account?',
    llmPrompt: `User Intent: Connect bank account for deposits, complete financial setup
Query: "How do I link my bank account to Square? I need to connect my bank to receive payments."
Related Terms: connect bank, add bank account, bank setup, link bank, bank connection, deposit account
Target Articles: 3896
Context: User needs to connect bank account to receive deposits, essential onboarding step`,
    intent: 'Connect bank account',
    relatedTerms: ['connect bank', 'add bank account', 'bank setup', 'link bank', 'bank connection'],
    targetArticles: [3896],
    coverage: 831,
    searches: 831,
    ctr: 10.8,
    whyItWorks: [
      'Addresses 831 "link bank account" searches',
      'Essential onboarding step (can\'t receive money without it)',
      'LLM can handle: bank verification, instant deposit, transfer timing'
    ],
    icon: '🏦'
  },
  {
    id: 'tap-to-pay',
    tier: 2,
    buttonText: 'How do I use Tap to Pay on iPhone?',
    userFacing: 'How do I use Tap to Pay on iPhone?',
    llmPrompt: `User Intent: Enable contactless payments on iPhone, modern payment method
Query: "How do I use Tap to Pay on iPhone? I want to accept contactless payments using my iPhone without additional hardware."
Related Terms: tap to pay, iPhone payments, contactless, NFC, phone payments, mobile tap
Target Articles: 7786
Context: User wants to enable Tap to Pay feature on iPhone for contactless payment acceptance`,
    intent: 'Enable contactless payments',
    relatedTerms: ['tap to pay', 'iPhone payments', 'contactless', 'NFC', 'phone payments'],
    targetArticles: [7786],
    coverage: 1729,
    searches: 1729,
    ctr: 7.6,
    whyItWorks: [
      'Addresses 1,729 "tap to pay" searches with 132 article clicks (7.6% CTR)',
      'Modern, high-demand feature',
      'LLM can cover: iPhone compatibility, setup steps, troubleshooting'
    ],
    icon: '📱'
  },
  {
    id: 'reader-setup',
    tier: 2,
    buttonText: 'How do I set up my Square Reader?',
    userFacing: 'How do I set up my Square Reader?',
    llmPrompt: `User Intent: Hardware setup, first-time device configuration
Query: "How do I set up my Square Reader? I just received my card reader and need to connect it."
Related Terms: reader setup, card reader, hardware setup, device setup, reader connection, pairing reader
Target Articles: 5639
Context: User received Square Reader hardware and needs initial setup and pairing instructions`,
    intent: 'Hardware setup',
    relatedTerms: ['reader setup', 'card reader', 'hardware setup', 'device setup', 'reader connection'],
    targetArticles: [5639],
    coverage: 762,
    searches: 762,
    ctr: 3.1,
    whyItWorks: [
      'Addresses 762 "square reader" searches',
      'Critical hardware onboarding',
      'LLM can handle: different reader models, pairing, troubleshooting'
    ],
    icon: '🔌'
  },
  {
    id: 'qr-codes',
    tier: 2,
    buttonText: 'How do I accept payments with QR codes?',
    userFacing: 'How do I accept payments with QR codes?',
    llmPrompt: `User Intent: Enable QR code payments, contactless payment option
Query: "How do I accept payments with QR codes? I want customers to scan a code to pay."
Related Terms: QR code, QR payments, scan to pay, contactless QR, QR code setup
Target Articles: 5062, 7142
Context: User wants to enable QR code payment acceptance for contactless transactions`,
    intent: 'Enable QR code payments',
    relatedTerms: ['QR code', 'QR payments', 'scan to pay', 'contactless QR', 'QR code setup'],
    targetArticles: [5062, 7142],
    coverage: 1926,
    searches: 1926,
    ctr: 7.4,
    whyItWorks: [
      'Addresses 1,926 "qr code" searches with 142 clicks (7.4% CTR)',
      'Popular contactless method',
      'LLM can cover: QR code generation, display options, customer experience'
    ],
    icon: '📱'
  },
  {
    id: 'invoicing',
    tier: 3,
    buttonText: 'How do I send my first invoice?',
    userFacing: 'How do I send my first invoice?',
    llmPrompt: `User Intent: Create and send invoice, billing for services
Query: "How do I send my first invoice with Square? I need to bill a customer for services."
Related Terms: create invoice, send invoice, billing, invoice setup, first invoice, invoice payment
Target Articles: 5062
Context: Service-based business needs to create and send first invoice to customer`,
    intent: 'Create and send invoice',
    relatedTerms: ['create invoice', 'send invoice', 'billing', 'invoice setup', 'first invoice'],
    targetArticles: [5062],
    coverage: 2966,
    searches: 2966,
    ctr: 36.9,
    whyItWorks: [
      'Addresses 2,966 "invoice" searches with 1,094 clicks (37% CTR) - highest engagement!',
      'Many service businesses start with invoicing',
      'LLM can cover: invoice creation, customization, payment collection, recurring'
    ],
    icon: '💎'
  },
  {
    id: 'dashboard-navigation',
    tier: 3,
    buttonText: 'How do I use the Square Dashboard?',
    userFacing: 'How do I use the Square Dashboard?',
    llmPrompt: `User Intent: Learn dashboard navigation, understand reporting interface
Query: "How do I use the Square Dashboard? I need to understand how to navigate and find information."
Related Terms: dashboard, navigation, reports, analytics, dashboard overview, finding information
Target Articles: 5062
Context: User needs orientation on Square Dashboard features, navigation, and where to find key information`,
    intent: 'Learn dashboard navigation',
    relatedTerms: ['dashboard', 'navigation', 'reports', 'analytics', 'dashboard overview'],
    targetArticles: [5062],
    coverage: 1015,
    searches: 1015,
    ctr: 38.7,
    whyItWorks: [
      'Addresses 1,015 "dashboard" searches with 393 clicks (38.7% CTR)',
      'Critical for platform navigation',
      'LLM can cover: dashboard sections, reports, transaction history, settings'
    ],
    icon: '📊'
  },
  {
    id: 'processing-fees',
    tier: 3,
    buttonText: "What are Square's processing fees?",
    userFacing: "What are Square's processing fees?",
    llmPrompt: `User Intent: Understand pricing, fee structure, cost transparency
Query: "What are Square's processing fees? I need to understand the costs for accepting payments."
Related Terms: fees, pricing, processing fees, transaction fees, costs, square fees, fee structure
Target Articles: 5068, 5822
Context: User needs transparent information about Square's fee structure and pricing`,
    intent: 'Understand pricing',
    relatedTerms: ['fees', 'pricing', 'processing fees', 'transaction fees', 'costs', 'square fees'],
    targetArticles: [5068, 5822],
    coverage: 1063,
    searches: 1063,
    ctr: 10.0,
    whyItWorks: [
      'Addresses 1,063 "square fees" searches',
      'Critical pre-purchase and onboarding question',
      'LLM can cover: fee structure, different payment types, fee calculations'
    ],
    icon: '💰'
  },
  {
    id: 'device-setup',
    tier: 4,
    buttonText: 'How do I set up my Square device?',
    userFacing: 'How do I set up my Square device?',
    llmPrompt: `User Intent: General hardware setup, any Square device
Query: "How do I set up my Square device? I need help configuring my Square hardware."
Related Terms: device setup, hardware setup, terminal setup, POS setup, device configuration
Target Articles: 5062
Context: User has Square hardware (reader, terminal, stand) and needs setup guidance`,
    intent: 'General hardware setup',
    relatedTerms: ['device setup', 'hardware setup', 'terminal setup', 'POS setup', 'device configuration'],
    targetArticles: [5062],
    coverage: 804,
    searches: 804,
    ctr: 0.4,
    whyItWorks: [
      'Addresses 804 "device" searches',
      'Covers all device types generically',
      'LLM can route to specific device guides'
    ],
    icon: '🔧'
  },
  {
    id: 'payment-links',
    tier: 4,
    buttonText: 'How do I create payment links?',
    userFacing: 'How do I create payment links?',
    llmPrompt: `User Intent: Create shareable payment links, remote payment collection
Query: "How do I create payment links? I need to send payment requests to customers remotely."
Related Terms: payment link, payment request, send payment link, online payment link, shareable link
Target Articles: 6692
Context: User needs to create and share payment links for remote payment collection`,
    intent: 'Create shareable payment links',
    relatedTerms: ['payment link', 'payment request', 'send payment link', 'online payment link'],
    targetArticles: [6692],
    coverage: 1433,
    searches: 1433,
    ctr: 10.5,
    whyItWorks: [
      'Addresses 1,433 "payment link" searches with 150 clicks (10.5% CTR)',
      'Popular for businesses without physical presence',
      'LLM can cover: link creation, customization, sharing methods'
    ],
    icon: '🔗'
  }
]

export const categories: Category[] = [
  {
    name: 'Onboarding',
    queries: topQueries.filter(q => q.category === 'Onboarding'),
    totalSearches: 21449,
    totalUsers: 14512,
    avgCtr: 3.5,
    insight: 'Highest volume (24.3%) but lowest CTR (3.5%). Users are lost and need guidance.',
    color: 'blue'
  },
  {
    name: 'Payments',
    queries: topQueries.filter(q => q.category === 'Payments'),
    totalSearches: 12638,
    totalUsers: 9201,
    avgCtr: 11.6,
    insight: 'Strong CTR (11.6%). Clear intent with specific payment questions.',
    color: 'green'
  },
  {
    name: 'Hardware',
    queries: topQueries.filter(q => q.category === 'Hardware'),
    totalSearches: 3850,
    totalUsers: 2674,
    avgCtr: 2.1,
    insight: 'Low volume and CTR. Hardware setup is confusing for users.',
    color: 'orange'
  },
  {
    name: 'Products',
    queries: topQueries.filter(q => q.category === 'Products'),
    totalSearches: 17547,
    totalUsers: 12890,
    avgCtr: 12.3,
    insight: 'High engagement (12.3% CTR) when users know what they want.',
    color: 'purple'
  }
]

export const coverageData: CoverageData = {
  covered: 62.9,
  notCovered: 37.1,
  breakdown: [
    { category: 'Onboarding', percentage: 35, color: '#3B82F6' },
    { category: 'Payments', percentage: 18, color: '#10B981' },
    { category: 'Hardware', percentage: 5, color: '#F97316' },
    { category: 'Products', percentage: 5, color: '#8B5CF6' }
  ]
}

export const navigationSections = [
  { id: 'executive-summary', label: 'Executive Summary', icon: '📊' },
  { id: 'top-queries', label: 'Top 50 Queries Analysis', icon: '🔍' },
  { id: 'suggestions', label: '12 Pre-Canned Suggestions', icon: '✨' },
  { id: 'category-breakdown', label: 'Category Breakdown', icon: '📂' },
  { id: 'coverage-analysis', label: 'Coverage Analysis', icon: '📈' }
]