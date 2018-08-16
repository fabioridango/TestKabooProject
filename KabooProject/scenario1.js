// scenario1.js

var SignupUser = function() {

    //first phase register account settings
    var createAccountButton = element(by.xpath('/html/body/div[1]/div[1]/ui-view/header/div/div[1]/div[1]/form/fieldset/a'));
    var emailInput = element(by.xpath('/html/body/div[1]/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/div[1]/input'));  
    var usernameInput = element(by.xpath('/html/body/div[1]/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/div[2]/input')); 
    var passwordInput = element(by.xpath('/html/body/div[1]/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/div[3]/div/input')); 
    var passwordRepeatInput = element(by.xpath('/html/body/div[1]/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/div[4]/div/input')); 
    var notWishReceiveInformation = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[1]'));
    var notWishReceiveInformationEmail = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[2]/label/span/span'));
    var notWishReceiveInformationTextMessage = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[3]/label/span/span'));
    var notWishReceiveInformationTelephone = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[4]/label/span/span'));
    var notWishReceiveInformationDirectMail = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[5]/label/span/span'));
    var notWishReceiveInformationDirectOnsideMarketing = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[6]/label/span/span'));
    var termsConditions = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[7]'));
    var wishReceiveInformation = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[8]'));
    var personalData = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/fieldset/div/ko-gdpr/div/div[13]/label/span/span'));
    var nextButton = element(by.xpath('/html/body/div[1]/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[1]/div/button'));
    //second phase register account settings
    var firstNameInput = element(by.css('[name="firstname"]'));
    var surnameInput = element(by.css('[name="lastname"]'));
    var dayInput = element(by.css('[name="days"]'));
    var monthInput = element(by.css('[name="months"]'));
    var yearInput = element(by.css('[name="years"]'));
    var gender = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[2]/fieldset/div/div[4]/div[2]'));
    var addressInput = element(by.css('[name="address"]'));
    var postcodeInput = element(by.css('[name="postalCode"]'));
    var cityInput = element(by.css('[name="city"]'));
    var country = element(by.xpath('//*[@id="countrySelector"]'));
    var currency = element(by.xpath('//*[@id="currencySelector"]'));
    var phonePrefix = element(by.xpath('//*[@id="phonePrefix"]'));
    var phoneNumber = element(by.css('[name="phoneNumber"]'));
    var registerNowButton = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/form/div[2]/div/button'));
    var labelVerificationCode = element(by.xpath('/html/body/div/div[1]/ui-view/div/main/div/div/div/div/div/div/div/div/div/div[2]/form/legend'))
    var expcond = protractor.ExpectedConditions;
    var currencyLabel = element(by.xpath('//*[@id="currencySelector"]/div/span'));
    var phonePrefixLabel = element(by.xpath('//*[@id="phonePrefix"]/div/span'));


    // launch the home page
    this.urlPageNavigation = function(urlHomePage){  
      browser.get(urlHomePage);
      browser.getCurrentUrl().then(function (url){
        expect(url).toEqual(urlHomePage);
      });
    };

    // click on Create Account button
    this.selectCreateAccount = function () {
        browser.wait(expcond.visibilityOf(createAccountButton),10,"AccountButton not found");
        createAccountButton.click();
    };

    // check if the User is redirect in Register Account Page
    this.redirectRegisterAccountPage = function(urlRegisterAccountPage){
        browser.getCurrentUrl().then(function (url){
        expect(url).toEqual(urlRegisterAccountPage);
       });
    };

    // first phase register account
    // 
    this.setUserEmail = function (userEmail) {
        browser.wait(expcond.visibilityOf(emailInput),10,"email locator not found");
        emailInput.sendKeys(userEmail);
    };

    // fill the username field
    this.setUserName = function (username) {
        browser.wait(expcond.visibilityOf(usernameInput),10,"username locator not found");
        usernameInput.sendKeys(username);
    };


    // fill the password field
    this.setPassword = function (password) {
        browser.wait(expcond.visibilityOf(passwordInput),10,"password locator not found");
        passwordInput.sendKeys(password);
    };

    // fill the repeat password field
    this.setPasswordRepeat = function (passwordRepeat) {
        browser.wait(expcond.visibilityOf(passwordRepeatInput),10,"passwordRepeat locator not found");
        passwordRepeatInput.sendKeys(passwordRepeat);
        //Scroll down page
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
    };

    // click on checkbox Not Wish Receive Information
    this.selectNotWishReceiveInformation = function () {
        browser.wait(expcond.visibilityOf(notWishReceiveInformation),10,"NotWishReceiveInformation locator not found");
        notWishReceiveInformation.click();
    };

    // click on checkbox Not Wish Receive Information - Email
    this.selectNotWishReceiveInformationEmail = function () {
        browser.wait(expcond.visibilityOf(notWishReceiveInformationEmail),10,"NotWishReceiveInformationEmail locator not found");
        notWishReceiveInformationEmail.click();
    };

    // click on checkbox Not Wish Receive Information - TextMessage
    this.selectNotWishReceiveInformationTextMessage = function () {
        browser.wait(expcond.visibilityOf(notWishReceiveInformationTextMessage),10,"NotWishReceiveInformationTextMessage locator not found");
        notWishReceiveInformationTextMessage.click();
    };

     // click on checkbox Not Wish Receive Information - Telephone
     this.selectNotWishReceiveInformationTelephone = function () {
        browser.wait(expcond.visibilityOf(notWishReceiveInformationTelephone),10,"NotWishReceiveInformationTelephone locator not found");
        notWishReceiveInformationTelephone.click();
    };

    // click on checkbox Not Wish Receive Information - Direct Mail
    this.selectNotWishReceiveInformationDirectMail = function () {
        browser.wait(expcond.visibilityOf(notWishReceiveInformationDirectMail),10,"NotWishReceiveInformationDirectMail locator not found");
        notWishReceiveInformationDirectMail.click();
    };
  
    // click on checkbox Not Wish Receive Information - Onside Marketing
    this.selectNotWishReceiveInformationDirectOnsideMarketing = function () {
        browser.wait(expcond.visibilityOf(notWishReceiveInformationDirectOnsideMarketing),10,"NotWishReceiveInformationDirectOnsideMarketing locator not found");
        notWishReceiveInformationDirectOnsideMarketing.click();
    };

    // click on checkbox Terms Conditions
    this.selectTermsConditions = function () {
        browser.wait(expcond.visibilityOf(termsConditions),10,"termsConditions locator not found");
        termsConditions.click();
    };

    // click on checkbox WisReceive Information
    this.selectWishReceiveInformation = function () {
        browser.wait(expcond.visibilityOf(wishReceiveInformation),10,"wishReceiveInformation locator not found");
        wishReceiveInformation.click();
    };

    // click on checkbox Personal Data
    this.selectPersonalData = function () {
        browser.wait(expcond.visibilityOf(personalData),10,"personalData locator not found");
        personalData.click();
    };

    // click on Next button
    this.selectNextButton = function () {
        browser.wait(expcond.visibilityOf(nextButton),10,"nextButton locator not found");
        nextButton.click();
    };

    //second phase register account
    // fill the First Name field
    this.setFirstName = function (firstname) {
        browser.wait(expcond.visibilityOf(firstNameInput),10,"firstname locator not found");
        firstNameInput.sendKeys(firstname);
    };

    // fill the Surname field
    this.setSurname = function (surname) {
        browser.wait(expcond.visibilityOf(surnameInput),10,"surname locator not found");
        surnameInput.sendKeys(surname);
    };

    // fill the Day field
    this.setDay = function (day) {
        browser.wait(expcond.visibilityOf(dayInput),10,"day locator not found");
        dayInput.sendKeys(day);
    };

    // fill the Month field
    this.setMonth = function (month) {
        browser.wait(expcond.visibilityOf(monthInput),10,"month locator not found");
        monthInput.sendKeys(month);
    };

    // fill the Year field
    this.setYear = function (year) {
        browser.wait(expcond.visibilityOf(yearInput),10,"year locator not found");
        yearInput.sendKeys(year);
    };

    // fill the Gender field
    this.setGender = function () {
        browser.wait(expcond.visibilityOf(gender),10,"gender locator not found");
        gender.click();
    };

    // fill the Address field
    this.setAddressInput = function (address) {
        browser.wait(expcond.visibilityOf(addressInput),10,"address locator not found");
        addressInput.sendKeys(address);
    };

    // fill the Postcode field
    this.setPostcodeInput = function (postalcode) {
        browser.wait(expcond.visibilityOf(postcodeInput),10,"postalcode locator not found");
        postcodeInput.sendKeys(postalcode);
    };

    // fill the City field 
    this.setCityInput = function (city) {
        browser.wait(expcond.visibilityOf(cityInput),10,"city locator not found");
        cityInput.sendKeys(city);
    };

    // select Country
    this.setCountry = function () {
        browser.wait(expcond.visibilityOf(country),10,"country locator not found");
        country.click();
        element(by.xpath('//*[@id="countrySelector"]/ul/li[5]/a')).click();
    };

   // check that in base of the Country previously selected is displayed the correct currency 
   this.checkCurrentCurrency = function (currentCurrency) {
        browser.wait(expcond.visibilityOf(currency),10,"currency locator not found");
        expect(currencyLabel.getText()).toContain(currentCurrency);
        browser.sleep(2000);
    };

    // check that in base of the Country previously selected is displayed the correct phone prefix
    this.checkCurrentPhonePrefix = function (currentPhonePrefix) {
        browser.wait(expcond.visibilityOf(phonePrefix),10,"phonePrefix locator not found");
        expect(phonePrefixLabel.getText()).toContain(currentPhonePrefix);
        browser.sleep(2000);
    };

    // select another currency
    this.setCurrency = function () {
        browser.wait(expcond.visibilityOf(currency),10,"currency locator not found");
        currency.click();
        element(by.xpath('//*[@id="currencySelector"]/ul/li[1]/a')).click();
    };

    // select another phone prefix
    this.setPhonePrefix = function () {
        browser.wait(expcond.visibilityOf(phonePrefix),10,"phonePrefix locator not found");
        phonePrefix.click();
        element(by.xpath('//*[@id="phonePrefix"]/ul/li[32]')).click();
    };

    // fill the phone mumber field 
    this.setPhoneNumber = function (phonenumber) {
        browser.wait(expcond.visibilityOf(phoneNumber),10,"phoneNumber locator not found");
        phoneNumber.sendKeys(phonenumber);
        
    };

    // click on Register Now button
    this.selectRegisterNowButton = function () {
        browser.wait(expcond.visibilityOf(registerNowButton),10,"registerNowButton locator not found");
        registerNowButton.click();
        browser.sleep(5000);
    };

    //third phase register account
   // check that the user is redirected to Verification Code page
   this.checkTextVerificationCode = function (text) {
        browser.wait(expcond.visibilityOf(labelVerificationCode),10,"labelVerificationCode locator not found");
        expect(labelVerificationCode.getText()).toContain(text);
   };

};

module.exports = SignupUser;