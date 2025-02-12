import { test } from "@playwright/test";
import { login } from "./helpers";

test("Should delete event", async ({ page }) => {
  await login(page);

  await page
    .locator(
      'button[aria-haspopup="dialog"] img[src="/assets/icons/delete.svg"]'
    )
    .first()
    .click();
  await page.getByRole("button", { name: "Delete" }).click();
  await page.waitForTimeout(2000);
});
