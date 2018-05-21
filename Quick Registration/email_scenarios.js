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

                element(by.css('.login-button input[value="Register with E-mail"]')).click();
                element(by.name('_username')).sendKeys('biyag@tm2mail.com');
                element(by.css('.form-group .btn.btn-default.btn-md.gtm-btn-quick-login')).click();

                browser.sleep(2000);

                //Dismiss the alert shown by the browser
                browser.switchTo().alert().dismiss();
                });
    });

    //Hint: The used account is a testing account created for testing. The user name and password for this user is hardcoded. If you want to test with another user, feel free to replace them.
    it('Leave a reply with an existing but not logged in user: ', function() {
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

                element(by.css('.login-button input[value="Register with E-mail"]')).click();
                element(by.name('_username')).sendKeys('biyag@tm2mail.com');
                element(by.css('.form-group .btn.btn-default.btn-md.gtm-btn-quick-login')).click();

                browser.sleep(2000);

                element(by.name('_password')).sendKeys('test123');
                element(by.name('_submit')).click();

                browser.sleep(2000);

                //Dismiss the alert shown by the browser
                browser.switchTo().alert().dismiss();
                });

                browser.sleep(10000);
        });
    });

    it('Leave a reply with an existing but not updated his username or phone number in the last past 90 days: ', function() {
        browser.waitForAngularEnabled(false);
        
        //Open search results page to initiate lead
        browser.get('https://staging.aqarmap.net/en/for-sale/apartment/cairo/new-cairo/');

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

                element(by.css('.login-button input[value="Register with E-mail"]')).click();
                element(by.name('_username')).sendKeys('biyag@tm2mail.com');
                element(by.css('.form-group .btn.btn-default.btn-md.gtm-btn-quick-login')).click();

                browser.sleep(2000);

                element(by.name('_password')).sendKeys('test123');
                element(by.name('_submit')).click();

                browser.sleep(2000);

                //Dismiss the alert shown by the browser
                browser.switchTo().alert().dismiss();
                });

                browser.sleep(10000);

                /*element(by.id('fullName')).sendKeys('Testing Account');
                element(by.id('phoneNumber')).sendKeys('1009851986');
                element(by.cssContainingText('.btn.btn-default.btn-md', 'Proceed')).click();*/
        });
    });
});