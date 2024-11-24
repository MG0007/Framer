import { test, expect } from '@playwright/test'

test('Visit Framer home page and click "pricing"', async ({page}) => {
    await page.goto('https://mind-wend-913065.framer.app/')
    await page.pause();
    await page.locator('div.framer-1g3amks-container div[data-framer-generated="true"] span').click();
    await page.pause();
})

