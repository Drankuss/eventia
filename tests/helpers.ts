import { Page } from "@playwright/test";
import { EMAIL, PASSWORD } from "./constants";

export async function login(page: Page) {
  await page.goto("https://eventia-project.vercel.app/");
  await page.getByRole("link", { name: "Login" }).click();
  await page.waitForTimeout(3000);
  await page
    .getByRole("textbox", { name: "Email address or username" })
    .fill(EMAIL);
  await page.getByRole("button", { name: "Continue" }).click();
  await page.waitForTimeout(3000);
  await page.getByRole("textbox", { name: "Password" }).fill(PASSWORD);
  await page.getByRole("button", { name: "Continue" }).click();
}
