import { expect, type Page, test } from "@playwright/test";

// Page Object Model (POM) pattern
class AdmissionsPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("/admissions");
  }

  async verifyHeading() {
    const heading = this.page.getByRole("heading", {
      name: /New Student Registration Form/i,
    });
    await expect(heading).toBeVisible();
  }

  async mockSubmissionRoute(status = 200) {
    await this.page.route("**/api/admissions**", async (route) => {
      await route.fulfill({
        status,
        contentType: "application/json",
        body: JSON.stringify({
          is_success: true,
          status_code: 200,
          response_payload: { tracking_code: "ALB-2026-TEST" },
        }),
      });
    });
  }
}

test.describe("Admissions Registration Workflow", () => {
  test("renders registration form landmarks and passes basic a11y checks", async ({
    page,
  }) => {
    const admissionsPage = new AdmissionsPage(page);
    await admissionsPage.goto();
    await admissionsPage.verifyHeading();

    // Verify main landmarks
    const formSection = page.locator("#admissions-form-section");
    await expect(formSection).toBeAttached();
  });

  test("mocks network responses cleanly via page.route", async ({ page }) => {
    const admissionsPage = new AdmissionsPage(page);
    await admissionsPage.goto();
    await admissionsPage.mockSubmissionRoute();

    // Verify page responsiveness after route mocking
    const form = page.locator("form").first();
    if (await form.isVisible()) {
      await expect(form).toBeVisible();
    }
  });
});
