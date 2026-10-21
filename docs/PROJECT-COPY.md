# Project copy — 22 October 2026

Edited for clients, hiring teams, and engineering reviewers. Includes the owner’s latest full-stack and day-one SkillMatch clarifications. No new metrics, dates, endpoints, or frameworks are invented.

## Bitlux

**Card / introduction**

A private aviation platform for booking and ticketing operations. I contributed across the frontend and backend, improving rendering, API handling and caching, updating interfaces, and generating ticket PDFs.

**Overview**

Bitlux supports the work behind private-jet bookings, bringing trip requests, operational screens, and ticket documents into a web application. I contributed to an existing product where performance issues, inconsistent data rendering, and changing interface designs needed attention alongside new feature work.

My responsibility was to investigate those problems and improve the affected interfaces and integrations. I introduced TanStack Query for API requests and caching, added validation and toast feedback, updated screens to new Figma designs, and refactored components. I also integrated backend APIs and generated dynamic ticket PDFs with jsPDF. The work resolved identified issues and improved the maintainability of the application; the product itself continues to evolve.

My scope also included backend/API contributions within the existing application.

**Outcome**

Resolved the identified rendering and performance issues, aligned affected screens with updated designs, and improved API handling and validation. Dynamic ticket PDFs and reusable components supported the existing booking and operations workflows.

## Linxx

**Card / introduction**

A job and service marketplace across web and mobile. I contributed to frontend and backend/API work, connected user flows, and resolved application and Capacitor mobile issues.

**Overview**

Linxx connects marketplace listings with ambassador and shopper workflows across web and mobile. Its features include job discovery, GPS-related functionality, approvals, and a Plaid integration. My work focused on connecting these interfaces to backend services and making the affected user journeys work from beginning to end.

I integrated APIs, updated screens, investigated bugs, and tested the connected flows. On mobile, I worked through issues specific to the Capacitor integration while supporting deployment. My contributions also included approval and decline flows, GPS features, and Plaid integration. After the changes, I verified the affected workflows across web and mobile. The ongoing product provided practical experience improving connected features across two delivery environments.

My responsibilities also included backend/API work, in addition to frontend integration and mobile debugging.

**Outcome**

Connected frontend screens to the required backend services, resolved identified web and mobile issues, and verified the affected end-to-end flows. This included marketplace interactions and fixes to the Capacitor mobile experience.

## SkillMatch

**Card / introduction**

A recruitment and assessment product I contributed to from day one. I built frontend screens, dashboards, validation and reusable components, integrated APIs, and created backend APIs under senior developer guidance.

**Overview**

SkillMatch brings candidate profiles, job workflows, assessments, and recruitment dashboards into one platform. Candidates and hiring teams need connected interfaces to move between account details, opportunities, and administrative tasks. I contributed from day one, working within the development team on frontend features, integrations and backend APIs.

My contributions included responsive UI, dashboards, form validation, shared components, and backend API integration. I used Redux Toolkit, Tailwind CSS, and TanStack Query as part of frontend delivery, and also created APIs under senior guidance. This was my first professional project, with responsibilities spanning substantial frontend implementation and supported backend contributions. I delivered these application features as part of the wider team.

**Outcome**

Delivered responsive screens and dashboard features, connected them to backend services, and contributed APIs under senior guidance. The work supported candidate, recruiter, and administrative workflows as part of the wider team.

## Hestiya Marketplace

**Card / introduction**

A carbon-credit marketplace with trading, holdings, and retirement workflows. I built its frontend from Figma and connected authentication, another developer’s backend APIs, wallets, and smart-contract interactions.

**Overview**

Hestiya Marketplace is a Web3 carbon-credit platform for discovering credits, trading, managing holdings, and retirement. The project needed a frontend that brought together conventional account and marketplace features with wallet connections and blockchain transactions. I owned the React frontend implementation, starting from supplied Figma designs.

I collaborated with the developer building the Python backend to understand its APIs and connect the interface. I integrated Clerk sign-in and sign-up, worked on wallet and smart-contract interactions with Wagmi and Reown AppKit, and delivered listing filters, cart interactions, P2P transactions, holdings, retirement, OTP verification, and PDF receipts. This connected the marketplace experience to its supporting services while keeping backend authorship with the other developer.

**Outcome**

Delivered the marketplace frontend and connected discovery, authentication, transactions, holdings, and retirement workflows to backend and Web3 services. Users could move through these capabilities in the implemented interface.

## Gaming Platform

**Card / introduction**

A wallet-connected gaming product developed from a client’s v0 demo. I built frontend and backend features covering sign-in, gameplay, referrals, credits, and administrative workflows, and integrated the client-provided smart contract.

**Overview**

The client began with a frontend demo created in v0. To become a working product, it needed application data, authentication, wallet connections, gameplay, and the user and administrative workflows behind referrals and credits. I converted that starting point into a Next.js application and built both frontend and backend functionality.

I implemented Google and email/password sign-in with NextAuth, MongoDB-backed application data, wallet integration, and the spin-wheel experience. The work also covered referral validation and rewards, bonuses, credit claims, account histories, and administrative controls for users, transfers, claims, referral percentages, prizes, and free-spin timing. I integrated a smart contract supplied by the client. The delivery turned a visual demo into connected full-stack functionality.

**Outcome**

Converted the client’s frontend demo into a working full-stack application with authentication, wallet interactions, gameplay, referrals, credits, and user/admin workflows. Smart-contract work covered integration with the client’s supplied contract.

## Development Solutions Group

**Card / introduction**

A company website built around the client’s requested presentation. I delivered responsive Home, About, Projects, and Contact pages, including a validated contact interface, using React and TypeScript.

**Overview**

Development Solutions Group needed a company website that followed the client’s requested design and presented its business and projects. The scope was focused: responsive Home, About, Projects, and Contact interfaces with a consistent presentation across screen sizes.

I built the frontend using React 19, TypeScript, and Tailwind CSS, following the supplied direction. For the contact interface, I used Formik and Yup to implement form validation. The delivery provided the requested company presentation and contact experience. The delivered pages covered the client’s requested company presentation and contact interface.

**Outcome**

Delivered the requested company presentation through responsive Home, About, Projects, and Contact pages, with a validated contact interface.

## Get Foodies

**Card / introduction**

An iOS and Android food application built from Figma designs. I built the mobile interface, contributed backend/API work, and connected onboarding, OTP verification, profile completion, multilingual and location-related features.

**Overview**

Get Foodies is a company food application for iOS and Android, with onboarding, multilingual interfaces, and location-related features. The project started with Figma designs that needed to become a mobile interface connected to backend services. I built the application UI from scratch using React Native and Expo.

My work covered registration, OTP verification, profile completion, banner interfaces, Redux Toolkit state, and API integrations. I also implemented multilingual support, location-related features, and file-based routing. The delivery connected the described mobile interfaces and flows across iOS and Android. This was also my first React Native/Expo project, providing practical experience with mobile application structure and lifecycle behavior.

Alongside the mobile interface and API integrations, I also contributed backend/API work.

**Outcome**

Implemented the supplied mobile designs and connected registration, OTP, profile, multilingual, location, and banner features to the application’s state and backend services across iOS and Android.

## Onyx

**Card / introduction**

A web interface for a client’s desktop printing workflow. I connected existing desktop APIs and displayed live job and printer updates, enabling browser-based operation while the desktop software handled printing.

**Overview**

Onyx desktop printing software connects to physical printers, accepts PDF jobs and copy quantities, and reports job and printer states. The client wanted different users to operate the workflow through a browser from different locations, rather than relying on a single computer’s interface. My role was to build and integrate the web frontend around the existing desktop application.

Web actions used the desktop application’s APIs, and a frontend Socket.io listener received updates for ready, queued, printing, failed, and printed jobs, plus online or offline printer status. The existing desktop software remained responsible for execution; I did not build a custom backend or Socket.io server. Work was carried out on the client’s laptop through remote/proxy access, so this is a private case study without public media.

**Outcome**

Enabled the client’s printing workflow to be operated and monitored through a browser. The interface displayed job progress and printer connectivity while the existing desktop application continued to execute print jobs.

## Keller Williams

**Card / introduction**

A real-estate platform spanning 27+ connected repositories. As a junior engineer shadowing the CTO, I resolved bugs and translation tickets, coordinated dependent changes, and updated Jest tests and coverage checks.

**Overview**

Keller Williams provided experience working within a real-estate platform made up of more than 27 interconnected React/Next.js repositories. These included applications and shared packages, such as table components, with translation support for up to 22 languages. I contributed as a Junior Software Engineer at Strategist HUB while shadowing the CTO.

My responsibility was to investigate assigned bugs and translation tickets, trace issues through parent and child repositories, and add required translation keys. I incorporated generated pull requests from the team’s existing translation tool, tested locally, and followed the dependency process: review and merge child changes, retest consuming applications, then progress parent changes. I also updated or added affected Jest tests to satisfy CI and coverage checks.

**Outcome**

Resolved assigned bugs and translation tickets, verified changes across dependent repositories, and updated affected Jest tests and coverage checks. The work supported the platform’s existing applications, shared packages, and multilingual interfaces.

## Shopify GP-Lite / Barcode Buddy

**Card / introduction**

Completed Shopify feature work across embedded and standalone workflows. I added mobile camera scanning and worked on product labels, PDF generation, Shopify data integrations, and scan/rescan behavior using React and Ruby on Rails.

**Overview**

GP-Lite / Barcode Buddy supports Shopify picking, packing, barcode scanning, and product-label printing. The existing application was embedded-only, and the feature work needed mobile camera scanning and standalone workflows alongside that experience. I completed the described work as a freelance full-stack developer, contributing across React and Ruby on Rails.

I implemented iOS and Android camera scanning with camera selection, zoom, torch controls, and permission handling. I also worked on configurable label sizes, product selection and quantities, Save/Cancel layout editing, barcode and PDF generation, and long-text handling. Shopify GraphQL integration covered product, variant, inventory-location, and metafield data, including missing-location fixes. The completed work preserved embedded use while adding standalone workflows and improving printing and scanning features.

**Outcome**

Completed combined embedded and standalone scanning workflows with mobile camera controls, alongside the described label-printing, Shopify data, and order scan/rescan improvements.
