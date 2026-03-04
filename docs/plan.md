# Project Plan: Postie - Modern REST Client Application

## 1. Project Overview

### 1.1 Description
Postie is a modern frontend-first REST client application designed to provide users with an intuitive interface for managing API requests, similar to tools like Postman, Insomnia, Bruno, and Yaak. It features user authentication, request history tracking, variable management, and a powerful request editor. The application emphasizes security, performance, and ease of use, leveraging contemporary web technologies.

Key features include:
- Public pages: Welcome, Login, Register, Forgot Password, Reset Password.
- Authenticated pages: Dashboard (central hub), History (table of recent requests), Variables (table for local storage variables that auto-substitute in the editor), REST Editor (/rest route for building and sending requests).

The application will be built as a single-page application (SPA) with server-side rendering (SSR) capabilities, ensuring fast load times and SEO-friendliness for public pages.

### 1.2 Objectives
- Deliver a secure, scalable, and user-friendly REST client.
- Implement robust authentication and data persistence using Supabase.
- Ensure high performance with Next.js caching and React Compiler.
- Follow best practices for code organization, validation, and formatting.
- Target a minimum viable product (MVP) within 4-6 weeks, assuming a small team (1-2 developers).

### 1.3 Scope
- **In Scope**: Frontend UI/UX, authentication flows, core REST editor functionality, basic request history and variables management, integration with Supabase via Prisma.
- **Out of Scope**: Advanced features like team collaboration, API mocking, GraphQL support, mobile app version, CI/CD pipeline setup (to be added in future phases).
- Assumptions: Supabase instance is pre-configured; no custom backend API beyond Supabase; focus on desktop web experience.

### 1.4 Risks and Mitigations
- Risk: Integration issues with Supabase/Better Auth – Mitigation: Prototype auth early.
- Risk: Performance bottlenecks in request editor – Mitigation: Use React 19 concurrency features and Next.js caching.
- Risk: UI inconsistencies – Mitigation: Rely on HeroUI v3 beta for standardized components.
- Dependencies: External services (Supabase) must be available; monitor for API changes in libraries like Zod v4 or Tailwind 4.

## 2. Technology Stack

### 2.1 Core Framework
- Next.js 16 (with App Router, caching components, and React Compiler for optimized rendering).

### 2.2 UI and Styling
- React 19 (for hooks, suspense, and concurrent rendering).
- Tailwind CSS 4 (for utility-first styling).
- HeroUI v3 beta (UI component library for consistent, modern design).

### 2.3 Authentication and Database
- Better Auth (integrated with Supabase for email/password, OAuth, and password reset flows).
- Supabase (as the backend-as-a-service for auth, database, and storage).
- Prisma (ORM for type-safe queries to Supabase PostgreSQL database).

### 2.4 Validation and Forms
- Zod v4 (schema validation on client and server).
- @conform-to/react (for seamless form validation between client and server).
- @t3-oss/env-nextjs (for environment variable validation).

### 2.5 Architecture and Tools
- Architecture: Feature-Sliced Design (organize code by features/domains, e.g., auth, rest, history).
- Package Manager: pnpm (for efficient dependency management).
- Code Formatter/Linter: Biome (for consistent code style and error checking).
- State Management: Built-in React Context.
- Local Storage: For variables (with sync to Supabase for persistence across devices).

### 2.6 Development Environment
- Node.js 20+.
- TypeScript (strict mode enabled).
- Git for version control (with branches like feature/auth, main).

## 3. Architecture Overview

### 3.1 High-Level Design
- **Routing**: Next.js App Router with parallel routes for layouts.
  - Public routes: / (welcome), /login, /register, /forgot-password, /reset-password.
  - Protected routes: /dashboard, /history, /variables, /rest.
- **Layouts**: 
  - Marketing layout for public pages (e.g., src/app/(marketing)/layout.tsx).
  - Auth layout for login/register (e.g., src/app/(auth)/layout.tsx).
  - App layout for protected pages (e.g., src/app/(app)/layout.tsx).
- **Feature Slices**: 
  - Auth: Handles login, register, sessions.
  - Rest: Request editor logic, including method selection, headers, body, response viewer.
  - History: Fetches and displays user request logs from Supabase.
  - Variables: Manages key-value pairs in local storage, with substitution in editor.
  - Shared: Reusable components, utils, types.
- **Data Flow**: Client-side forms validated with Zod/@conform-to; server actions for auth and DB ops; caching with Next.js for frequent queries.

### 3.2 Directory Structure
Based on the provided Next.js structure:
- `src/app/`
  - `(app)/` (Protected app group): dashboard/, history/, rest/, variables/, layout.tsx.
  - `(auth)/` : login/, register/, layout.tsx.
  - `(marketing)/` : page.tsx (welcome), layout.tsx.
- `src/shared/` : Shared components, hooks, utils.
- Root: .env, .gitignore, biome.json, next-env.d.ts, next.config.ts, package.json, pnpm-lock.yaml, postcss.config.mjs, README.md, tsconfig.json.

This structure supports route grouping for shared layouts without affecting URLs.

## 4. Development Roadmap

### 4.1 Phase 1: Setup and Initialization (Week 1)
- Initialize project with Next.js 16: `pnpm create next-app`.
- Install dependencies: Tailwind 4, HeroUI v3 beta, Better Auth, Prisma, Zod v4, @conform-to/react, @t3-oss/env-nextjs.
- Configure Biome for formatting/linting.
- Set up environment validation with @t3-oss/env-nextjs.
- Configure Supabase: Create project, set up auth providers, generate Prisma schema.
- Establish Git repo and basic CI (if time allows, e.g., GitHub Actions for linting).

Milestone: Working skeleton app with basic routing and layouts.

### 4.2 Phase 2: Authentication (Weeks 1-2)
- Implement Better Auth with Supabase: Email/password, OAuth (e.g., Google).
- Build auth pages: Login, Register, Forgot/Reset Password using HeroUI forms and @conform-to/Zod validation.
- Set up server-side session management and protected routes.
- Add middleware for auth checks.

Milestone: Users can register, login, and access protected dashboard.

### 4.3 Phase 3: Core Features (Weeks 2-4)
- **Dashboard**: Central hub with links to History, Variables, REST Editor. Use HeroUI dashboard components.
- **REST Editor (/rest)**: Build request builder (method, URL, headers, body, auth). Integrate variable substitution from local storage. Use React 19 for responsive UI. Send requests via fetch with caching.
- **History**: Table displaying recent requests (fetched from Supabase via Prisma). Include filters, pagination.
- **Variables**: Table for managing env-like variables in local storage. Sync to Supabase for user-specific persistence.

Milestone: End-to-end request flow: Create/send request, view in history, use variables.

### 4.4 Phase 4: Polish and Optimization (Weeks 4-5)
- Implement UI refinements with Tailwind 4 and HeroUI.
- Add error handling, loading states, toasts (using HeroUI).
- Optimize with Next.js caching and React Compiler.
- Write unit/integration tests (using Vitest or Jest).
- Accessibility audit (ARIA labels, keyboard nav).

Milestone: Beta-ready app with smooth UX.

### 4.5 Phase 5: Testing and Deployment (Weeks 5-6)
- End-to-end testing with Playwright.
- Deploy to Vercel (integrated with Next.js).
- Set up monitoring (e.g., Vercel Analytics).
- Documentation: Update README.md, add API docs if needed.

Milestone: Live MVP deployment.

## 5. Task Breakdown

### 5.1 High-Priority Tasks
1. Set up project structure and deps (2 days).
2. Configure auth with Better Auth/Supabase (3 days).
3. Build public pages (welcome, auth flows) (4 days).
4. Implement protected layouts and dashboard (2 days).
5. Develop REST editor core (5 days).
6. Add History and Variables features (4 days).

### 5.2 Testing Strategy
- Unit: Components, utils (80% coverage).
- Integration: API calls, forms.
- E2E: User flows (auth, request sending).

### 5.3 Deployment Plan
- Staging: Vercel preview branches.
- Production: Main branch deploys.
- Rollback: Git revert.

## 6. Resources and Timeline
- Team: 1-2 full-time developers.
- Total Timeline: 6 weeks.
- Budget: N/A (open-source or personal project assumed).
- Tools: VS Code, GitHub, Figma for designs (if needed).

## 7. Success Metrics
- 100% core features implemented.
- No critical bugs in auth or request handling.
- Positive user feedback on UX (target: Similar to Postman simplicity).
- Performance: Page loads <2s, request responses rendered instantly.

This plan is iterative; review weekly and adjust based on progress.
