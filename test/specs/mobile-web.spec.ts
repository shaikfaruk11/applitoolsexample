import { browser, expect } from '@wdio/globals';

describe('Sauce Labs mobile browser tests', () => {
    it('should launch the mobile browser', async () => {
        await browser.url('https://google.com');

        const url = await browser.getUrl();

        expect(url).toContain('google.com');
    });

    // it('should display the page heading', async () => {
    //     await LoginPage.open('https://example.com');

    //     const heading = await LoginPage.getHeadingText();

    //     expect(heading).toBe('Example Domain');
    // });

    // it('should navigate to another website', async () => {
    //     await LoginPage.open('https://webdriver.io');

    //     await browser.waitUntil(
    //         async () =>
    //             (await browser.getUrl()).includes('webdriver.io'),
    //         {
    //             timeout: 20000,
    //             timeoutMsg: 'Expected website navigation to finish',
    //         },
    //     );

    //     expect(await browser.getUrl()).toContain('webdriver.io');
    // });
});