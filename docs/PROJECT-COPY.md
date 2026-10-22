# Current detail-page copy — 22 October 2026

Overview describes the product; My contribution is the single checklist of delivered work. Tech stack, real media, optional challenge/decisions and outcome complete the story. Original source narratives remain available.

## Bitlux

**Introduction:** Private-jet booking and ticketing operations.

**Role:** Full-Stack Developer

### Overview

Bitlux is a private-jet booking and operations platform. It brings booking requests, quote management, operational workflows and ticket documents into a connected experience.

The application uses Next.js server routes with Prisma and PostgreSQL for filtered booking requests, quote records and the data used in document workflows.

### My contribution

**Existing product · Team contribution**

Contributed to an existing Sofrix product through assigned improvements and feature work across the frontend and backend/APIs. The work shown here is my contribution within the wider product team.

- **Rendering & data handling:** Investigated rendering and performance issues and introduced TanStack Query for API requests and server-data caching.
- **Interface improvements:** Updated screens from Figma, added validation and toast feedback, and refactored reusable components.
- **APIs & ticket documents:** Contributed backend/API work, integrated services and generated dynamic ticket PDFs with jsPDF.

### Tech stack

Next.js · TypeScript · Tailwind CSS · TanStack Query · Redux Toolkit · PostgreSQL · Prisma · jsPDF

### Key decisions

- **Consistent data on operational screens:** Existing screens had inconsistent API handling and data-rendering issues. Use TanStack Query for requests and cached server data. Give affected screens a shared approach to fetching and reusing data while improving their rendering behavior.

### Outcome

Resolved identified rendering issues, improved API handling and validation, and delivered updated interfaces and dynamic ticket documents.

## Linxx

**Introduction:** A marketplace connecting listings, ambassadors and shoppers across web and mobile.

**Role:** Full-Stack Developer

### Overview

Linxx is an ambassador marketplace spanning web and mobile. It connects marketplace listings and discovery with the approval workflows used to manage brand ambassador programs.

### My contribution

**Web & mobile · Team contribution**

Worked within the Sofrix team on an existing marketplace across web, mobile and backend/API flows. My scope included feature updates, integration work, debugging and support for the Capacitor mobile delivery.

- **Marketplace features & APIs:** Contributed frontend and backend/API work, and connected marketplace listings, applicant approval/decline actions, GPS discovery and Plaid-related payment flows.
- **Mobile fixes & delivery:** Investigated Capacitor-specific issues, fixed mobile behavior and supported deployment.
- **End-to-end verification:** Tested affected web and mobile journeys to verify the connected flows.

### Tech stack

Next.js · TypeScript · Tailwind CSS · TanStack Query · Redux Toolkit · PostgreSQL · Capacitor · Plaid

### Outcome

Connected and verified affected marketplace journeys, resolved web/mobile issues and supported the Capacitor mobile delivery.

## SkillMatch

**Introduction:** A recruitment and assessment product connecting candidates and hiring teams.

**Role:** Full-Stack Developer

### Overview

SkillMatch is a recruitment and assessment product for candidates, recruiters and administrators. It brings profiles, job workflows, assessments and recruitment dashboards together to support the hiring process.

### My contribution

**From day one · Team contribution**

Contributed from the start as part of the Netixsol development team. My work covered frontend delivery, authentication and API integration, alongside backend API creation under senior developer guidance.

- **Screens & shared components:** Built responsive candidate, recruiter and admin interfaces with form validation and reusable components.
- **Authentication & connected state:** Implemented authentication, integrated APIs and worked with Redux Toolkit and TanStack Query.
- **Backend APIs:** Created APIs under senior developer guidance alongside frontend delivery.

### Tech stack

Next.js · NestJS · MongoDB · Redux Toolkit · TanStack Query · Tailwind CSS · Material UI · Passport-JWT · Swagger

### Outcome

Delivered connected screens, dashboard features and authentication, and contributed backend APIs as part of the wider team.

## Hestiya Marketplace

**Introduction:** A carbon-credit marketplace for discovery, trading, holdings and retirement.

**Role:** Frontend Developer

### Overview

Hestiya is a Web3 carbon-credit marketplace for discovering and trading credits, managing holdings and retiring credits. Its user experience connects account access and marketplace workflows with wallets and blockchain transactions.

### My contribution

**Project scope · Frontend delivery**

My company role covered full-stack work; on Hestiya, I was responsible for the frontend and its integrations. I worked from supplied Figma designs and collaborated with another engineer who built the Python backend.

- **Marketplace frontend:** Built responsive React screens from Figma, including listing filters, cart, P2P transactions and holdings.
- **Accounts & API integration:** Integrated Clerk sign-in, sign-up and OTP, then connected the marketplace frontend to the other developer’s existing Python APIs.
- **Wallets & credit workflows:** Connected wallets and smart-contract interactions with Wagmi and Reown AppKit, including carbon-credit retirement and PDF transaction receipts.

### Tech stack

React · Tailwind CSS · Material UI · Clerk · Wagmi · Reown AppKit · Web3

### Outcome

Delivered a connected marketplace frontend spanning discovery, account access, transactions, holdings and carbon-credit retirement.

## Gaming Platform

**Introduction:** A wallet-connected gaming application with user and admin workflows.

**Role:** Full-Stack Developer

### Overview

A wallet-connected gaming product with spin-wheel gameplay, referrals, bonuses and credit claims. Users can manage their accounts and rewards, while administrators manage users, claims and reward settings.

### My contribution

**Client demo → Full-stack delivery**

Started from the client’s v0 frontend demo and built the connected application’s frontend, backend and data workflows. The client supplied the smart contract; my responsibility was integrating it into the product.

- **Full-stack delivery:** Turned the client’s v0 demo into a connected Next.js frontend and backend with MongoDB application data.
- **Accounts & gameplay:** Implemented Google and email/password sign-in, wallet connectivity and spin-wheel gameplay. Integrated the client-provided smart contract.
- **Referrals & rewards:** Built referral checks for invalid codes, self-referrals and users who already have a referrer, alongside bonuses, credit claims and user reward histories.
- **Administration:** Added user editing and account controls, claim/transfer approvals, and settings for referral percentages, prizes and free-spin timing.

### Tech stack

Next.js · TypeScript · Tailwind CSS · MongoDB · NextAuth · Web3

### Key decisions

- **Validate referrals before recording them:** Referral flows needed clear rules about who could refer whom. Check the referral code, existing referrer and self-referral before saving the relationship. Reject invalid or repeated referral relationships before they become part of the rewards workflow.

### Outcome

Turned the frontend demo into a working full-stack application with connected accounts, gameplay, referrals, credits and administrative workflows.

## Development Solutions Group

**Introduction:** A responsive company website built to the client’s requested presentation.

**Role:** Frontend Developer

### Overview

Development Solutions Group’s company website presents its business and projects through Home, About and Projects pages, with a Contact interface for enquiries.

### My contribution

**Project scope · Frontend delivery**

My company role covered full-stack work; this project focused on frontend delivery. I built the company website from the client’s requested design and implemented the contact-form interface and validation.

- **Company pages:** Built responsive Home, About, Projects and Contact pages from the client’s design with React, TypeScript and Tailwind CSS.
- **Contact experience:** Implemented contact-form validation with Formik and Yup, alongside consistent spacing and presentation across screen sizes.

### Tech stack

React 19 · TypeScript · Tailwind CSS · Formik · Yup

### Outcome

Delivered the requested company website with responsive page layouts and a validated contact interface.

## Get Foodies

**Introduction:** A food application with web, iOS and Android experiences, product listings, discounts and account settings.

**Role:** Full-Stack Developer · Web & Mobile

### Overview

Get Foodies is a food application for web, iOS and Android. It combines product listings, dynamic banners and discounts with account and theme settings; its mobile experience also includes onboarding, multilingual interfaces and location-related features.

### My contribution

**Web & mobile · Full-stack contribution**

Worked at Sofrix on mobile interfaces from supplied Figma designs, plus web UI and backend features. My contribution spanned the customer-facing screens and the product, promotion and settings services described below.

- **Mobile interfaces:** Built iOS and Android screens from Figma and connected registration, OTP verification, profile completion and banner interfaces.
- **Web UI & backend features:** Built web application interfaces and backend features for product listings, dynamic banners, discounts, account settings and theme settings.
- **State & localization:** Implemented Redux Toolkit state, multilingual interfaces, location-related features and file-based routing.

### Tech stack

React Native · Expo · Node.js · Express · Redux Toolkit · i18n · File-based routing

**Development workflow:** I used AI-assisted learning alongside implementation to understand React Native, Expo and mobile application lifecycle behavior.

### Outcome

Delivered web interfaces and backend features for listings, banners, discounts and settings, alongside connected onboarding, profile, multilingual and location-related mobile flows.

## Onyx

**Introduction:** Browser-based operation and monitoring for an existing desktop printing system.

**Role:** Frontend Developer

### Overview

The client wanted users in different locations to operate printing workflows through a browser. The existing desktop application accepted PDF jobs and copy quantities and remained responsible for printer execution.

### My contribution

**Existing system · Frontend integration**

My scope was the browser interface, existing API integration and a frontend Socket.io listener. The existing desktop application and its APIs handled print execution; I did not create or modify the backend APIs.

- **Browser-based printing:** Built web controls that used existing desktop APIs to submit PDF print jobs and copy quantities. The desktop application handled printer execution.
- **Live job & printer status:** Integrated a frontend Socket.io listener for ready, queued, printing, failed and printed states, plus printer online/offline updates.

### Tech stack

Onyx Thrive / desktop APIs · Socket.io frontend listener

### Outcome

Enabled browser-based operation and monitoring while the existing desktop application continued to execute print jobs.

## Keller Williams

**Introduction:** A real-estate platform connecting property search, local agents and customer experiences.

**Role:** Junior Software Engineer

### Overview

Keller Williams’ public real-estate platform helps people explore homes to buy or rent and connect with local agents. Its wider technology ecosystem supports agents and customer relationships across the property journey.

### My contribution

**Existing platform · Junior team contribution**

Worked as a Junior Software Engineer at Strategist HUB while shadowing the CTO. I handled assigned bug and translation tickets within the existing multi-repository platform and followed the team’s review, merge and testing workflows.

- **Ticket investigation:** Traced assigned bugs through 27+ connected React/Next.js repositories and shared packages.
- **Translation updates:** Added i18next key/value pairs for translation workflows supporting up to 22 languages and incorporated generated translation pull requests from the team’s existing tooling.
- **Dependent changes & tests:** Coordinated child-repository merges, retested parent applications and updated affected Jest tests and CI coverage checks.

### Tech stack

React.js · Next.js · i18next · Jest · Git / pull requests · CI coverage checks · Microfrontends / shared packages

### Outcome

Resolved assigned bugs and translation tickets, verified dependent applications and maintained affected tests and coverage checks.

## Shopify GP-Lite / Barcode Buddy

**Introduction:** Shopify picking, packing, barcode scanning and product-label printing.

**Role:** Freelance Full-Stack Developer

### Overview

GP-Lite / Barcode Buddy helps Shopify merchants with picking, packing, barcode scanning and product-label printing. It connects product and inventory information to scanning and printable-label workflows.

### My contribution

**Existing app · Freelance feature delivery**

Completed scoped feature work across React and Ruby on Rails in an existing client application. My responsibility was extending scanning, labels and Shopify-data workflows while preserving the embedded app experience.

- **Mobile camera scanning:** Implemented iOS/Android camera scanning with camera selection, zoom, torch controls and permission handling.
- **Combined app experience:** Added a button to open scanning in a standalone browser context while preserving the existing embedded Shopify experience.
- **Product labels & PDFs:** Built configurable label sizes, product search/selection and quantities, Save/Cancel editing and long-text handling across React and Rails. Connected barcode and PDF generation.
- **Inventory & scan handling:** Integrated Shopify product, variant, inventory-location and metafield data. Worked on quantity-on-hand edits, missing-location fallback, scan tags and rescan behavior.

### Key challenge & solution

**The challenge:** The existing application was embedded-only. In this implementation, the Shopify iframe restricted the camera/media permissions needed for mobile barcode scanning, so the scanning workflow could not run successfully inside that embedded context.

**My solution:** Kept the embedded app and added an in-app button that opened the application in a standalone browser context. Users could grant camera access there and complete barcode scanning successfully. This combined approach preserved embedded workflows without converting the entire app to standalone mode.

### Tech stack

Ruby on Rails · React · Shopify GraphQL API · JsBarcode · WickedPDF · PDF-merging tools

### Outcome

Enabled successful camera scanning in a standalone browser context while preserving the embedded app, and completed the described label-printing and Shopify-data improvements.
