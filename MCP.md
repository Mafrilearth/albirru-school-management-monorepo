# Model Context Protocol (MCP) Specification & Architecture Contract

**Document Status:** Approved & Authoritative  
**International Standards Compliance:** ISO/IEC 27001:2022 (A.8.5, A.8.24), RFC 6749, RFC 7519, IEEE 829-2008, W3C Architecture  
**Security Invariant:** Zero Hardcoded Secrets Invariant (Strict VCS Exemption)  
**Credential Lifetime Policy:** Maximum 90-Day Lifetime (Zero Unbounded / "No Expiration" Credentials Allowed)  
**Quarantine Topology:** Local Workspace Isolation (`.env.local`) and Operating System Global Store (`HKCU\Environment`)  

This document defines the single authoritative engineering specification for all Model Context Protocol (MCP) integrations across the **Al-Birru School Information System (`albirru-sis`)** repository.

---

## 1. Security Architecture & Credential Quarantine

1. **Zero Hardcoded Secrets Invariant**  
   All Git-tracked configuration files ([.mcp.json](.mcp.json), [.agents/mcp_config.json](.agents/mcp_config.json)) must strictly contain zero plaintext secret values. Secret interpolation is enforced exclusively via environment variable substitution syntax (`${VARIABLE_NAME}`).
2. **Local Workspace Quarantine Tier**  
   Project-level secrets are quarantined exclusively within [.env.local](.env.local) located at the monorepo root. This file is unconditionally excluded by [.gitignore](.gitignore) and must never be staged or committed to source control.
3. **Global Operating System Quarantine Tier**  
   Machine-level secrets are stored in the host platform user registry (`HKCU\Environment`) or in the local user profile configuration (`~/.gemini/config/mcp_config.json`).
4. **Mandatory 90-Day Credential Expiration Policy**  
   All generated Personal Access Tokens (PATs) and API secret keys must declare a maximum expiration window of **90 days**. Selecting "No Expiration" is strictly prohibited to guarantee quarterly key rotation compliance under ISO/IEC 27001:2022 Control A.8.24.

---

## 2. Definitive MCP Server Architecture Matrix (11 Configured Servers)

Each server domain is assigned exactly **one canonical authentication mechanism** with zero permissible ambiguity:

| Server Identifier | Transport Protocol & Runtime | Canonical Authentication Option | Maximum Expiration Period | Environment Variable Key | Authoritative Technical Reference |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **github** | Stdio (`npx -y @modelcontextprotocol/server-github`) | Personal Access Token (PAT) with scopes: `repo`, `read:org`, `workflow` | **90 Days** (Mandatory Quarterly Rotation) | `GITHUB_TOKEN`<br>`GITHUB_PERSONAL_ACCESS_TOKEN` | [GitHub MCP Specification](https://github.com/github/github-mcp-server)<br>[GitHub Token Portal](https://github.com/settings/tokens) |
| **notion** | Remote HTTP SSE (`https://mcp.notion.com/mcp`) | Notion OAuth 2.0 Browser Authentication (RFC 6749) | **90 Days** (Active Session Cycle) | `NOTION_TOKEN` (Internal Integration Fallback) | [Notion MCP Documentation](https://developers.notion.com/guides/mcp/get-started-with-mcp)<br>[Notion Integration Portal](https://www.notion.so/my-integrations) |
| **linear** | Stdio Proxy (`npx -y mcp-remote https://mcp.linear.app/mcp`) | Linear OAuth 2.0 Browser Authentication (RFC 6749) | **90 Days** (Active Session Cycle) | `LINEAR_API_KEY` (Personal Key Fallback) | [Linear MCP Documentation](https://linear.app/docs/mcp)<br>[Linear API Console](https://linear.app/settings/api) |
| **context7** | Remote HTTP SSE (`https://mcp.context7.com/mcp`) | Authorization Header Bearer Token (RFC 6750) | **90 Days** (Mandatory Quarterly Rotation) | `CONTEXT7_API_KEY` | [Context7 Documentation](https://context7.com)<br>[Context7 API Keys](https://context7.com/keys) |
| **neon** | Stdio Proxy (`npx -y mcp-remote https://mcp.neon.tech/mcp`) | Neon Cloud OAuth 2.0 Browser Authentication (RFC 6749) | **90 Days** (Active Session Cycle) | `NEON_API_KEY` (Service Key Fallback) | [Neon MCP Documentation](https://neon.tech/docs/guides/mcp)<br>[Neon Database Console](https://console.neon.tech) |
| **vercel** | Stdio Proxy (`npx -y mcp-remote https://mcp.vercel.com`) | Vercel Edge Cloud OAuth 2.0 Authentication (RFC 6749) | **90 Days** (Active Session Cycle) | `VERCEL_TOKEN` (Personal Token Fallback) | [Vercel MCP Documentation](https://vercel.com/docs/mcp)<br>[Vercel Token Console](https://vercel.com/account/tokens) |
| **cloudflare** | Stdio (`npx -y @cloudflare/mcp-server-cloudflare`) | Scoped API Token (`Zone.DNS:Edit`, `Turnstile:Read`) | **90 Days** (Mandatory Quarterly Rotation) | `CLOUDFLARE_API_TOKEN` | [Cloudflare MCP Repository](https://github.com/cloudflare/mcp-server-cloudflare)<br>[Cloudflare Token Console](https://dash.cloudflare.com/profile/api-tokens) |
| **posthog** | Stdio Proxy (`npx -y mcp-remote https://mcp.posthog.com/mcp`) | PostHog Cloud OAuth 2.0 Authentication (RFC 6749) | **90 Days** (Active Session Cycle) | `POSTHOG_API_KEY` (Project Key Fallback) | [PostHog MCP Documentation](https://posthog.com/docs/mcp)<br>[PostHog Project Settings](https://us.posthog.com/project/settings) |
| **sentry** | Stdio Proxy (`npx -y mcp-remote https://mcp.sentry.dev/mcp`) | Sentry Cloud OAuth 2.0 Authentication (RFC 6749) | **90 Days** (Active Session Cycle) | `SENTRY_AUTH_TOKEN` (Personal Auth Fallback) | [Sentry MCP Documentation](https://docs.sentry.io)<br>[Sentry Auth Tokens](https://sentry.io/settings/account/api/auth-tokens/) |
| **shadcn** | Stdio CLI (`npx -y shadcn@latest mcp`) | Public Component Registry Access (Zero Secret Credential) | **Unbounded** (Credential-Free) | None (Credential-Free) | [shadcn/ui Registry Documentation](https://ui.shadcn.com/docs) |
| **chrome-devtools** | Stdio CLI (`npx -y chrome-devtools-mcp@latest --isolated`) | Local Isolated Process Execution (Zero Secret Credential) | **Unbounded** (Credential-Free) | None (Credential-Free) | [Chrome DevTools MCP Repository](https://github.com/ChromeDevTools/devtools-frontend) |

---

## 3. Standard Operating Procedure for Credential Rotation (90 Days)

1. **Credential Generation**: Navigate to the official provider console listed in the matrix above. Generate a new credential declaring an explicit **90-day** lifetime constraint.
2. **Project-Level Update**: Write the newly generated secret string into [.env.local](.env.local), replacing the expired key.
3. **Global Operating System Update**: Update the persistent user environment store on the host machine:
   ```powershell
   [Environment]::SetEnvironmentVariable('VARIABLE_NAME', 'NEW_SECRET_VALUE', 'User')
   ```
4. **Deterministic Validation**: Execute the corresponding MCP tool validation probe to confirm HTTP 200 / JSON-RPC success response.
