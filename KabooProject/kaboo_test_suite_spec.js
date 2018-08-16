// kaboo_test_suite_spec.js

var signupFlow = require('./scenario1.js');
var LoginPage = require('./scenario2.js');

describe('Automated test suite:', function() {
  
    it('Check that the Kaboo signup is working properly', function() {
    
    var signupUser = new signupFlow();
    var urlHomePage = 'https://qatest.staging.kaboo.com/en';
    var urlRegisterAccountPage = "https://qatest.staging.kaboo.com/en/signup";

    signupUser.urlPageNavigation(urlHomePage);
    signupUser.selectCreateAccount();
    signupUser.redirectRegisterAccountPage(urlRegisterAccountPage);
    signupUser.setUserEmail('pippo@libero.it');
    signupUser.setUserName('jerodl');
    signupUser.setPassword('jerod79FA');
    signupUser.setPasswordRepeat('jerod79FA');
    signupUser.selectNotWishReceiveInformation();
    signupUser.selectNotWishReceiveInformationEmail();
    signupUser.selectNotWishReceiveInformationTextMessage();
    signupUser.selectNotWishReceiveInformationTelephone();
    signupUser.selectNotWishReceiveInformationDirectMail();
    signupUser.selectNotWishReceiveInformationDirectOnsideMarketing();
    signupUser.selectTermsConditions();
    signupUser.selectWishReceiveInformation();
    signupUser.selectPersonalData();
    signupUser.selectNextButton();
    signupUser.setFirstName('Tanya');
    signupUser.setSurname('Hurt');
    signupUser.setDay('21');
    signupUser.setMonth('08');
    signupUser.setYear('1979');
    signupUser.setGender();
    signupUser.setAddressInput('street 59');
    signupUser.setPostcodeInput('1005');
    signupUser.setCityInput('Stockholm');
    signupUser.setCountry();
    signupUser.checkCurrentCurrency('SVENSKA KRONOR');
    signupUser.checkCurrentPhonePrefix('+46');
    signupUser.setCurrency();
    signupUser.setPhonePrefix();
    signupUser.setPhoneNumber('7908797');
    signupUser.selectRegisterNowButton();
    signupUser.checkTextVerificationCode('ENTER VERIFICATION CODE');
  }); 

  it('Check that the Kaboo login is working properly', function() {

    var LoginUser = new LoginPage();
    var urlHomePage = 'https://qatest.staging.kaboo.com/en';
    var urlAccountPage = "https://qatest.staging.kaboo.com/en/lobby";
    
    LoginUser.urlPageNavigation(urlHomePage);
    LoginUser.setUserEmail('autouk');
    LoginUser.setPassword('Autotest1');
    LoginUser.selectLogin();
    LoginUser.redirectLoggedPage(urlAccountPage);
  });
});