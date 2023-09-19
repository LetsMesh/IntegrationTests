import { test, expect, Locator } from "@playwright/test";

test.describe("user profile tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/profile");

    const twoFactorAuthenticationNoThanksButton = page.getByText("No thanks");
    await twoFactorAuthenticationNoThanksButton.click();
  });

  test("user profile title", async ({ page }) => {
    const userProfileName = page.getByRole("heading", { name: "Bob Yomom" });

    await expect(userProfileName).toBeVisible();
  });
});
