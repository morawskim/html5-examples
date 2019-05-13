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
    //todo mmo test for tinymce
});
