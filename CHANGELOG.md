# Changelog

All notable changes to the **Al-Birru School Information System (`albirru-sis`)** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Comprehensive repository engineering governance files: `DESIGN.md`, `CONTRIBUTING.md`, `SECURITY.md`, `CHANGELOG.md`, and `CODE_OF_CONDUCT.md`.
- Explicit semantic version pinning for Storybook, Playwright, and Vite tooling to ensure 100% deterministic CI/CD builds.

### Changed
- Refactored monorepo workspace references from 11 packages to 10 workspaces following legacy ESLint package deletion.
- Standardized `NextConfig` header hardening (`poweredByHeader: false`, `compress: true`).

---

## [0.1.0] - 2026-10-11

### Added
- **Modern Modular Monolith Architecture**: Deployed 7 Next.js 16 applications (`apps/web`, `apps/app`, `apps/api`, `apps/email`, `apps/docs`, `apps/studio`, `apps/storybook`) and 3 shared foundation packages (`@albirru/database`, `@albirru/design-system`, `@albirru/typescript-config`).
- **PostgreSQL & Drizzle ORM Layer**:
  - Declarative relational schema with RFC 9562 UUIDv7 primary keys.
  - Mandatory audit trail columns (`created_at`, `updated_at`, `created_by`).
  - Zero physical deletion rule enforced via soft-deletion (`is_active`).
  - Automatic migration generator (`pnpm run db:generate`).
- **Authentication & Authorization**:
  - Integrated Clerk authentication with centralized Role-Based Access Control (RBAC).
  - Server-side session verification in React Server Components and middleware.
- **Edge Security & Anti-Abuse**:
  - Cloudflare Turnstile CAPTCHA bot protection for public admissions (`/admissions`).
  - Upstash Redis distributed sliding window rate limiting (5 submissions / 15 minutes).
- **Accessible UI Design System**:
  - Headless UI component primitives built with `@base-ui/react` and `@shadcn/react`.
  - Tailwind CSS v4 design token integration with semantic CSS variables and 8px spatial grid.
  - W3C WCAG 2.1 AA accessibility compliance across interactive components.
- **Transactional Email Infrastructure**:
  - React Email template preview studio (`apps/email`).
  - Transactional email dispatch engine powered by Resend SDK.
- **Zero-Overhead Unified Toolchain**:
  - Biome v2 as unified linter and formatter, replacing ESLint and Prettier with sub-200ms execution times.
  - Husky git automation with `pre-commit` (lint-staged + Biome), `commit-msg` (Commitlint 1.0.0), and `pre-push` (type-checking).
  - Vitest test runner suite for unit and validation testing.
