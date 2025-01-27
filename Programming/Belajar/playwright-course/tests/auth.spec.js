import { test, expect } from "@playwright/test";

test.describe("Auth", () => {
  test.use({ storageState: "storageState.json" });
  test.beforeEach(async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  });
  test.skip("authentication", async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill("admin");
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill("123456");
    await page.getByRole("button", { name: "Log In" }).click();

    await page.context().storageState({ path: "storageState.json" });
  });

  test("test2", async ({ page }) => {
    await page.getByRole("heading", { name: "Account Services" }).click();
  });
});
