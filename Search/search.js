describe('Search for listing: ', function() {
    //Change the defaul timeout from 10 seconds to 1 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
                                            
    it('Confirm that search results are consistent', function() {
        browser.waitForAngularEnabled(false);
        
        //Open home page to search for listing
        browser.get('https://egypt.aqarmap.com/en');

        //St Min. Price to 1M and Max. Price to 5M.
        var min_price = element.all(by.css('.ng-pristine.ng-valid')).get(4);
        min_price.$('[value="4"]').click()

        var max_price = element.all(by.css('.ng-pristine.ng-valid')).get(3);
        max_price.$('[value="6"]').click();

        //Click search to open search page
        element(by.xpath('//*[@id="search-form-container"]/form/div/div[2]/button')).click();

        //Sort the search results 
    });

    /*it('Check that "Ask Your Question" module exists in the middle of the search page', function() {
        browser.waitForAngularEnabled(false);
        
        //Open home page to search for listing
        browser.get('https://egypt.aqarmap.com/en');

        //Click search to open search page
        element(by.xpath('//*[@id="search-form-container"]/form/div/div[2]/button')).click();

        //Check if "Ask Your Question" module exists in the middle of the search page
        var ask_button = element.all(by.id('discussion-submit-btn')).get(1);
        expect(ask_button.getText()).toBe("Add Question");
    });*/

   /* it('Check that "Estimations" module exists in the middle of the search page', function() {
        browser.waitForAngularEnabled(false);
        
        //Open home page to search for listing
        browser.get('https://egypt.aqarmap.com/en');

        //Click search to open search page
        element(by.xpath('//*[@id="search-form-container"]/form/div/div[2]/button')).click();

        //Check if "Estimations" module exists in the middle of the search page
        var estimation = element(by.cssContainingText('.btn', "Estimate"));
        expect(estimation.getText()).toBe('Estimate Property Value');
    });*/

    /*it('Check that "Explore Questions" module exists in the middle of the search page', function() {
        browser.waitForAngularEnabled(false);
        
        //Open home page to search for listing
        browser.get('https://egypt.aqarmap.com/en');

        //Click search to open search page
        element(by.xpath('//*[@id="search-form-container"]/form/div/div[2]/button')).click();

        //Check if "Estimations" module exists in the middle of the search page
        var explore_question = element(by.cssContainingText('.explore-more', "View"));
        expect(explore_question.getText()).toBe('View more Questions');
    });*/

    /*it('Check that "Search inside neighborhood" section exists in the middle of the search page', function() {
        browser.waitForAngularEnabled(false);
        
        //Open home page to search for listing
        browser.get('https://egypt.aqarmap.com/en');

        //Click search to open search page
        element(by.xpath('//*[@id="search-form-container"]/form/div/div[2]/button')).click();

        //Check if "Search inside neighborhood" section exists in the middle of the search page
        var neighborhood = element(by.xpath('/html/body/div[5]/div[3]/div[1]/h3'));
        expect(neighborhood.getText()).toContain('Search inside the neighborhoods');

    });*/

    /*it('Check that "Search other types" section exists in the middle of the search page', function() {
        browser.waitForAngularEnabled(false);
        
        //Open home page to search for listing
        browser.get('https://egypt.aqarmap.com/en');

        //Click search to open search page
        element(by.xpath('//*[@id="search-form-container"]/form/div/div[2]/button')).click();

        //Check if "Search inside neighborhood" section exists in the middle of the search page
        var search_other_types = element(by.xpath('/html/body/div[5]/div[3]/div[3]/h3'));
        expect(search_other_types.getText()).toContain('Search other');

    });*/
});