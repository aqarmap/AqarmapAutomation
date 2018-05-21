describe('quick registration (email scenarios): ', function() {
    //Change the defaul timeout generally from 10 seconds to 60 seconds.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

    it('Leave a reply with new user: ', function() {
        browser.waitForAngularEnabled(false);
        
        //Open search results page to initiate lead
        browser.get('https://egypt.aqarmap.com/en/for-sale/apartment/cairo/new-cairo/');

        //click on any question grid to go to questions page
        element.all(by.id('title-link')).get(0).click();

        browser.sleep(10000);

        browser.getAllWindowHandles().then(function (handles) {
            newWindowHandle = handles[1]; //This is the new window
            browser.switchTo().window(newWindowHandle).then(function() {
                
                //The following code will be executed on the new window.
                element(by.id('comment_content')).sendKeys('testing reply');
                element(by.id('discussion-submit-btn')).click();

                browser.sleep(2000);

                element(by.css('.btn.btn-social.btn-facebook')).click();

                browser.sleep(2000);

                /*element(by.name('_username')).sendKeys('biyag@tm2mail.com');
                element(by.css('.form-group .btn.btn-default.btn-md.gtm-btn-quick-login')).click();

                browser.sleep(2000);

                //Dismiss the alert shown by the browser
                browser.switchTo().alert().dismiss();*/
            });
        });
    });
});