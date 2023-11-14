import { expect, test } from "@playwright/test";

test("has element with text", async ({ page }) => {
  await page.goto("./");

  // Replace 'your-selector' with the actual selector of the element you want to check
  const element = await page.$(
    "strong"
  );

  // Ensure the element is found
  expect(element).not.toBeNull();

  if (element) {
    // Get the text content of the element
    const elementText = await element.textContent();

    // Check if the text content matches the expected value
    await expect(elementText).toBe("Welcome to Acme.");
  }
});
