describe('login', function() {

    //Set the default timout interval to 100 second for slow internet connections.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    
    it('login with registered account', function() {
        //Disable waiting for anjular pages.
        //This line is included due to our site isn't built in Angular.
        //This function is called once in every test case
        browser.waitForAngularEnabled(false);

        //Navigate to login page
        browser.get('https://egypt.aqarmap.com/en/login');

        //Enter the username and password and then login
        element(by.id('username')).sendKeys('testqoa751s@gmail.com');
        element(by.id('password')).sendKeys('123aqarmap321');
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click().then(function(){
            expect(browser.getCurrentUrl()).toBe('https://egypt.aqarmap.com/en/');
        });
    });

    it('login with not registered account', function() {
        browser.waitForAngularEnabled(false);

        browser.get('https://egypt.aqarmap.com/en/login');

        element(by.id('username')).sendKeys('abc123abc@gmail.com');
        element(by.id('password')).sendKeys('123aqarmap321');
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click().then(function(){
            var loginErrorMessage = element(by.xpath('/html/body/div[5]/div/div'));
            expect(loginErrorMessage.getText()).toBe('×\nInvalid credentials.');
        });
    });

    it('login with wrong password', function() {
        browser.waitForAngularEnabled(false);

        browser.get('https://egypt.aqarmap.com/en/login');

        //Clear the login form before use.
        element(by.id('username')).clear();
        element(by.id('password')).clear();
        
        element(by.id('username')).sendKeys('moataz.mahmoud@aqarmap.com');
        element(by.id('password')).sendKeys('123');
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click().then(function(){
            var loginErrorMessage = element(by.xpath('/html/body/div[5]/div/div'));
            expect(loginErrorMessage.getText()).toBe('×\nInvalid credentials.');
        });
    });

    it('login with blank fields', function() {
        browser.waitForAngularEnabled(false);

        browser.get('https://egypt.aqarmap.com/en/login');

        //Clear the login form before use.
        element(by.id('username')).clear();
        element(by.id('password')).clear();
        
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click().then(function(){
            var loginErrorMessage = element(by.xpath('/html/body/div[5]/div/div'));
            expect(loginErrorMessage.getText()).toBe('×\nInvalid credentials.');
        });
    });

    it('Disable remember a successful login', function() {
        browser.waitForAngularEnabled(false);

        browser.get('https://egypt.aqarmap.com/en/login');

        //Clear the login form before use.
        element(by.id('username')).clear();
        element(by.id('password')).clear();
        
        //fill the login data, uncheck remember me checkbox, and then click login
        element(by.id('username')).sendKeys('testqoa751s@gmail.com');
        element(by.id('password')).sendKeys('123aqarmap321');
        element(by.name('_remember_me')).click();
        element(by.xpath('/html/body/section[1]/div/div/div[2]/form/button')).click();
        
        //restart the browser to check if the browser is still remember the logged in user or not.
        browser.restart();

        browser.waitForAngularEnabled(false);

        //check if there a login button in the page or not. If there one, then the browser doesn't remember the previously logged in user. And it's the happy scenario.
        browser.get('https://egypt.aqarmap.com/en/');
        var loginButton = element(by.xpath('//*[@id="navbar-collapse-1"]/ul/li[2]/a'));
        expect(loginButton.getText()).toBe('Login');
    });
});