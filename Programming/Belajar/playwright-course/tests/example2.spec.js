// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Module Laporan", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://gatsmis.doctortool.id/");
    await page.waitForTimeout(3000);
    await page.waitForSelector("text=Mulai", { state: "visible" });
    await page.click('text="Mulai"');

    const inputUrl = page.locator('[placeholder="Alamat URL"]');
    await inputUrl.fill("srv-staging");

    const FTK = page.locator("#tbappId_text");
    await FTK.fill("ABCD");

    const Id = page.locator("#tbappId_Password");
    await Id.fill("1234");

    await page.click('text="Simpan"');

    await page.waitForSelector('role=heading[name="Selamat Datang,"]');
    await expect(
      page.locator('role=heading[name="Selamat Datang,"]')
    ).toBeVisible();

    // Login step
    await page.waitForSelector('[placeholder="Email"]');
    const inputEmail = page.locator('[placeholder="Email"]');
    await inputEmail.fill("a@admin.com");

    await page.waitForSelector('[placeholder="Password"]');
    const inputPassword = page.locator('[placeholder="Password"]');
    await inputPassword.fill("123456");

    await page.waitForSelector("text=Login", { state: "visible" });
    await page.click("text=Login");

    await page.waitForSelector("text=Dashboard Fasilitas Kesehatan");
    await expect(page.getByText("Dashboard Fasilitas Kesehatan")).toBeVisible();
  });

  test("Should see report LB1", async ({ page }) => {
    await page.goto("https://gatsmis.doctortool.id/Laporan/LB1Report");
    await page.waitForSelector("text=Laporan Bulanan Data Kesakitan (LB1)");

    await expect(
      page.getByText("Laporan Bulanan Data Kesakitan (LB1)")
    ).toBeVisible();
  });
});
