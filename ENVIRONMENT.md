# Environment Variables & Configuration Matrix

**Document Status:** Approved & Authoritative  
**Standard Compliance:** The Twelve-Factor App (Config), DevSecOps Standard  
**System Scope:** Node.js Runtime, Vercel Edge Serverless, Client-Side JavaScript  
**Enforcement Level:** Non-Negotiable Hard Invariant (Zero Leaks)  

This document provides the authoritative specification for all environment variables used across the **Al-Birru School Information System (`albirru-sis`)**.

---

## 1. Security Classification & Tiering

Variables are categorized into two strict visibility classes:

- 🟢 **Public (`NEXT_PUBLIC_*`)**: Bundled into the client-side JavaScript. Must never contain private keys, passwords, or database secrets.
- 🔴 **Secret (Server-Only)**: Accessible exclusively in serverless Node.js and Edge runtimes. Never exposed to browsers.

---

## 2. Environment Variables Specification

| Variable Name | Classification | Service Provider | Description & Format | Configuration Source |
| :--- | :---: | :--- | :--- | :--- |
| `NODE_ENV` | Runtime | System | Runtime mode (`development`, `test`, `production`). | Set automatically by platform runner. |
| `NEXT_PUBLIC_SITE_URL` | 🟢 Public | Vercel DNS | Canonical origin URL (such as `https://sd-albirru.sch.id`). | Configured per environment domain. |
| `DATABASE_URL` | 🔴 Secret | Neon PostgreSQL | Pooled connection string (`postgresql://user:pass@endpoint/db?sslmode=require`). | [Neon Console](https://console.neon.tech) -> Connection Details (Pooled). |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | 🟢 Public | Clerk Auth | Client publishable key (`pk_test_...` or `pk_live_...`). | [Clerk Dashboard](https://dashboard.clerk.com) -> API Keys. |
| `CLERK_SECRET_KEY` | 🔴 Secret | Clerk Auth | Server authentication key (`sk_test_...` or `sk_live_...`). | [Clerk Dashboard](https://dashboard.clerk.com) -> API Keys. |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | 🟢 Public | Clerk Auth | Routing path for sign-in (`/sign-in`). | Application route convention. |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | 🟢 Public | Clerk Auth | Routing path for sign-up (`/sign-up`). | Application route convention. |
| `UPSTASH_REDIS_REST_URL` | 🔴 Secret | Upstash Redis | REST endpoint URL for edge rate limiting (`https://...upstash.io`). | [Upstash Console](https://console.upstash.com) -> Redis Database -> REST API. |
| `UPSTASH_REDIS_REST_TOKEN` | 🔴 Secret | Upstash Redis | Bearer token for serverless Redis REST requests. | [Upstash Console](https://console.upstash.com) -> Redis Database -> REST API. |
| `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY` | 🟢 Public | Cloudflare | Client site key for Turnstile bot verification widget. | [Cloudflare Dashboard](https://dash.cloudflare.com) -> Turnstile -> Sites. |
| `CLOUDFLARE_TURNSTILE_SECRET_KEY` | 🔴 Secret | Cloudflare | Server secret key to validate client Turnstile tokens. | [Cloudflare Dashboard](https://dash.cloudflare.com) -> Turnstile -> Sites. |
| `RESEND_API_KEY` | 🔴 Secret | Resend | API key for transactional email dispatch (`re_...`). | [Resend Dashboard](https://resend.com) -> API Keys. |
| `NEXT_PUBLIC_SENTRY_DSN` | 🟢 Public | Sentry | Data Source Name URL for crash and exception tracking. | [Sentry Settings](https://sentry.io) -> Client Keys (DSN). |
| `NEXT_PUBLIC_POSTHOG_KEY` | 🟢 Public | PostHog | Project API key for telemetry and conversion tracking. | [PostHog Dashboard](https://us.posthog.com) -> Project Settings. |
| `NEXT_PUBLIC_POSTHOG_HOST` | 🟢 Public | PostHog | Ingestion host URL (`https://us.i.posthog.com`). | [PostHog Docs](https://posthog.com/docs). |
| `NOTION_TOKEN` | 🔴 Secret | Notion | Integration token for Notion Model Context Protocol server. | [Notion Integrations](https://www.notion.so/my-integrations). |
| `CONTEXT7_API_KEY` | 🔴 Secret | Context7 | API secret key for Context7 technical documentation lookup. | [Context7 Console](https://context7.com). |
| `GITHUB_TOKEN` | 🔴 Secret | GitHub | Personal access token with repo scope for GitHub Model Context Protocol. | [GitHub Settings](https://github.com/settings/tokens). |
| `GITHUB_PERSONAL_ACCESS_TOKEN` | 🔴 Secret | GitHub | Alias token for GitHub Model Context Protocol tooling. | [GitHub Settings](https://github.com/settings/tokens). |
| `CLOUDFLARE_API_TOKEN` | 🔴 Secret | Cloudflare | API token with DNS and zone edit permissions for Cloudflare MCP. | [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens). |

> **Model Context Protocol (MCP) Reference**: See the full architectural specification and 90-day key rotation policy in [MCP.md](MCP.md).

---

## 3. Local Development Configuration

To initialize your local environment:

```bash
# Copy the specification template to your private local configuration
cp .env.example .env.local
```

> **Security Rule**: `.env.local` is explicitly listed in [.gitignore](.gitignore) and must **never** be committed to the Git repository.
