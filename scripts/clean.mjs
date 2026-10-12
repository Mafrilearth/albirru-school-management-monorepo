import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

const pathsToClean = [
  resolve(root, ".turbo"),
  resolve(root, "apps/web/.next"),
  resolve(root, "apps/web/.turbo"),
  resolve(root, "apps/app/.next"),
  resolve(root, "apps/app/.turbo"),
  resolve(root, "apps/api/.next"),
  resolve(root, "apps/api/.turbo"),
  resolve(root, "apps/docs/.next"),
  resolve(root, "apps/docs/.turbo"),
  resolve(root, "apps/email/.next"),
  resolve(root, "apps/email/.turbo"),
  resolve(root, "apps/storybook/.turbo"),
  resolve(root, "apps/studio/.turbo"),
  resolve(root, "packages/database/.turbo"),
  resolve(root, "packages/design-system/.turbo"),
  resolve(root, "packages/typescript-config/.turbo"),
];

console.log("🧹 Cleaning ephemeral caches (.turbo, .next)...");

for (const target of pathsToClean) {
  if (existsSync(target)) {
    try {
      rmSync(target, { recursive: true, force: true });
      console.log(`✓ Removed: ${target.replace(root, ".")}`);
    } catch (err) {
      console.warn(`! Could not remove ${target}:`, err);
    }
  }
}

console.log("✨ Ephemeral cache cleanup complete! Disk space reclaimed.");
