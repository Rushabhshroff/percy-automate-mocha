var assert = require('assert');
const { Builder, By, Capabilities, until } = require("selenium-webdriver");
const { percyScreenshot } = require('@percy/selenium-webdriver');
var buildDriver = function() {
  return new Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(Capabilities.chrome()).
    build();
};
const baseUrl = 'https://k8s.bsstag.com/docs'
describe('Sample Percy Test', async function() {
  this.timeout(0);
  var driver;

  before(function() {
    driver = buildDriver();
  });

  it('Homepage Snapshot', async function () {
    await driver.get(baseUrl);
    await percyScreenshot(driver, 'BrowserStack Homepage');
  });

  after(async function() {
    await driver.quit();
  });
});
