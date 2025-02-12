import { test, expect } from "@playwright/test";
import { login } from "./helpers";

test("Should sign to the free event", async ({ page }) => {
  const emailInput = page.locator("input#email");
  await login(page);

  await page.locator('p:text("Supported Spindle")').click();
  await page.goto(
    "https://eventia-project.vercel.app/events/67acb74d06eeaf5b725d6490"
  );

  await expect(emailInput).toBeVisible();
  await emailInput.fill("test@example.com");

  await page
    .locator('button[data-testid="hosted-payment-submit-button"]')
    .click();
});
