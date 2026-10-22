# Current detail-page copy — 22 October 2026

Overview describes the product; My contribution is the single checklist of delivered work. Tech stack, real media, optional challenge/decisions and outcome complete the story. Original source narratives remain available.

## Bitlux

**Introduction:** Private-jet booking and ticketing operations.

**Role:** Full-Stack Developer

### Overview

Bitlux is a private-jet booking and operations platform. It brings booking requests, quote management, operational workflows and ticket documents into a connected experience.

### My contribution

- **Rendering & data handling:** Investigated rendering and performance issues and introduced TanStack Query for API requests and server-data caching.
- **Interface improvements:** Updated screens from Figma, added validation and toast feedback, and refactored reusable components.
- **APIs & ticket documents:** Contributed backend/API work, integrated services and generated dynamic ticket PDFs with jsPDF.

### Tech stack

Next.js · TypeScript · Tailwind CSS · TanStack Query · Redux Toolkit · PostgreSQL · jsPDF

### Optional technical decisions

- **API handling:** Introduce TanStack Query requests and caching. Address inconsistent API handling and improve affected data-rendering behavior.
- **Documents:** Generate ticket PDFs using jsPDF. Build dynamic documents from ticket information.

### Outcome

Resolved identified rendering issues, improved API handling and validation, and delivered updated interfaces and dynamic ticket documents.

## Linxx

**Introduction:** A marketplace connecting listings, ambassadors and shoppers across web and mobile.

**Role:** Full-Stack Developer

### Overview

Linxx is an ambassador marketplace spanning web and mobile. It connects marketplace listings and discovery with the approval workflows used to manage brand ambassador programs.

### My contribution

- **Marketplace features & APIs:** Contributed frontend and backend/API work for marketplace listings, approval/decline workflows, GPS discovery and Plaid integration.
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

- **Screens & shared components:** Contributed from day one, building responsive candidate, recruiter and admin interfaces with form validation and reusable components.
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

- **Marketplace frontend:** Built responsive React screens from Figma, including listing filters, cart, P2P transactions and holdings. My project responsibility was frontend development.
- **Accounts & API integration:** Integrated Clerk sign-in, sign-up and OTP, and worked with the backend developer to connect their existing Python APIs.
- **Wallets & credit workflows:** Connected wallets and smart-contract interactions with Wagmi and Reown AppKit, including carbon-credit retirement and PDF transaction receipts.

### Tech stack

React · Tailwind CSS · Material UI · Clerk · Wagmi · Reown AppKit · Web3

### Optional technical decisions

- **Accounts:** Integrate Clerk sign-in/sign-up. Connect authentication to the marketplace frontend.
- **Web3 connections:** Wagmi and Reown AppKit. Connect wallets and smart-contract transaction flows.

### Outcome

Delivered a connected marketplace frontend spanning discovery, account access, transactions, holdings and carbon-credit retirement.

## Gaming Platform

**Introduction:** A wallet-connected gaming application with user and admin workflows.

**Role:** Full-Stack Developer

### Overview

A wallet-connected gaming product with spin-wheel gameplay, referrals, bonuses and credit claims. Users can manage their accounts and rewards, while administrators manage users, claims and reward settings.

### My contribution

- **Full-stack delivery:** Turned the client’s v0 demo into a connected Next.js frontend and backend with MongoDB application data.
- **Accounts & gameplay:** Implemented Google and email/password sign-in, wallet connectivity and spin-wheel gameplay. Integrated the client-provided smart contract.
- **Referrals & rewards:** Built referral validation, bonuses, credit claims and user reward histories.
- **Administration:** Added user editing and account controls, claim/transfer approvals, and settings for referral percentages, prizes and free-spin timing.

### Tech stack

Next.js · TypeScript · Tailwind CSS · MongoDB · NextAuth · Web3

### Optional technical decisions

- **Application structure:** Next.js frontend and backend with MongoDB. Turn the client’s frontend demo into a connected full-stack application.
- **Authentication:** NextAuth Google OAuth and credentials. Support Google and email/password sign-in.

### Outcome

Turned the frontend demo into a working full-stack application with connected accounts, gameplay, referrals, credits and administrative workflows.

## Development Solutions Group

**Introduction:** A responsive company website built to the client’s requested presentation.

**Role:** Frontend Developer

### Overview

Development Solutions Group’s company website presents its business and projects through Home, About and Projects pages, with a Contact interface for enquiries.

### My contribution

- **Company pages:** Built responsive Home, About, Projects and Contact pages from the client’s design with React, TypeScript and Tailwind CSS. My project responsibility was frontend development.
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

- **Ticket investigation:** As a Junior Software Engineer at Strategist HUB shadowing the CTO, traced bugs through 27+ connected React/Next.js repositories and shared packages.
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

- **Mobile camera scanning:** Implemented iOS/Android camera scanning with camera selection, zoom, torch controls and permission handling.
- **Combined app experience:** Added a button to open scanning in a standalone browser context while preserving the existing embedded Shopify experience.
- **Product labels & PDFs:** Built configurable label sizes, product search/selection and quantities, Save/Cancel editing and long-text handling across React and Rails. Connected barcode and PDF generation.
- **Inventory & scan handling:** Integrated Shopify product, variant, inventory-location and metafield data. Worked on quantity-on-hand edits, missing-location fallback, scan tags and rescan behavior.

### Key challenge & solution

**The challenge:** The existing application was embedded-only. In this implementation, the Shopify iframe restricted the camera/media permissions needed for mobile barcode scanning, so the scanning workflow could not run successfully inside that embedded context.

**My solution:** Kept the embedded app and added an in-app button that opened the application in a standalone browser context. Users could grant camera access there and complete barcode scanning successfully. This combined approach preserved embedded workflows without converting the entire app to standalone mode.

### Tech stack

Ruby on Rails · React · Shopify GraphQL API · JsBarcode · WickedPDF · PDF-merging tools

### Optional technical decisions

- **Label generation:** JsBarcode, WickedPDF and PDF-merging tools. Generate barcodes and printable product labels.
- **Shopify data:** GraphQL product, variant, location and metafield integration. Support labels and handle missing inventory-location data.

### Outcome

Enabled successful camera scanning in a standalone browser context while preserving the embedded app, and completed the described label-printing and Shopify-data improvements.
