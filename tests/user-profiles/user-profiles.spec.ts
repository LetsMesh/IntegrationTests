import { test, expect } from "@playwright/test";

test("user profiles", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Mesh");
});
