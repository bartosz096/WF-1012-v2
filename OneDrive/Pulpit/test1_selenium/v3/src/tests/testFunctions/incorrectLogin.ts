import "chromedriver"
import { By, } from "selenium-webdriver"
import {UserInfo} from './../../UserInfo'
import clearEmail from "./clearEmail"
import clearPass from "./clearPass"

async function incorrectLogin(driver:any, user:UserInfo[]) {
  clearPass(driver)
  clearEmail(driver)
  driver.findElement(By.id("emails")).sendKeys(user[0].email)
  driver.findElement(By.id("passwords")).sendKeys(user[0].pass)
  await driver.findElement(By.id("buttonLogin")).click()
}

export default incorrectLogin
