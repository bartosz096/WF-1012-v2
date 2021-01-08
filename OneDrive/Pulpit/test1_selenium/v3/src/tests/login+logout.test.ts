import "chromedriver"
import { Builder, By } from "selenium-webdriver"
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
  it('login+logout', async function() {
    await testsFunctions.getUrl(driver)
    user[0].email="User_1@miten.pl"
    user[0].pass="Pass1!"
    await testsFunctions.correctLogin(driver,user)
    await testsFunctions.emailInfo(driver,user)
    await driver.findElement(By.id("buttonLogout")).click()
    user[0].email="Aaa33@aa.aa"
    user[0].pass="Zaq1!"
    await testsFunctions.createUser(driver,user)
    await testsFunctions.correctLogin(driver,user)
    await driver.findElement(By.id("buttonLogout")).click()
    await testsFunctions.correctLogin(driver,user)
    await testsFunctions.emailInfo(driver,user)
    await driver.close()
  })
})
