import { test, expect } from '@playwright/test';
import { Eyes, Target, ClassicRunner } from '@applitools/eyes-playwright';

test('testing', async ({ page }) => {
    // const run = new ClassicRunner();
    // const eyes = new Eyes(run);
    // const apiKey = process.env.APPLITOOLS_API_KEY;
    // if (!apiKey) {
    //     throw new Error('APPLITOOLS_API_KEY must be set to run this test.');
    // }
    // await eyes.setApiKey(apiKey);
    // await eyes.open(page, 'Playwright applitools', 'visual testing');
    await page.goto('https://playwright.dev/');
    // await eyes.check('Playwright page', Target.window().fully());
    await page.locator('h1').waitFor({ state: 'visible' });
    // await eyes.check('Playwright', Target.region('h1'));

    // await eyes.close();
});
