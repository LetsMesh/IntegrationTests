import { test, expect, Locator } from "@playwright/test";

test.describe("view personal profile tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/profile");

        const twoFactorAuthenticationNoThanksButton =
            page.getByText("No thanks");
        await twoFactorAuthenticationNoThanksButton.click();
    });

    test("test that headings and profile pictures are visible", async ({
        page,
    }) => {
        const profileName = page.getByRole("heading").first();

        await expect.soft(profileName).toBeVisible();

        // 0-indexed, grabs 2nd heading
        const profilePronouns = page.getByRole("heading").nth(1);

        await expect.soft(profilePronouns).toBeVisible();

        const titleHeading = page
            .locator("label")
            .filter({ hasText: "Biography" });

        await expect.soft(titleHeading).toBeVisible();

        const biographyHeading = page.getByText("Biography").first();

        await expect.soft(biographyHeading).toBeVisible();

        const experienceHeading = page.getByRole("heading", {
            name: "Experience",
        });

        await expect.soft(experienceHeading).toBeVisible();

        const educationHeading = page.getByRole("heading", {
            name: "Education",
        });

        await expect.soft(educationHeading).toBeVisible();

        const profilePicture = page.getByRole("img", { name: "profile" });

        await expect.soft(profilePicture).toBeVisible();

        const mentorOrMenteeHeading = page.getByText("Mentor | Mentee");

        await expect.soft(mentorOrMenteeHeading).toBeVisible();

        const interestsHeading = page.getByRole("heading", {
            name: "Interests",
        });

        await expect.soft(interestsHeading).toBeVisible();
    });
});
