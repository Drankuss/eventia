import { test, expect } from "@playwright/test";
import { login } from "./helpers";

test("Should buy a ticket to a paid event", async ({ page }) => {
  const accordionHeader = page
    .locator(
      "div.AccordionItemHeader.AccordionItemCover-header.AccordionItemHeader--clickable"
    )
    .first();
  const emailInput = page.locator("input#email");
  const blikInput = page.locator("input#blikCode");
  await login(page);

  await page
    .locator(
      'p:text("The Anti-Queens w/ Junko Daydream & Little Green Men - Live in Tillsonburg")'
    )
    .click();
  await page.goto(
    "https://eventia-project.vercel.app/events/67acaa5b3a17603fc703b77b"
  );
  await page.getByRole("link", { name: "Buy Ticket" }).click();
  await page.waitForTimeout(5000);

  await expect(accordionHeader).toBeVisible();
  await accordionHeader.click();

  await expect(blikInput).toBeVisible();
  await blikInput.fill("123456");

  await expect(emailInput).toBeVisible();
  await emailInput.fill("test@example.com");

  await page
    .locator('button[data-testid="hosted-payment-submit-button"]')
    .click();
});
