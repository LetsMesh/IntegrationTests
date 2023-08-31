import { test, expect } from "@playwright/test";

test("account", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Mesh");
});
