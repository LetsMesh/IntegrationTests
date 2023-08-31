# Integration Tests

Repository for hosting end-to-end and integration tests for the LetsMesh website.

## Prerequisites

- Ensure that npm is installed
- Ensure that you have cloned the Site repository in a separate folder with `git clone https://github.com/LetsMesh/Site.git` and are able to run it with `pipenv shell` and `python manage.py runserver`
- Although not strictly necessary, you may want to install the "Playwright Test for VSCode" extension
- More info for Playwright can be foun in then [Playwright documentation](https://playwright.dev/docs/intro).

## Repository Setup

- Clone this repository using `git clone https://github.com/LetsMesh/IntegrationTests.git`
- Place a copy of your `.env` file from the Site repository into this project, and follow the provided `template.env`, making sure to add the path to your local Site repository in the `SITE_PATH` variable.
- Run `npm install` to install all required packages from `package.json`

## Repository Structure

- The Integration Tests repository contains (note that some files/folders are in the .gitignore so not all will appear on the remote repository):
  - `.github/workflows` folder containing a `playwright.yml` file that will run your tests on commit/opening a PR.
  - `node_modules` folder containing installed npm packages.
  - `playwright-report` will only appear after running tests, and will contain Playwright reporters that detail the last finished tests and print failures when they occur.
  - `test-results` will contain test artifacts such as screenshots, videos, traces, or other relevant information gathered in specific tests that capture that information.
  - `tests` folder contains all test files, such as `example.spec.ts`
  - `.gitignore` to tell git to not track certain files and folders that we don't want uploaded to the master repository.
  - `package.json` and `package-lock.json` are versioning files that are used to install packages and track package versions for the repository.
  - `playwright.config.ts` contains configuration details for the Playwright test suite.
  - `README.md` is the file you are currently reading.

## Running Tests

- You can run the following commands/follow these patterns to run tests
  - `npx playwright test` to run all tests.
  - `npx playwright test example.spec.ts` to run all tests in a specific file, such as running all tests in `example.spec.ts` file.
  - `npx playwright test tests/example/` to run all tests in a specific folder, such as running all tests in the `examples` folder.
  - ... and many other ways you can find on the [Playwright documentation for running tests](https://playwright.dev/docs/running-tests).
  - Note if you are using the "Playwright Test for VSCode" extension, you can go to the "Testing" widget on the left-side of VSCode, and run all or a few tests from there.
    - You can also press in the bottom left of the screen under the "Playwright" section, either the "Show browser" checkbox or the "Show trace viewer" checkbox.
      - "Show browser" will open up a browser to show how the test is being ran and can give you a visual indication of what is happening when the test runs.
      - "Show trace viewer" will open up a Playwright trace viewer, which shows all actions that occurred from the beginning to the end of the test, including the Before and After Hooks and everything in between. It will also display the duration of each action and has a timeline on the top for you to view, as well as some snapshots of what Playwright saw while it was running the test.

## Writing Tests

- When writing tests, the [Playwright documentation for writing tests](https://playwright.dev/docs/writing-tests) as well as the [Playwright documentation for best practices](https://playwright.dev/docs/best-practices) will come in very handy.
- Before writing your tests, you should look for which Epic your test is relevant to, which will then lead you to which folder will contain the proper test file. All tests are contained in the `tests` folder.
  - You can find which Epic your test is related to by looking at the [issue](https://github.com/LetsMesh/IntegrationTests/issues) assigned to you, and looking at the labels attached to it.
- Once you have located the folder that your test contains, you should most likely just use the existing .spec.ts file within it, and add a new `test("test-title", async ({page}) => {...})` function, and add the behavior you would like to test.
