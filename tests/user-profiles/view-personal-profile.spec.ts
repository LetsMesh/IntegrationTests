import { test, expect, Locator } from "@playwright/test";

test.describe("view personal profile tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/profile");

        const twoFactorAuthenticationNoThanksButton =
            page.getByText("No thanks");
        await twoFactorAuthenticationNoThanksButton.click();
    });

    test("headings and profile pictures are visible", async ({ page }) => {
        // Profile name + pronouns are visible
        const profileName = page.getByRole("heading").first();

        await expect(profileName).toBeVisible();

        // nth is 0-indexed, grabs 2nd heading
        const profilePronouns = page.getByRole("heading").nth(1);

        await expect(profilePronouns).toBeVisible();

        // Title heading is visible
        const titleHeading = page
            .locator("label")
            .filter({ hasText: "Biography" });

        await expect(titleHeading).toBeVisible();

        // Biography is visible
        const biographyHeading = page.getByText("Biography").first();

        await expect(biographyHeading).toBeVisible();

        // Experience is visible
        const experienceHeading = page.getByRole("heading", {
            name: "Experience",
        });

        await expect(experienceHeading).toBeVisible();

        // Education is visible
        const educationHeading = page.getByRole("heading", {
            name: "Education",
        });

        await expect(educationHeading).toBeVisible();

        // Profile picture is visible
        const profilePicture = page.getByRole("img", { name: "profile" });

        await expect(profilePicture).toBeVisible();

        // Mentor or mentee is visible
        const mentorOrMenteeHeading = page.getByText("Mentor | Mentee");

        await expect(mentorOrMenteeHeading).toBeVisible();

        // Interests are visible
        const interestsHeading = page.getByRole("heading", {
            name: "Interests",
        });

        await expect(interestsHeading).toBeVisible();
    });

    test("text areas can be changed and saved", async ({ page }) => {
        // Biography is editable
        const biographyContainer = page.locator(".profile-page-biography");

        await biographyContainer.getByTestId("EditIcon").click();

        const biographyTextArea = biographyContainer.getByRole("textbox");

        await biographyTextArea.fill("filler biography");

        await biographyContainer.getByTestId("SaveIcon").click();

        await expect(biographyTextArea).toContainText("filler biography");

        // Experience is editable
        const experienceContainer = page
            .locator(".profile-page-column-body")
            .filter({ hasText: /Experience/ });

        await experienceContainer.getByTestId("EditIcon").click();

        const experienceTextArea = experienceContainer.getByRole("textbox");

        await experienceTextArea.fill("filler experience");

        await experienceContainer.getByTestId("SaveIcon").click();

        await expect(experienceTextArea).toContainText("filler experience");

        // Education is editable
        const educationContainer = page
            .locator(".profile-page-column-body")
            .filter({ hasText: /Education/ });

        await educationContainer.getByTestId("EditIcon").click();

        const educationTextArea = educationContainer.getByRole("textbox");

        await educationTextArea.fill("filler education");

        await educationContainer.getByTestId("SaveIcon").click();

        await expect(educationTextArea).toContainText("filler education");

        // Interests are editable
        const interestsContainer = page
            .locator(".profile-page-column-body")
            .filter({ hasText: /Interests/ });

        await interestsContainer.getByTestId("EditIcon").click();

        const interestsTextArea = interestsContainer.getByRole("textbox");

        await interestsTextArea.fill("filler interests");

        await interestsContainer.getByTestId("SaveIcon").click();

        await expect(interestsTextArea).toContainText("filler interests");
    });

    test("profile picture can be changed and saved", async ({ page }) => {
        // Profile picture is editable
        const profilePictureContainer = page.locator(
            ".profile-page-picture-parent-container"
        );

        const profilePictureEditButton =
            profilePictureContainer.getByTestId("EditIcon");

        await profilePictureEditButton.click();

        await profilePictureContainer.getByText("Delete").click();

        await page.getByRole("button", { name: "Yes, remove it!" }).click();

        await profilePictureContainer.getByTestId("EditIcon").click();

        await page.getByText("Edit").click();

        await profilePictureContainer
            .locator(".profile-page-picture-edit-container")
            .locator("#fileInput")
            .setInputFiles("test-media/bofuri.jpg");

        await profilePictureEditButton.click();
    });
});
