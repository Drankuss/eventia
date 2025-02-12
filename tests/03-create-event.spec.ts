import { test, expect } from "@playwright/test";
import { login } from "./helpers";

test("Should create an event", async ({ page }) => {
  await login(page);

  await page.getByRole("link", { name: "Create Event" }).click();
  await page.goto("https://eventia-project.vercel.app/events/create");
  await page.locator('input[name="title"]').fill("Spotkanie studentów");
  await page.getByRole("combobox").click();
  await page.getByRole("option", { name: "Live" }).click();
  await page.getByRole("textbox", { name: "Description" }).click();
  await page
    .getByRole("textbox", { name: "Description" })
    .fill("Coroczne zebranie studentów z ostatniego roku przed obroną.");
  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.getByRole("button", { name: "Select from computer" }).click(),
  ]);
  await fileChooser.setFiles("./tests/imgs/meeting.jpg");
  await page.getByRole("textbox", { name: "Event location or Online" }).click();
  await page
    .getByRole("textbox", { name: "Event location or Online" })
    .fill("Słupsk McDonald ulica Westerplatte");
  await page.locator('input[type="text"]').first().click();
  await page
    .getByRole("option", { name: "Choose Friday, February 14th," })
    .click();
  await page.getByRole("option", { name: "12:00 PM" }).click();
  await page.locator('input[type="text"]').nth(1).click();
  await page
    .getByRole("option", { name: "Choose Friday, February 14th," })
    .click();
  await page.getByRole("option", { name: "1:00 PM", exact: true }).click();
  await page.getByPlaceholder("Price").click();
  await page.getByPlaceholder("Price").fill("20");
  await page.getByRole("textbox", { name: "URL" }).click();
  await page
    .getByRole("textbox", { name: "URL" })
    .fill("https://mcdonalds.pl/");
  await page.getByRole("button", { name: "Create Event" }).click();
  await page.waitForTimeout(10000);
});
