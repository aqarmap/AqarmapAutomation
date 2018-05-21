describe('registeration: ', function() {

    //Set the default timout interval to 100 second for slow internet connections.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    
    it('register with valid data', function() {
        //disable waiting for anjular pages.
        //this line is included due to our site isn't built in Angular.
        //This function is called once in every test case
        browser.waitForAngularEnabled(false);

        //navigate to the register page
        browser.get('https://egypt.aqarmap.com/en/register/');

        //fill the register data and then click register button
        element(by.id('fos_user_registration_form_fullName')).sendKeys('Moataz Mahmoud');
        element(by.id('fos_user_registration_form_phoneNumber')).sendKeys('01020729051');
        element(by.id('fos_user_registration_form_email')).sendKeys('temp103@gmail.com');
        element(by.id('fos_user_registration_form_plainPassword_first')).sendKeys('123aqarmap321');
        element(by.id('fos_user_registration_form_plainPassword_second')).sendKeys('123aqarmap321');
        
        //after click on the register button, check the url.
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click().then(function(){
        expect(browser.getCurrentUrl()).toBe('https://egypt.aqarmap.com/en/register/confirmed');
        });
    });

    /it('register with an already existing email', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/register/');

        element(by.id('fos_user_registration_form_fullName')).sendKeys('Moataz Mahmoud');
        element(by.id('fos_user_registration_form_phoneNumber')).sendKeys('01020729051');
        element(by.id('fos_user_registration_form_email')).sendKeys('moataz.mahmoud@aqarmap.com');
        element(by.id('fos_user_registration_form_plainPassword_first')).sendKeys('123aqarmap321');
        element(by.id('fos_user_registration_form_plainPassword_second')).sendKeys('123aqarmap321');
        
        //after click on the register button, check the error message.
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click().then(function() {
            var registrationErrorMessage = element(by.xpath('/html/body/section[1]/div/div/div[2]/form/div[3]/span/ul/li'));
            expect(registrationErrorMessage.getText()).toBe('You already registerd on Aqarmap, please enter your password. If you don\'t know your password please click on \'Forget Password\'.');
        });
    });

    it('register with wrong confirmation password', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/register/');

        element(by.id('fos_user_registration_form_fullName')).sendKeys('Moataz Mahmoud');
        element(by.id('fos_user_registration_form_phoneNumber')).sendKeys('01020729051');
        element(by.id('fos_user_registration_form_email')).sendKeys('xxxxxx@gmail.com');
        element(by.id('fos_user_registration_form_plainPassword_first')).sendKeys('123aqarmap321');
        element(by.id('fos_user_registration_form_plainPassword_second')).sendKeys('wrong confirmation');
        
        //after click on the register button, check the error message.
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click().then(function(){
            var confirmationPasswordErrorMessage = element(by.xpath('/html/body/section[1]/div/div/div[2]/form/div[4]/span/ul/li'));
        expect(confirmationPasswordErrorMessage.getText()).toBe('The entered passwords don\'t match.');
        });
    });

    it('check that all fields are mandatory', function() {
        browser.waitForAngularEnabled(false);

        browser.get('https://egypt.aqarmap.com/en/register/');

        //remove html 5 popup notifications to catch the server side verification error message. This step is made for all the mandatory fields in the registeration page.
        var temp = element(by.id('fos_user_registration_form_fullName'));
        browser.executeScript('arguments[0].removeAttribute("required");', temp.getWebElement());

        var temp = element(by.id('fos_user_registration_form_phoneNumber'));
        browser.executeScript('arguments[0].removeAttribute("required");', temp.getWebElement());

        var temp = element(by.id('fos_user_registration_form_email'));
        browser.executeScript('arguments[0].removeAttribute("required");', temp.getWebElement());

        var temp = element(by.id('fos_user_registration_form_plainPassword_first'));
        browser.executeScript('arguments[0].removeAttribute("required");', temp.getWebElement());

        var temp = element(by.id('fos_user_registration_form_plainPassword_second'));
        browser.executeScript('arguments[0].removeAttribute("required");', temp.getWebElement());

        //click on register button after remove the popup alerts to display the server side verification error messages.
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click();

        //check that all the error messages are displayed appropriately.
        var fullName = element(by.xpath('/html/body/section[1]/div/div/div[2]/form/div[1]/span/ul/li'));
        expect(browser.isElementPresent(fullName)).toBe(true);
        
       var phoneNumber = element(by.xpath('/html/body/section[1]/div/div/div[2]/form/div[2]/div/span/ul/li'));
        expect(browser.isElementPresent(phoneNumber)).toBe(true);

        var email = element(by.xpath('/html/body/section[1]/div/div/div[2]/form/div[1]/span/ul/li'));
        expect(browser.isElementPresent(email)).toBe(true);

        var password = element(by.xpath('/html/body/section[1]/div/div/div[2]/form/div[4]/span/ul/li'));
        expect(browser.isElementPresent(password)).toBe(true);
    });

    it('already have an account, go to login page', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/register/');
        element(by.xpath('/html/body/section[1]/div/div/div[2]/div/a')).click().then(function() {
            expect(browser.getCurrentUrl()).toBe('https://egypt.aqarmap.com/en/login');
        });
    });
});