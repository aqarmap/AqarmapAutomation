describe('login', function() {
    //Change the defaul timeout from 10 seconds to 60 seconds.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

   /* it('Check that request a call shows quick registration window: ', function() {
        //Disable waiting for anjular pages.
        //This line is included due to our site isn't built in Angular.
        //This function is called once in every test case
        browser.waitForAngularEnabled(false);

        //Navigate to search results page
        browser.get('https://egypt.aqarmap.com/en/for-sale/apartment/cairo/new-cairo/');

        //Initiate a lead to show up the quick registration window.
        //This time will be request a call.
        //We will click request a call, and then check the css class of the popup window.
        element(by.xpath('/html/body/div[5]/div[2]/section/div[2]/ul/li[1]/div/div[1]/div/div[2]/div/div[3]/a')).click().then(function(){
            var quickRegistrationWindow = element(by.xpath('//*[@id="login-form"]/div[1]/span'));
            expect(quickRegistrationWindow.getAttribute('class')).toBe('modal-title model-header-title');
        });
    });*/

    /*it('Check that show phone number shows quick registration window: ', function() {
        browser.waitForAngularEnabled(false);

        //Navigate to search results page.
        browser.get('https://egypt.aqarmap.com/en/for-sale/apartment/cairo/new-cairo/'); 

        //Click on details of the first search results.
        element(by.xpath('/html/body/div[5]/div[2]/section/div[2]/ul/li[1]/div/div[1]/div/div[2]/div/div[4]/a')).click().then(function(){
            
            //The details of the selected listing opens in a new window. So we need to switch the control to the new window
            browser.sleep(10000);
            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; //This is the new window
                browser.switchTo().window(newWindowHandle).then(function() {
                    //This code will be executed on the new window.
                    //Click on "Show phone" button and check the css of the popup window
                    element(by.xpath('/html/body/div[5]/div[1]/div/div[2]/section/div/div[2]/a')).click();
                    var quickRegistrationWindow = element(by.xpath('//*[@id="login-form"]/div[1]/span'));
                    expect(quickRegistrationWindow.getAttribute('class')).toBe('modal-title model-header-title');
                })
            });
        });
    });*/

    /*it('In projects page, check that request a call shows the quick registration window', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/projects/');

        //click on "Details" button
        element(by.xpath('/html/body/section[1]/div[1]/div[3]/div/div/a')).click().then(function() {
            //The details of the selected listing opens in a new window. So we need to switch the control to the new window
            browser.sleep(10000);

            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; //This is the new window
                browser.switchTo().window(newWindowHandle).then(function() {
                    //This code will be executed on the new window.

                    //Click on "Request a call" button and check the css of the popup window
                    element(by.xpath('/html/body/div[5]/div[1]/div/div[3]/section/div/div[1]/form/button')).click();
                    var quickRegistrationWindow = element(by.xpath('//*[@id="login-form"]/div[1]/span'));
                    expect(quickRegistrationWindow.getAttribute('class')).toBe('modal-title model-header-title');
                });
            });
        });
    });*/

    /*it('In projects page, check that send a message shows the quick registration window', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/projects/');

        //click on "Details" button
        element(by.xpath('/html/body/section[1]/div[1]/div[3]/div/div/a')).click().then(function() {
            //The details of the selected listing opens in a new window. So we need to switch the control to the new window
            browser.sleep(10000);

            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; //This is the new window
                browser.switchTo().window(newWindowHandle).then(function() {
                    //This code will be executed on the new window.

                    //Write a messaage then click "send". After that, check the css of the popup window.
                    element(by.xpath('//*[@id="contact_seller_message"]')).sendKeys('test message');
                    element(by.xpath('/html/body/div[5]/div[1]/div/div[3]/section/div/div[2]/form/button')).click();
                    var quickRegistrationWindow = element(by.xpath('//*[@id="login-form"]/div[1]/span'));
                    expect(quickRegistrationWindow.getAttribute('class')).toBe('modal-title model-header-title');
                });
            });
        });
    })*/

    /*it('In luxury page, check that request a call shows the quick registration window', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/luxury/');

        //click on "Details" button
        element(by.xpath('/html/body/section[1]/div[1]/div[3]/div/div/a')).click().then(function() {
            //The details of the selected listing opens in a new window. So we need to switch the control to the new window
            browser.sleep(10000);

            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; //This is the new window
                browser.switchTo().window(newWindowHandle).then(function() {
                    //This code will be executed on the new window.

                    //Click on "Request a call" button and check the css of the popup window
                    element(by.xpath('/html/body/div[5]/div[1]/div/div[3]/section/div/div[1]/form/button')).click();
                    var quickRegistrationWindow = element(by.xpath('//*[@id="login-form"]/div[1]/span'));
                    expect(quickRegistrationWindow.getAttribute('class')).toBe('modal-title model-header-title');
                });
            });
        });
    });*/

    /*it('In luxury page, check that send a message shows the quick registration window', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/luxury/');

        //click on "Details" button
        element(by.xpath('/html/body/section[1]/div[1]/div[3]/div/div/a')).click().then(function() {
            //The details of the selected listing opens in a new window. So we need to switch the control to the new window
            browser.sleep(10000);

            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; //This is the new window
                browser.switchTo().window(newWindowHandle).then(function() {
                    //The following code will be executed on the new window.

                    //Write a messaage then click "send".
                    element(by.xpath('//*[@id="contact_seller_message"]')).sendKeys('test message');
                    element(by.xpath('/html/body/div[5]/div[1]/div/div[3]/section/div/div[2]/form/button')).click();

                    //try to click on "x" button to make sure that the quick registration form is shown up not still hidden.
                    element(by.xpath('//*[@id="login-form"]/div[1]/button/span')).click();
            });
        });
    });*/

    it('Check that quick registration popup opens when click on "Add Question" button: ', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://egypt.aqarmap.com/en/');

        //Select a category from the dropdownlist
        var askQuestion = element(by.xpath('/html/body/div[6]/div/div[1]/div/div/div[1]/h2'));
        browser.executeScript('arguments[0].scrollIntoView()', askQuestion.getWebElement());

        var askQuestionTextBox = element(by.css('.discussions.home-discussion.ng-scope .discussion-textarea'));
        askQuestionTextBox.click().then(function() {
            askQuestionTextBox.sendKeys('My first question');

            var select = element.all(by.id('category')).get(1);
            select.$('[value="3"]').click();
            element(by.css('.discussions.home-discussion.ng-scope .btn.btn-primary.btn-block')).click();
        });

        browser.sleep(5000);
    });
});