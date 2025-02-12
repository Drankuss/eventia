import { test, expect } from "@playwright/test";
import { login } from "./helpers";

test("Should go to profile and check my tickets ", async ({ page }) => {
  await login(page);

  await page.getByRole("link", { name: "My Profile" }).click();
  const listItemsCount = await page.locator("ul.grid li").first().count();
  console.log(listItemsCount);
  expect(listItemsCount).toBeGreaterThan(0);
});
