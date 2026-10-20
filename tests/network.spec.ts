// import { test } from '@playwright/test';
// import { Eyes, Target, ClassicRunner } from '@applitools/eyes-playwright';

// test('has title', async ({ browser }) => {
//     const context = await browser.newContext({
//         recordHar: {
//             path: '__network__/network.json',
//             mode: 'full',
//             content: 'embed',
//         },
//     });

//     try {
//         const page = await context.newPage();
//         const eyes = new Eyes(new ClassicRunner());
//         const apiKey = process.env.APPLITOOLS_API_KEY;
//         if (!apiKey) {
//             throw new Error('APPLITOOLS_API_KEY must be set to run this test.');
//         }
//         await eyes.setApiKey(apiKey);

//         await eyes.open(page, 'Playwright applitools', 'visual testing');
//         await page.goto('https://www.facebook.com/');
//         await eyes.check('Playwright page', Target.window().fully());
//         await eyes.closeAsync();
//     } finally {
//         await context.close(); // Finalizes network.har
//     }
// });