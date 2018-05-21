describe('Add Listing: ', function() {
    //Change the defaul timeout from 10 seconds to 2 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    //To enable uploading photos
    var path = require('path');

    ///Note:                                                                 Before running this script, you need to put a photo with name "test_add_listing.jpg" in the this script working directory to be added as listing photo.
    it('Add Listing: ', function() {
        browser.waitForAngularEnabled(false);
        
        //Open home page to add listing
        browser.get('https://egypt.aqarmap.com/en');

        //Login to be able to add listing.
        element(by.xpath('//*[@id="navbar-collapse-1"]/ul/li[2]/a')).click();
        element(by.name('_username')).sendKeys('biyag@tm2mail.com');
        element(by.name('_password')).sendKeys('test123');
        element(by.name('_submit')).click();

        //Click on add listing button
        element.all(by.css('.glyphicon.glyphicon-plus-sign')).get(0).click();

        //Select the listing type as "Apartment"
        var listing_type = element(by.id('propertyType'));
        listing_type.$('[value="1"]').click();

        //Select the listing type as "Fpr Rent"
        var listing_section = element(by.id('section'));
        listing_section.$('[value="2"]').click();

        //Select the location of the listing
        var location = element.all(by.model("currentSelected")).get(0);
        location.$('[value="0"]').click();   //Greater Cairo
        location = element.all(by.model("currentSelected")).get(1);
        location.$('[value="5"]').click();  //Maadi
        location = element.all(by.model("currentSelected")).get(2);
        location.$('[value="1"]').click();  //Sarayat El-Maadi  
        location = element.all(by.model("currentSelected")).get(3);
        location.$('[value="0"]').click();  //Sarayat El-Maadi

        element(by.buttonText('Next')).click();

        //Typing the listing location and title
        element(by.id('listing_title')).sendKeys("Autiomation testing listing");
        element(by.id('listing_description')).sendKeys("This is an automation testing listing.");
        
        //Entering the listing area and price
        element(by.id('listing_area')).sendKeys("123");
        element(by.id('listing_price')).sendKeys("500000");
        
        //Select the payment method
        var payment_method = element(by.id('listing_paymentMethod'));
        payment_method.$('[value="1"]').click();    //cash
        
        //Select the property view
        var property_view = element(by.id("listing_propertyView"));
        property_view.$('[value="1"]').click();    //garden

        //Entering the number of rooms, floor, and number of baths
        element(by.id('listing_attributes_0_value')).sendKeys("3");//# rooms
        element(by.id('listing_attributes_1_value')).sendKeys("4");//floor#
        element(by.id('listing_attributes_2_value')).sendKeys("1");//#baths

        //Select the construction date
        var construction_date = element(by.id('listing_attributes_3_value'));
        construction_date.$('[value="2018"]').click();

        //Select the finish level
        var finish_level = element(by.id('listing_attributes_4_value'));
        finish_level.$('[value="LUX"]').click();        

        element(by.id('listing_address')).sendKeys("Any address for testing");

        element(by.buttonText('Next')).click();

        var photo_to_upload = 'test_add_listing.jpg', absolute_path = path.resolve(__dirname, photo_to_upload);

        element(by.css('input[type="file"]')).sendKeys(absolute_path); 
        browser.sleep(10000); //Wait until photo uploaded.
        element(by.id('forward_btn')).click();  

        browser.sleep(5000);

        //Check the title of the current page
        var page_title = browser.getTitle();
        expect(page_title).toEqual("Publish Listing • Aqarmap");

        browser.sleep(10000);
    });
});