describe('Leads: ', function() {
    //Change the defaul timeout from 10 seconds to 2 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    //To enable uploading photos
    var path = require('path');

    it('Add Listing: ', function() {
        browser.waitForAngularEnabled(false);

        //Login to be able to initiate leads.
        browser.get('https://egypt.aqarmap.com/en/');
        element(by.xpath('//*[@id="navbar-collapse-1"]/ul/li[2]/a')).click();
        element(by.name('_username')).sendKeys('biyag@tm2mail.com');
        element(by.name('_password')).sendKeys('test123');
        element(by.name('_submit')).click();

        //Note that it's a testing listing and removed now. To test, please ented a valid listing here
        browser.get('https://egypt.aqarmap.com/en/listing/1895752-for-sale-apartment-new-valley');

        var phone_number = element.all(by.css('.hidden-sm.hidden-xs.gtm-btn-listing-phone')).get(0);
        phone_number.click();

        phone_number = element.all(by.css('.phoneNumber.ng-binding')).get(0);
        browser.sleep(2000);    //Wait until the number is shown up

        expect(phone_number.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
    });
});