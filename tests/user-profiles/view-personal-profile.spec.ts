import { test, expect } from "@playwright/test";

test.describe("view personal profile tests", () => {
    // close out 2FA windows
    test.beforeEach(async ({ page }) => {
        await page.goto("/profile");

        const twoFactorAuthenticationNoThanksButton =
            page.getByText("No thanks");
        await twoFactorAuthenticationNoThanksButton.click();
    });

    test("name heading is visble", async ({ page }) => {
        const profileName = page.getByRole("heading").first();

        await expect(profileName).toBeVisible();
    });

    test("pronouns are visible", async ({ page }) => {
        // nth is 0-indexed, grabs 2nd heading (which should be pronouns heading)
        const profilePronouns = page.getByRole("heading").nth(1);

        await expect(profilePronouns).toBeVisible();
    });

    test("title heading is visible", async ({ page }) => {
        // nth is 0-indexed, grabs 3rd heading (which should be title heading)
        const titleHeading = page.getByRole("heading").nth(2);

        await expect(titleHeading).toBeVisible();
    });

    test("biography heading is visible", async ({ page }) => {
        const biographyHeading = page.getByText("Biography").first();

        await expect(biographyHeading).toBeVisible();
    });

    test("experience heading is visible", async ({ page }) => {
        const experienceHeading = page
            .getByRole("heading", {
                name: "Experience",
            })
            .first();

        await expect(experienceHeading).toBeVisible();
    });

    test("education heading is visible", async ({ page }) => {
        const educationHeading = page
            .getByRole("heading", {
                name: "Education",
            })
            .first();

        await expect(educationHeading).toBeVisible();
    });

    test("profile picture is visible", async ({ page }) => {
        const profilePicture = page
            .getByRole("img", { name: "profile" })
            .first();

        await expect(profilePicture).toBeVisible();
    });

    test("mentor or mentee is visible", async ({ page }) => {
        const mentorHeading = page.getByText("Mentor");
        const menteeHeading = page.getByText("Mentee");

        // Text can either be mentor or mentee
        await expect(mentorHeading.or(menteeHeading).first()).toBeVisible();
    });

    test("interests are visible", async ({ page }) => {
        const interestsHeading = page
            .getByRole("heading", { name: "Interests" })
            .first();

        await expect(interestsHeading).toBeVisible();
    });
});
