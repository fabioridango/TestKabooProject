// scenario2.js

var LoginUser = function() {
  
    var userEmailInput = element(by.name('email'));
    var passwordInput = element(by.name('pwd'));  
    var loginButton = element(by.xpath('/html/body/div[1]/div[1]/ui-view/header/div/div[1]/div[1]/form/fieldset/button'));
    var expcond = protractor.ExpectedConditions;

    // launch the home page
    this.urlPageNavigation = function(urlHomePage){
      browser.get(urlHomePage);
      browser.getCurrentUrl().then(function (url){
        expect(url).toEqual(urlHomePage);
      });
    };

    // fill the username/email field
    this.setUserEmail = function (userEmail) {
        browser.wait(expcond.visibilityOf(userEmailInput),30,"email locator not found");
        userEmailInput.sendKeys(userEmail);
    };

    // fill the password field
    this.setPassword = function (password) {
        browser.wait(expcond.visibilityOf(passwordInput),30,"password locator not found");
        passwordInput.sendKeys(password);
    };

    // click on login button
    this.selectLogin = function () {
        browser.wait(expcond.visibilityOf(loginButton),30,"login Button locator not found");
        loginButton.click(); 
        browser.sleep(3000);
    };

    // check if the User is logged in
    this.redirectLoggedPage = function(urlAccountPage){
       browser.getCurrentUrl().then(function (url){
        expect(url).toEqual(urlAccountPage);
    });
  };
};

module.exports = LoginUser;