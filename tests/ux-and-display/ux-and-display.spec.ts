import { test, expect } from "@playwright/test";

test("ux and display", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Mesh");
});
