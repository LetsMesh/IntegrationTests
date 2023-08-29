# Integration Tests
Repository for hosting end-to-end and integration tests for the LetsMesh website. 

## Prerequisites
- Ensure that npm is installed
- Ensure that you have cloned the Site repository in a separate folder with `git clone https://github.com/LetsMesh/Site.git` and are able to run it with `pipenv shell` and `python manage.py runserver`
- Although not strictly necessary, you may want to install the "Playwright Test for VSCode" extension

## Repository Setup
- Clone this repository using `git clone https://github.com/LetsMesh/IntegrationTests.git`
- Place a copy of your `.env` file from the Site repository into this project, and follow the provided `template.env`, making sure to add the path to your local Site repository in the `SITE_PATH` variable.
- Run `npm install` to install all required packages from `package.json`

## Repository Structure
- The Integration Tests repository contains:
  - `.github` folder containing a `playwright.yml` file that will run your tests on commit/opening a PR.
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

## Writing Tests
- TODO
