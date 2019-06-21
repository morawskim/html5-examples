const puppeteer = require('puppeteer');

const scraper = async () => {
    let browser;
    try {
        const selector = 'html body section#opensuse-countdown div.opensuse-countdown  span.opensuse-countdown__version-name';
        browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://www.opensuse.org/');

        await page.waitFor((selector) => !!document.querySelector(selector), {timeout: 10000}, selector);
        return await page.evaluate( (selector) => {
            return document.querySelector(selector).innerHTML;
        }, selector);
    } catch (e) {
        throw e;
    } finally {
        browser.close();
    }
};

scraper().then((version) => {
    console.log(`version: ${version}`);
}).catch((e) => {
    console.error(`Error during check opensuse version: ${e}`);
});
