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
    expect(text).toContain('Pricing');
  });

  Then('I see the products currency symbol is displayed as $ in Pricing page', async () => {
    
    const tile15 = await page.getByText('Free plan$15/moUp to 3');
    const tile30 = await page.getByText('Basic plan$30/moBilled');
    const tile45 = await page.getByText('Pro plan$45/moBilled');

    expect(tile15.textContent()).toContain('$');
    expect(tile30.textContent()).toContain('$');
    expect(tile45.textContent()).toContain('$');
  });