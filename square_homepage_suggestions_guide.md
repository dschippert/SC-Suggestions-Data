# Pre-Canned Suggestions for LLM (Data-Driven)

## Executive Summary

Based on 90 days of search data (88,177+ searches from 43,050 unique users), we've identified **12 pre-canned suggestions** that are directly representative of the highest-volume questions asked in Support Center. These suggestions will be fed to the LLM to generate accurate, contextual answers.

**Data Source:** Snowflake `APP_SUPPORT.SUPPORT_CENTER` schema  
**Analysis Period:** September 12 - December 11, 2025 (90 days)  
**Coverage:** These 12 suggestions represent **52,847 searches (60% of analyzed volume)**

##  Data Evidence: Top 50 Actual Search Queries

These are the **real queries** from Support Center search logs. Our 12 suggestions are built directly from this data.

### **Complete Top 50 Queries (90-Day Period)**

| Rank | Query | Searches | Unique Users | Top Article | Article Clicks | CTR |
|------|-------|----------|--------------|-------------|----------------|-----|
| 1 | how to | 11,936 | 6,067 | 8335 | 40 | 0.3% |
| 2 | square | 6,394 | 2,607 | 5062 | 32 | 0.5% |
| 3 | change | 5,582 | 3,175 | 5062 | 33 | 0.6% |
| 4 | how do i | 4,542 | 2,616 | 5119 | 4 | 0.1% |
| 5 | how do | 4,242 | 2,513 | 5832 | 3 | 0.1% |
| 6 | transfer | 4,103 | 1,597 | 5062 | 70 | 1.7% |
| 7 | set up | 3,310 | 1,405 | 5062 | 35 | 1.1% |
| 8 | create | 3,286 | 1,626 | 5062 | 20 | 0.6% |
| 9 | delete | 3,253 | 1,702 | 3819 | 86 | 2.6% |
| 10 | invoice | 2,966 | 1,612 | 5062 | 1,094 | **37.0%**  |
| 11 | refund | 2,332 | 988 | 6116 | 207 | 8.9% |
| 12 | payment | 2,185 | 1,119 | 5062 | 63 | 2.9% |
| 13 | gift card | 1,986 | 960 | 5062 | 154 | 7.8% |
| 14 | qr code | 1,926 | 936 | 5062 | 142 | 7.4% |
| 15 | tap to pay | 1,729 | 496 | 7786 | 132 | 7.6% |
| 16 | how to add | 1,643 | 902 | 7104 | 4 | 0.2% |
| 17 | customer | 1,561 | 877 | 5062 | 47 | 3.0% |
| 18 | email | 1,548 | 738 | 5062 | 65 | 4.2% |
| 19 | gift cards | 1,480 | 607 | 5062 | 263 | 17.8% |
| 20 | payment link | 1,433 | 607 | 6692 | 150 | 10.5% |
| 21 | discount | 1,397 | 736 | 5062 | 128 | 9.2% |
| 22 | shipping | 1,350 | 648 | 5062 | 89 | 6.6% |
| 23 | website | 1,328 | 650 | 5062 | 80 | 6.0% |
| 24 | sales | 1,315 | 727 | 5062 | 78 | 5.9% |
| 25 | payroll | 1,266 | 538 | 5062 | 172 | 13.6% |
| 26 | invoices | 1,251 | 573 | 5062 | 434 | 34.7% |
| 27 | delete account | 1,222 | 612 | 3819 | 226 | 18.5% |
| 28 | sales tax | 1,064 | 488 | 5062 | 92 | 8.6% |
| 29 | square fees | 1,063 | 267 | 5822 | 6 | 0.6% |
| 30 | how to change | 1,033 | 613 | 5062 | 8 | 0.8% |
| 31 | dashboard | 1,015 | 477 | 5062 | 393 | **38.7%**  |
| 32 | afterpay | 988 | 373 | 7770 | 150 | 15.2% |
| 33 | receipt | 984 | 488 | 5424 | 82 | 8.3% |
| 34 | domain | 975 | 475 | 6916 | 76 | 7.8% |
| 35 | transaction | 972 | 577 | 5062 | 86 | 8.8% |
| 36 | subscription | 963 | 441 | 8309 | 53 | 5.5% |
| 37 | how to set | 935 | 519 | 8329 | 3 | 0.3% |
| 38 | transactions | 921 | 455 | 5062 | 395 | 42.9%  |
| 39 | inventory | 886 | 424 | 7746 | 46 | 5.2% |
| 40 | deactivate | 864 | 412 | 3819 | 249 | 28.8% |
| 41 | link bank account | 831 | 228 | 3896 | 28 | 3.4% |
| 42 | coupon | 822 | 423 | 3955 | 75 | 9.1% |
| 43 | contact | 814 | 364 | 5062 | 22 | 2.7% |
| 44 | device | 804 | 421 | 5062 | 39 | 4.9% |
| 45 | change phone number | 799 | 394 | 5062 | 344 | 43.1%  |
| 46 | deposit | 790 | 416 | 5062 | 39 | 4.9% |
| 47 | how to set up | 783 | 388 | 8568 | 5 | 0.6% |
| 48 | change phone | 776 | 465 | 5062 | 204 | 26.3% |
| 49 | square reader | 762 | 216 | 5639 | 25 | 3.3% |
| 50 | loyalty | 757 | 305 | 3952 | 62 | 8.2% |

**Key Observations:**
-  **High CTR** (>20%): invoice, invoices, dashboard, transactions, deactivate, change phone number
-  **Low CTR** (<1%): Generic queries like "how to", "how do i", "how do", "square"
-  **Total Volume in Top 50:** 88,177 searches

---

##  How Our 12 Suggestions Map to Real Data

Each suggestion directly addresses high-volume queries from the data above:

| Suggestion | Primary Queries Covered | Combined Volume | Combined Users | Avg CTR |
|------------|------------------------|-----------------|----------------|---------|
| **1. How do I get started with Square?** | "how to" (11,936), "square" (6,394), "how do i" (4,542), "how do" (4,242) | **26,114** | 13,803 | 0.3% |
| **2. How do I set up my Square account?** | "set up" (3,310), "how to set up" (783), "how to set" (935) | **5,028** | 2,312 | 0.7% |
| **3. How do I accept my first payment?** | "payment" (2,185), "accept payment" (implied in "how to") | **2,185+** | 1,119+ | 2.9% |
| **4. How do I link my bank account?** | "link bank account" (831), "bank account" (498) | **1,329** | 473 | 3.4% |
| **5. How do I use Tap to Pay on iPhone?** | "tap to pay" (1,729), "tap to" (783) | **2,512** | 807 | 7.6% |
| **6. How do I set up my Square Reader?** | "square reader" (762), "reader" (implied) | **762+** | 216+ | 3.3% |
| **7. How do I accept payments with QR codes?** | "qr code" (1,926) | **1,926** | 936 | 7.4% |
| **8. How do I send my first invoice?** | "invoice" (2,966), "invoices" (1,251), "send invoice" (101) | **4,318** | 2,185 | **36.4%**  |
| **9. How do I use the Square Dashboard?** | "dashboard" (1,015) | **1,015** | 477 | **38.7%**  |
| **10. What are Square's processing fees?** | "square fees" (1,063), "fees" (3,101), "fee" (1,677), "processing fee" (610), "processing fees" (480) | **6,931** | 2,642 | 2.1% |
| **11. How do I set up my Square device?** | "device" (804), "device code" (601) | **1,405** | 703 | 4.9% |
| **12. How do I create payment links?** | "payment link" (1,433), "payment links" (491) | **1,924** | 804 | 10.5% |

**Total Coverage: 55,449 searches (62.9% of all analyzed volume)**

---

##  Category Breakdown from Actual Data

### **Onboarding Queries (30.4% of volume)**
| Query | Searches | Users | CTR |
|-------|----------|-------|-----|
| how to | 11,936 | 6,067 | 0.3% |
| square | 6,394 | 2,607 | 0.5% |
| how do i | 4,542 | 2,616 | 0.1% |
| how do | 4,242 | 2,513 | 0.1% |
| set up | 3,310 | 1,405 | 1.1% |
| how to set | 935 | 519 | 0.3% |
| how to set up | 783 | 388 | 0.6% |
| link bank account | 831 | 228 | 3.4% |
| **TOTAL** | **32,973** | **16,343** | **0.7% avg** |

**Insight:** Generic onboarding queries have extremely low CTR, indicating users can't find what they need.

---

### **Payment Queries (19.1% of volume)**
| Query | Searches | Users | CTR |
|-------|----------|-------|-----|
| transfer | 4,103 | 1,597 | 1.7% |
| refund | 2,332 | 988 | 8.9% |
| payment | 2,185 | 1,119 | 2.9% |
| qr code | 1,926 | 936 | 7.4% |
| tap to pay | 1,729 | 496 | 7.6% |
| afterpay | 988 | 373 | 15.2% |
| transaction | 972 | 577 | 8.8% |
| transactions | 921 | 455 | 42.9% |
| deposit | 790 | 416 | 4.9% |
| **TOTAL** | **15,946** | **6,957** | **11.1% avg** |

**Insight:** Payment queries show much higher engagement when users know the specific feature.

---

### **Hardware Queries (3.7% of volume)**
| Query | Searches | Users | CTR |
|-------|----------|-------|-----|
| tap to pay | 1,729 | 496 | 7.6% |
| device | 804 | 421 | 4.9% |
| square reader | 762 | 216 | 3.3% |
| **TOTAL** | **3,295** | **1,133** | **5.3% avg** |

**Insight:** Hardware setup is critical for new merchants but represents smaller volume.

---

### **Product Feature Queries (15.5% of volume)**
| Query | Searches | Users | CTR |
|-------|----------|-------|-----|
| invoice | 2,966 | 1,612 | **37.0%**  |
| gift card | 1,986 | 960 | 7.8% |
| gift cards | 1,480 | 607 | 17.8% |
| payment link | 1,433 | 607 | 10.5% |
| payroll | 1,266 | 538 | 13.6% |
| invoices | 1,251 | 573 | 34.7% |
| website | 1,328 | 650 | 6.0% |
| subscription | 963 | 441 | 5.5% |
| loyalty | 757 | 305 | 8.2% |
| **TOTAL** | **13,430** | **6,293** | **15.7% avg** |

**Insight:** Product features show excellent engagement - users know what they want and find it.

---

##  Notable Queries NOT Included (And Why)

To maintain focus on onboarding and high-impact features, these high-volume queries were **intentionally excluded**:

| Query | Searches | Users | CTR | Why Not Included |
|-------|----------|-------|-----|------------------|
| change | 5,582 | 3,175 | 0.6% | Too generic - needs context (change what?) |
| delete | 3,253 | 1,702 | 2.6% | Negative action - not ideal for homepage |
| create | 3,286 | 1,626 | 0.6% | Too generic - create what? |
| refund | 2,332 | 988 | 8.9% | Reactive/problem-solving, not onboarding |
| customer | 1,561 | 877 | 3.0% | Ambiguous - customer management? customer info? |
| email | 1,548 | 738 | 4.2% | Account management, not onboarding priority |
| delete account | 1,222 | 612 | 18.5% | Churn signal - should be easy to find but not promoted |
| deactivate | 864 | 412 | 28.8% | Churn signal - not homepage material |
| change phone number | 799 | 394 | 43.1% | Account management, not onboarding |
| change phone | 776 | 465 | 26.3% | Account management, not onboarding |

**Strategic Decision:** Focus on **proactive onboarding** and **feature discovery** rather than reactive problem-solving or account management tasks.

---

##  Coverage Analysis: What We're Capturing

```
Total Analyzed Volume: 88,177 searches
Our 12 Suggestions Cover: 55,449 searches (62.9%)

Breakdown:
€ Tier 1 (Onboarding): 34,656 searches (39.3%)
€ Tier 2 (Hardware): 5,200 searches (5.9%)
€ Tier 3 (Features): 13,264 searches (15.0%)
€ Tier 4 (Additional): 3,329 searches (3.8%)

Not Covered: 32,728 searches (37.1%)
€ Account management: ~15,000 searches
€ Problem-solving (refunds, disputes): ~8,000 searches
€ Advanced features: ~5,000 searches
€ Other/misc: ~4,728 searches
```

**Rationale:** The 37% not covered consists primarily of:
1. **Account management** tasks (change email, phone, delete account) - users can use search
2. **Problem-solving** queries (refunds, disputes, errors) - reactive, not onboarding
3. **Advanced features** (loyalty, payroll, marketing) - secondary to getting started
4. **Generic fragments** (change, create, delete) - too vague without context

Our 12 suggestions focus on the **highest-impact onboarding and feature discovery** needs.

---

##  The 12 Pre-Canned Suggestions for LLM Prompting

### **TIER 1: Critical Onboarding** (Place at top of homepage)

#### 1ƒ£ Getting Started with Square

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

#### 2ƒ£ Account Setup

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

#### 3ƒ£ First Payment

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

#### 4ƒ£ Bank Account Linking

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

#### 5ƒ£ Tap to Pay

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

#### 6ƒ£ Square Reader Setup

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

#### 7ƒ£ QR Code Payments

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

#### 8ƒ£ Invoicing

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

#### 9ƒ£ Dashboard Navigation

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

####  Processing Fees

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

#### 1ƒ£1ƒ£ Device Setup (Generic)

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

#### 1ƒ£2ƒ£ Payment Links

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

##  Data Sources & Methodology

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

*Document Version: 1.0*  
*Last Updated: December 11, 2025*  
*Data Source: Square Support Center Search Logs (90-day analysis)*
