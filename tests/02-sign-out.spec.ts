import { test } from "@playwright/test";
import { login } from "./helpers";

test("Should sign out of the application", async ({ page }) => {
  await login(page);

  await page.getByRole("button", { name: "Open user button" }).click();
  await page.getByRole("menuitem", { name: "Sign out" }).click();
});
