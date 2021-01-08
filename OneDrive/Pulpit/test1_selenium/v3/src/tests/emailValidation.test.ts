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
  it('emailValidation', async function() {
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
    const incorrectEmails:string[]=["Aaa","Aaa@aa","Aaa@aa.","Aaa@aa.22","Aaa@aa.22aa","Aaa@aa.2aa"]
    const correctEmails:string[]=["Aaa223@aa.aa","Aa%a@aa.aa","Aa%a@aa2.aa"]
    user[0].pass="Zaq1!"
    for(let i of incorrectEmails){
      user[0].email=i
      await testsFunctions.incorrectRegister(driver,user)
    }
    for(let i of correctEmails){
      user[0].email=i
      await testsFunctions.createUser(driver,user)
    }
    await driver.close()
  })
})
