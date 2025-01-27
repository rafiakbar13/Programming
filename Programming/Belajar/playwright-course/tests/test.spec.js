import { test, expect } from "@playwright/test";
import { before, beforeEach } from "node:test";

test.describe("Auth", () => {
  test.use({ storageState: "storageState.json" });
  test.beforeEach(async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  });
  test("test2", async ({ page }) => {
    await page.getByRole("heading", { name: "Account Services" }).click();
  });
});
