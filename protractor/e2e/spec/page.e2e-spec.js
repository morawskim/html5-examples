const protractor = require('protractor');

describe('Protractor example', () => {
    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
        await browser.get('/');

        //waiting for load select2 and tinymce
        const condition = protractor.ExpectedConditions.and(
            protractor.ExpectedConditions.presenceOf($('span.select2-container')),
            protractor.ExpectedConditions.presenceOf($('.tox-tinymce'))
        );
        await browser.wait(condition, 5000);
    });

    it('should select Alabama as state', async () => {
        //open select2 dropdown menu and select option
        const optionLabel = 'Alabama';
        const optionValue = 'AL';

        await element(by.css('.select2-selection__arrow')).click();
        await browser.wait(protractor.ExpectedConditions.presenceOf($('.select2-results__option')), 2000);
        await element(by.cssContainingText('.select2-results__option', optionLabel)).click();
        expect(element(by.css('.field-select2')).getAttribute('value')).toBe(optionValue);
        expect(await element(by.css('.select2-selection__rendered')).getText()).toBe(optionLabel);
    });

    it('should control tinymce', async () => {
        const tinyMceIframe = await element(by.css('.tox-edit-area iframe')).getWebElement();
        const elBold = await $('.tox-tbtn[title="Bold"]');
        const elItalic = await $('.tox-tbtn[title="Italic"]');
        const textarea = await $('textarea.field-tinymce');

        await elBold.click();
        await browser.driver.switchTo().frame(tinyMceIframe);
        const tinyMceBody = await $('#tinymce');
        await tinyMceBody.sendKeys('Bold');
        await browser.driver.switchTo().defaultContent();
        await elBold.click();
        await elItalic.click();
        await browser.driver.switchTo().frame(tinyMceIframe);
        await tinyMceBody.sendKeys('Italic');
        await browser.driver.switchTo().defaultContent();
        await elBold.click();
        await browser.driver.switchTo().frame(tinyMceIframe);
        await tinyMceBody.sendKeys('Bold&Italic');
        await browser.driver.switchTo().defaultContent();

        expect(await textarea.getAttribute('value')).toBe('<p><strong>Bold</strong><em>Italic<strong>Bold&amp;Italic</strong></em>Hello, World!</p>');
    });

    it('should display popover on mouse hover', async () => {
        const popoverElement = await element(By.id('popover-example'));
        await browser.actions().mouseMove(popoverElement).perform();

        const condition = protractor.ExpectedConditions.presenceOf($('div.popover.bs-popover-top'));
        await browser.wait(condition, 3000, 'Popover not appear');
    });

    it('should execute js in browser', async () => {
        const userAgent = await browser.executeScript('return navigator.userAgent');
        expect(userAgent).toMatch(/Chrome/);
    });
});
