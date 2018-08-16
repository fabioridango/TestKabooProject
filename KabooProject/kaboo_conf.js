// kaboo_conf.js

var Jasmine2HtmlReporter = require ('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
    capabilities: {
        'browserName': 'chrome'
    },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['kaboo_test_suite_spec.js'],
   jasmineNodeOpts: {
   defaultTimeoutInterval: 2500000
   },
  onPrepare: function() {
    var width = 1600;
    var height = 1200;
    browser.driver.manage().window().setSize(width, height);
     jasmine.getEnv().addReporter(
       new Jasmine2HtmlReporter({
          savePath: './test/reports'
       })
    );
  }
}