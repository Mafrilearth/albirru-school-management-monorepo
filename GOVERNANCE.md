# Engineering & Institutional Governance

This document outlines the governance model, decision-making framework, and maintenance standards for the **Al-Birru School Information System (`albirru-sis`)**.

---

## 1. Governance Principles

The engineering and operational governance of the platform adheres to three core tenets:

1. **Pedagogical Alignment**: Every digital feature must serve the educational mission of SD Al-Birru Tahfidzul Qur'an and preserve Islamic institutional integrity.
2. **Hard Technical Invariants**: Zero shortcuts on security, database integrity, type safety, and WCAG 2.1 AA accessibility.
3. **Open Architecture & Transparency**: Architectural decisions are documented in living specifications, ensuring long-term maintainability without vendor lock-in.

---

## 2. Leadership Roles & Responsibilities

| Role | Responsibility | Authority Scope |
| :--- | :--- | :--- |
| **Institutional Board (Yayasan)** | Strategic oversight, budget approval, compliance with national education regulations. | Final approval for institutional policies and major data disclosures. |
| **Lead Software Architect** | Technical vision, system architecture, invariants enforcement, and release gating. | Authoritative approval on pull requests, database migrations, and ADRs. |
| **Security & Privacy Officer** | Vulnerability triage, access audits, cryptographic oversight, and student data protection. | Veto power on any feature violating student privacy (UU PDP / GDPR principles). |
| **Maintainers / Engineers** | Feature implementation, unit test authoring, dependency upgrades, and code reviews. | Code contributions across `apps/*` and `packages/*`. |

---

## 3. Decision-Making Framework

### 3.1 Lazy Consensus for Standard Changes
For routine improvements, bug fixes, UI styling, and dependency patches:
- Proposed changes are submitted via Pull Request to the `dev` branch.
- If at least one maintainer approves and no objections are raised within 24 hours, the PR may be merged.

### 3.2 Formal RFC / ADR for Architectural Modifications
Significant changes require an **Architecture Decision Record (ADR)** or formal Request for Comments (RFC):
- Alterations to database schema (e.g., adding/modifying tables in `packages/database`).
- Introduction of new shared packages or external third-party SaaS services.
- Changes to authentication topologies, security headers, or API mutation contracts.
- Approval requires unanimous consent from the Lead Software Architect and Security Officer.

---

## 4. Release Governance & Branch Lifecycle

Releases follow a deterministic linear progression:

```plain text
[Feature Branch] ──► [dev] ──► [staging] ──► [main] (Production)
```

1. **`dev`**: Daily integration branch. Code must pass automated Biome, TypeScript, and Vitest gates.
2. **`staging`**: Pre-production environment. User Acceptance Testing (UAT) conducted by school administrators.
3. **`main`**: Production deployments to live apex and subdomains. Triggered only via signed, fast-forward merges from `staging`.

---

## 5. Anti-Rationalization Guard (Zero Shortcuts)

To maintain long-term architectural health:
- Suppressing TypeScript compiler errors with `@ts-ignore` or using `any` types is strictly forbidden.
- Bypassing pre-commit or pre-push git hooks via `--no-verify` is prohibited.
- Physical SQL `DELETE` is prohibited across all operational tables; record deactivation must strictly use `is_active: false`.
