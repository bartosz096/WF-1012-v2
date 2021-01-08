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
  it('loginIncorrect', async function() {
    await testsFunctions.getUrl(driver)
    user[0].email="User_1@miten.pl"
    user[0].pass="zaq"
    await driver.findElement(By.id("emails")).click()
    await testsFunctions.incorrectLogin(driver,user)
    user[0].pass="zaq1"
    await testsFunctions.incorrectLogin(driver,user)
    user[0].pass="Pass1"
    await testsFunctions.incorrectLogin(driver,user)
    user[0].email="User_1@miten.pv"
    await driver.findElement(By.id("buttonLogin")).click()
    user[0].pass="Pass1!"
    await testsFunctions.emailNotExist(driver,user)
    user[0].email="User_1@miten.pl"
    await testsFunctions.correctLogin(driver,user)
    await driver.close()
  })
})
