import "chromedriver"
import { Builder } from "selenium-webdriver"
import {UserInfo} from './../UserInfo'
import testsFunctions from './testFunctions/allFunctions'

describe('Test', function() {
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
  it('createUser+login', async function() {
    await testsFunctions.getUrl(driver)
    user[0].email="Aaa950@aa.aa"
    user[0].pass="Zaq1!"
    await testsFunctions.createUser(driver,user)
    await testsFunctions.correctLogin(driver,user)
    await driver.close()
  })
})
