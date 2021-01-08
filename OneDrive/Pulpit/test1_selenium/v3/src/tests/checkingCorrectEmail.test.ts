import "chromedriver"
import { Builder } from "selenium-webdriver"
import testsFunctions from './testFunctions/allFunctions'
import {UserInfo} from './../UserInfo'

describe('Test1', function() {
  jest.setTimeout(100000)
  let driver:any
  let user:UserInfo[]=[{email:"", pass:"", id:0}]
  beforeEach(async function() {
    let chrome:any = require('selenium-webdriver/chrome')
    driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build()
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('checkingCorrectEmail', async function() {
    await testsFunctions.getUrl(driver)
    user[0].email = "User_1@miten.pl"
    user[0].pass="Pass1!"
    await testsFunctions.correctLogin(driver,user)
    await testsFunctions.emailInfo(driver,user)
    await driver.close()
  })
})
