import { test, expect } from "@playwright/test";

test("accounts", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Mesh");
});
