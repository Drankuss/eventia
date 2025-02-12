import { test } from "@playwright/test";
import { login } from "./helpers";

test("Should sign in into the application", async ({ page }) => {
  await login(page);
});
