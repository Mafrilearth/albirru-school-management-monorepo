# Deployment & Infrastructure Runbook

This document specifies the authoritative deployment procedures, cloud infrastructure topology, and environment configuration for the **Al-Birru School Information System (`albirru-sis`)**.

---

## 1. Cloud Infrastructure Architecture

The platform operates on a zero-maintenance, serverless edge architecture:

```mermaid
flowchart TD
    Client["Public Ingress"] -->|"HTTPS Port 443"| CF["Cloudflare DNS & WAF<br/>• Turnstile Bot Protection<br/>• TLS 1.3 Termination & DDoS Shield"]
    CF --> Vercel["Vercel Edge Network"]

    subgraph Apps ["Monorepo Applications"]
        direction TB
        Web["apps/web (Port 3001)<br/>sd-albirru.sch.id (Public Web & Admissions)"]
        App["apps/app (Port 3000)<br/>app.sd-albirru.sch.id (Authenticated SIS)"]
        Api["apps/api (Port 3002)<br/>api.sd-albirru.sch.id (Edge Webhooks & Health)"]
        Docs["apps/docs (Port 3004)<br/>docs.sd-albirru.sch.id (Documentation)"]
        Email["apps/email (Port 3003)<br/>email.sd-albirru.sch.id (Email Studio)"]
    end

    Vercel --> Web
    Vercel --> App
    Vercel --> Api
    Vercel --> Docs
    Vercel --> Email

    subgraph Services ["Serverless Cloud Backend"]
        direction LR
        Neon[("Neon Postgres<br/>• Transaction Pooling<br/>• Primary Relational DB")]
        Upstash[("Upstash Redis<br/>• Rate Limiting REST<br/>• 5 requests per 15 minutes")]
        R2[("Cloudflare R2<br/>• Document Storage<br/>• Zero Egress Fees")]
    end

    Web --> Neon
    Web --> Upstash
    Web --> R2
    App --> Neon
    App --> Upstash
    App --> R2
    Api --> Neon
```

---

## 2. Environments & Git Branch Mapping

| Environment | Git Branch | Canonical URL | Automated Trigger |
| :--- | :--- | :--- | :--- |
| **Production** | `main` | `https://sd-albirru.sch.id` | Pull Request Merge to `main` |
| **Staging** | `staging` | `https://staging.albirru.mafrilearth.com` | Pull Request Merge to `staging` |
| **Development** | `dev` | `https://dev.albirru.mafrilearth.com` | Pull Request Merge to `dev` |

```mermaid
flowchart LR
    DEV["dev (Development)<br/>dev.albirru.mafrilearth.com"] -->|"User Acceptance Testing (UAT)"| STG["staging (Staging)<br/>staging.albirru.mafrilearth.com"]
    STG -->|"Fast-Forward Merge & Tag"| PROD["main (Production Live)<br/>sd-albirru.sch.id"]
```

---

## 3. Pre-Deployment Verification Checklist

Before promoting any branch to `staging` or `main`, execute the full quality verification suite:

```bash
# 1. Verify code formatting and linting
pnpm run check

# 2. Verify TypeScript strict type consistency (across all 10 packages)
pnpm run check-types

# 3. Execute unit and integration tests
pnpm run test

# 4. Verify complete production build
pnpm run build
```

---

## 4. Continuous Integration & Quality Gates (`.github/workflows/ci.yml`)

GitHub Actions automatically runs four parallel quality gates on every Pull Request:
1. **Lint & Formatting**: `biome check .`
2. **Type Checking**: `turbo run check-types`
3. **Automated Unit Tests**: `turbo run test`
4. **Monorepo Build**: `turbo run build`

Pull Requests cannot be merged if any quality gate fails.

---

## 5. Rollback & Disaster Recovery Runbook

If a critical incident or runtime defect occurs in Production:

1. **Instant Vercel Instant Rollback**:
   - Access the Vercel Dashboard -> Project -> **Deployments**.
   - Select the previous stable deployment hash and click **Instant Rollback**.
   - Traffic is redirected to the healthy build within <5 seconds.
2. **Database Point-in-Time Restore (PITR)**:
   - Neon PostgreSQL maintains continuous WAL archiving.
   - To restore state prior to a corrupted migration, navigate to Neon Console -> **Branches** -> create a restore branch from the exact timestamp.
