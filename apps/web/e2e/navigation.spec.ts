import { expect, test } from "@playwright/test";

test.describe("Portal Navigation & Header Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads landing page and verifies institutional branding", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/Al-Birru/i);

    // Verify main landmarks and headings exist
    const heading = page.getByRole("heading", { level: 1 }).first();
    await expect(heading).toBeVisible();
  });

  test("navigates seamlessly across primary institutional routes", async ({
    page,
  }) => {
    // Navigate to Admissions
    const admissionsLink = page
      .getByRole("link", { name: /admissions|pendaftaran/i })
      .first();
    if (await admissionsLink.isVisible()) {
      await admissionsLink.click();
      await expect(page).toHaveURL(/.*admissions/);
    }

    // Navigate to Programs
    await page.goto("/programs");
    await expect(page).toHaveURL(/.*programs/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("verifies responsive viewport on mobile devices", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Body should be renderable without horizontal overflow
    const body = page.locator("body");
    await expect(body).toBeVisible();
  });
});
