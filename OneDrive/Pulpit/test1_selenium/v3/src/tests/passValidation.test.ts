import "chromedriver"
import { Builder, By } from "selenium-webdriver"
import {UserInfo} from './../UserInfo'
import testsFunctions from './testFunctions/allFunctions'
import assert from 'assert'

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
  it('passValidation', async function() {
    await testsFunctions.getUrl(driver)
    {
      const elements = await driver.findElements(By.id("Form1"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("emails"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("passwords"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("buttonRegister"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("buttonLogin"))
      assert(elements.length)
    }
    user[0].email="Aaa44@aa.aa"
    const incorrecPasswords:string[]=["aaa1","aaa1!a","aaa1!aa","@asd@A","Za1!","AAA!!@"]
    for(let i of incorrecPasswords){
      user[0].pass=i
      await testsFunctions.incorrectRegister(driver,user)
    }
    await driver.findElement(By.id("buttonLogin")).click()
    user[0].pass="zaaA1@"
    await testsFunctions.createUser(driver,user)
    user[0].pass="Pass1!"
    await testsFunctions.userAlreadyExist(driver,user)
    await driver.close()
  })
})
