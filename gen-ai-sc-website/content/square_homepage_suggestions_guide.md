# 🎯 SC Pre-canned Suggestions Data

## Executive Summary

Based on 90 days of search data (88,177 searches from 43,050 unique users), we've identified **12 pre-canned suggestions** optimized for LLM retrieval and user engagement. This guide provides the exact structure and rationale for implementing these suggestions.

---

## 📋 The Problem We're Solving

**28% of all searches are generic onboarding queries** like "how to", "set up", "how do i" - indicating users don't know where to start. When users know what to search for, our content performs excellently (37% CTR for invoices). The gap is in **discovery and guidance**.

---

## 🎨 Implementation Structure

### **Format for Each Suggestion:**

```
[User-Facing Button Text]
├─ Clear, action-oriented question
├─ Natural language (how users actually speak)
└─ Optimized for LLM semantic search

[Backend LLM Prompt]
├─ Expanded context for retrieval
├─ Related terms and variations
└─ Target article IDs (if known)
```

---

## ✨ The 12 Pre-Canned Suggestions

### **TIER 1: Critical Onboarding** (Place at top of homepage)

#### 1️⃣ Getting Started with Square

**User-Facing Button:**
```
"How do I get started with Square?"
```

**LLM Prompt Structure:**
```
User Intent: New merchant onboarding, first-time setup, account creation
Query: "How do I get started with Square? I'm a new user and need to set up my account for the first time."
Related Terms: setup, begin, start, new account, first time, onboarding, getting started
Target Articles: 8335, 5062
Context: User has never used Square before and needs comprehensive getting started guidance
```

**Why This Works:**
- Addresses 11,936 "how to" searches (13.5% of all volume)
- Captures generic queries from lost users
- LLM can expand to cover: account creation, basic setup, first steps

---

#### 2️⃣ Account Setup

**User-Facing Button:**
```
"How do I set up my Square account?"
```

**LLM Prompt Structure:**
```
User Intent: Account configuration, initial setup, profile creation
Query: "How do I set up my Square account? I need to configure my business information and account settings."
Related Terms: setup account, configure, create account, account setup, business profile, initial configuration
Target Articles: 5062, 8568
Context: User needs step-by-step account setup instructions including business details, banking info, and basic settings
```

**Why This Works:**
- Addresses 4,093 combined "set up" + "how to set up" searches
- Explicit setup intent from new users
- LLM can guide through: business info, verification, settings

---

#### 3️⃣ First Payment

**User-Facing Button:**
```
"How do I accept my first payment?"
```

**LLM Prompt Structure:**
```
User Intent: Process first transaction, learn payment acceptance basics
Query: "How do I accept my first payment with Square? I'm ready to take my first customer payment."
Related Terms: first transaction, accept payment, process payment, take payment, first sale, payment basics
Target Articles: 5062, 5119
Context: New merchant ready to process their first transaction, needs simple step-by-step guidance
```

**Why This Works:**
- Addresses 2,185 "payment" searches
- Core functionality for new users
- LLM can cover: payment methods, card readers, mobile payments

---

#### 4️⃣ Bank Account Linking

**User-Facing Button:**
```
"How do I link my bank account?"
```

**LLM Prompt Structure:**
```
User Intent: Connect bank account for deposits, complete financial setup
Query: "How do I link my bank account to Square? I need to connect my bank to receive payments."
Related Terms: connect bank, add bank account, bank setup, link bank, bank connection, deposit account
Target Articles: 3896
Context: User needs to connect bank account to receive deposits, essential onboarding step
```

**Why This Works:**
- Addresses 831 "link bank account" searches
- Essential onboarding step (can't receive money without it)
- LLM can handle: bank verification, instant deposit, transfer timing

---

### **TIER 2: Hardware & Modern Payments** (Second section)

#### 5️⃣ Tap to Pay

**User-Facing Button:**
```
"How do I use Tap to Pay on iPhone?"
```

**LLM Prompt Structure:**
```
User Intent: Enable contactless payments on iPhone, modern payment method
Query: "How do I use Tap to Pay on iPhone? I want to accept contactless payments using my iPhone without additional hardware."
Related Terms: tap to pay, iPhone payments, contactless, NFC, phone payments, mobile tap
Target Articles: 7786
Context: User wants to enable Tap to Pay feature on iPhone for contactless payment acceptance
```

**Why This Works:**
- Addresses 1,729 "tap to pay" searches with 132 article clicks (7.6% CTR)
- Modern, high-demand feature
- LLM can cover: iPhone compatibility, setup steps, troubleshooting

---

#### 6️⃣ Square Reader Setup

**User-Facing Button:**
```
"How do I set up my Square Reader?"
```

**LLM Prompt Structure:**
```
User Intent: Hardware setup, first-time device configuration
Query: "How do I set up my Square Reader? I just received my card reader and need to connect it."
Related Terms: reader setup, card reader, hardware setup, device setup, reader connection, pairing reader
Target Articles: 5639
Context: User received Square Reader hardware and needs initial setup and pairing instructions
```

**Why This Works:**
- Addresses 762 "square reader" searches
- Critical hardware onboarding
- LLM can handle: different reader models, pairing, troubleshooting

---

#### 7️⃣ QR Code Payments

**User-Facing Button:**
```
"How do I accept payments with QR codes?"
```

**LLM Prompt Structure:**
```
User Intent: Enable QR code payments, contactless payment option
Query: "How do I accept payments with QR codes? I want customers to scan a code to pay."
Related Terms: QR code, QR payments, scan to pay, contactless QR, QR code setup
Target Articles: 5062, 7142
Context: User wants to enable QR code payment acceptance for contactless transactions
```

**Why This Works:**
- Addresses 1,926 "qr code" searches with 142 clicks (7.4% CTR)
- Popular contactless method
- LLM can cover: QR code generation, display options, customer experience

---

### **TIER 3: High-Value Features** (Third section)

#### 8️⃣ Invoicing

**User-Facing Button:**
```
"How do I send my first invoice?"
```

**LLM Prompt Structure:**
```
User Intent: Create and send invoice, billing for services
Query: "How do I send my first invoice with Square? I need to bill a customer for services."
Related Terms: create invoice, send invoice, billing, invoice setup, first invoice, invoice payment
Target Articles: 5062
Context: Service-based business needs to create and send first invoice to customer
```

**Why This Works:**
- Addresses 2,966 "invoice" searches with **1,094 clicks (37% CTR)** - highest engagement!
- Many service businesses start with invoicing
- LLM can cover: invoice creation, customization, payment collection, recurring

---

#### 9️⃣ Dashboard Navigation

**User-Facing Button:**
```
"How do I use the Square Dashboard?"
```

**LLM Prompt Structure:**
```
User Intent: Learn dashboard navigation, understand reporting interface
Query: "How do I use the Square Dashboard? I need to understand how to navigate and find information."
Related Terms: dashboard, navigation, reports, analytics, dashboard overview, finding information
Target Articles: 5062
Context: User needs orientation on Square Dashboard features, navigation, and where to find key information
```

**Why This Works:**
- Addresses 1,015 "dashboard" searches with 393 clicks (38.7% CTR)
- Critical for platform navigation
- LLM can cover: dashboard sections, reports, transaction history, settings

---

#### 🔟 Processing Fees

**User-Facing Button:**
```
"What are Square's processing fees?"
```

**LLM Prompt Structure:**
```
User Intent: Understand pricing, fee structure, cost transparency
Query: "What are Square's processing fees? I need to understand the costs for accepting payments."
Related Terms: fees, pricing, processing fees, transaction fees, costs, square fees, fee structure
Target Articles: 5068, 5822
Context: User needs transparent information about Square's fee structure and pricing
```

**Why This Works:**
- Addresses 1,063 "square fees" searches
- Critical pre-purchase and onboarding question
- LLM can cover: fee structure, different payment types, fee calculations

---

### **TIER 4: Additional Support** (Fourth section or expandable)

#### 1️⃣1️⃣ Device Setup (Generic)

**User-Facing Button:**
```
"How do I set up my Square device?"
```

**LLM Prompt Structure:**
```
User Intent: General hardware setup, any Square device
Query: "How do I set up my Square device? I need help configuring my Square hardware."
Related Terms: device setup, hardware setup, terminal setup, POS setup, device configuration
Target Articles: 5062
Context: User has Square hardware (reader, terminal, stand) and needs setup guidance
```

**Why This Works:**
- Addresses 804 "device" searches
- Covers all device types generically
- LLM can route to specific device guides

---

#### 1️⃣2️⃣ Payment Links

**User-Facing Button:**
```
"How do I create payment links?"
```

**LLM Prompt Structure:**
```
User Intent: Create shareable payment links, remote payment collection
Query: "How do I create payment links? I need to send payment requests to customers remotely."
Related Terms: payment link, payment request, send payment link, online payment link, shareable link
Target Articles: 6692
Context: User needs to create and share payment links for remote payment collection
```

**Why This Works:**
- Addresses 1,433 "payment link" searches with 150 clicks (10.5% CTR)
- Popular for businesses without physical presence
- LLM can cover: link creation, customization, sharing methods

---

## 🏗️ Technical Implementation Guidelines

### **For LLM Prompt Engineering:**

#### **1. Query Expansion Pattern:**
```python
{
  "user_query": "[Button text]",
  "expanded_context": {
    "primary_intent": "[Main user goal]",
    "related_terms": ["term1", "term2", "term3"],
    "target_articles": ["article_id_1", "article_id_2"],
    "user_context": "[User situation/background]"
  }
}
```

#### **2. Semantic Search Optimization:**
- Include **synonyms** and **related terms** in prompt
- Add **user context** (new user, first time, etc.)
- Specify **article IDs** when known for direct retrieval
- Use **natural language** that matches user speech patterns

#### **3. RAG Retrieval Strategy:**
```
1. Parse user button click → Extract intent
2. Expand query with related terms
3. Perform semantic search across help articles
4. Rank results by relevance + engagement data
5. Return top 3-5 articles with context
6. Generate conversational response with article links
```

---

## 📊 Success Metrics

### **Track These KPIs:**

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| Generic "how to" searches | 11,936/90 days | -30% | Weekly search volume |
| Homepage button CTR | N/A | >15% | Click-through rate |
| Time to first article | N/A | <30 seconds | User journey tracking |
| Article engagement rate | Varies | +20% | Clicks per search |
| "Delete account" searches | 1,222/90 days | -15% | Churn indicator |

### **A/B Test Recommendations:**

**Test 1: Button Placement**
- Control: Traditional search bar only
- Variant A: Suggestions above search
- Variant B: Suggestions below search
- Measure: CTR, time to resolution

**Test 2: Button Quantity**
- Control: 12 buttons (all tiers)
- Variant A: 8 buttons (Tiers 1-2 only)
- Variant B: 6 buttons (Tier 1 + top of Tier 2)
- Measure: User satisfaction, completion rate

**Test 3: Personalization**
- Control: Same buttons for all users
- Variant A: Different buttons for new vs. returning users
- Variant B: Buttons based on business type (retail, service, food)
- Measure: Engagement, resolution rate

---

## 🎯 Priority Implementation Roadmap

### **Phase 1: MVP (Week 1-2)**
✅ Implement Tier 1 buttons (4 critical onboarding)
✅ Basic LLM prompt structure
✅ Track button clicks and article engagement

### **Phase 2: Expansion (Week 3-4)**
✅ Add Tier 2 buttons (hardware & modern payments)
✅ Enhance LLM prompts with related terms
✅ Implement A/B testing framework

### **Phase 3: Optimization (Week 5-8)**
✅ Add Tier 3 & 4 buttons
✅ Refine prompts based on user feedback
✅ Personalization based on user type

### **Phase 4: Intelligence (Week 9+)**
✅ Machine learning for button relevance
✅ Dynamic button ordering based on engagement
✅ Predictive suggestions based on user journey

---

## 💡 Key Principles for Team

### **DO:**
✅ Use natural, conversational language
✅ Focus on user intent, not just keywords
✅ Include context in LLM prompts (new user, first time, etc.)
✅ Provide multiple related terms for semantic search
✅ Test and iterate based on engagement data
✅ Keep buttons action-oriented ("How do I...")

### **DON'T:**
❌ Use technical jargon in button text
❌ Make buttons too generic ("Help", "Support")
❌ Ignore engagement data from search logs
❌ Assume users know Square terminology
❌ Create buttons without LLM prompt structure
❌ Forget to track and measure performance

---

## 📚 Appendix: Data Sources

**Analysis Based On:**
- **Database:** `APP_SUPPORT.SUPPORT_CENTER` (Snowflake)
- **Tables:** `SUPPORT_CENTER_SEARCH_EVENTS`, `SESSION_ARTICLE_SUMMARY`
- **Time Period:** 90 days (Sept 12 - Dec 11, 2025)
- **Volume:** 88,177 searches from 43,050 unique users
- **Queries Analyzed:** Top 100 by frequency

**Key Data Points:**
- Search frequency
- Unique user count
- Article click-through rates
- Top clicked articles per query
- User journey patterns

---

## 🤝 Questions or Feedback?

This guide is a living document. As we gather data from implementation, we'll refine:
- Button text for clarity
- LLM prompt structures for better retrieval
- Tier prioritization based on engagement
- Personalization strategies

**Next Steps:**
1. Review this guide with product and engineering teams
2. Prioritize Tier 1 implementation
3. Set up tracking and analytics
4. Launch MVP with A/B testing
5. Iterate based on user behavior

---

*Document Version: 1.0*  
*Last Updated: December 11, 2025*  
*Data Source: Square Support Center Search Logs (90-day analysis)*
