import { Given, When, Then, Before } from  "@cucumber/cucumber";
import { expect } from  "@playwright/test";
import { chromium } from "@playwright/test";

Before(async () =>{
    global.browser = await chromium.launch({headless: false});
  
    global.page = await global.browser.newPage();
})

Given('the Framer site is loaded', async () => {
    await page.goto('https://mind-wend-913065.framer.app/');
  });

  When('I click on Pricing button', async () => {
    await page.locator('div.framer-1g3amks-container div[data-framer-generated="true"] span').click();
  });

  When('I see the Pricing page', async () => {
    const text = await page.locator('div.framer-1xy1tag h1 span').textContent();
    page.pause();
    await page.locator('div.framer-1xy1tag h1 span').toContainText('Pricing');
  });

  Then('I see the products currency symbol is displayed as $ in Pricing page', async () => {
    const tiles = await page.locator('div.pricing-container').locator('div');
    tiles.forEach((tile) => {
       const text = page.locator(tile + ' h2 span').textContent();
       expect(text[0]).toHaveText('$');
    });
  });