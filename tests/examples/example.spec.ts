import { test, expect } from "@playwright/test";

// Use descriptive test titles, or what is the test literally testing?
test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Make sure tests have some expectation that ensures a certain feature is working as intended,
  // or what is the assertion/expectation?
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
