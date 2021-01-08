import "chromedriver"
import { By } from "selenium-webdriver"
import {UserInfo} from './../../UserInfo'
import assert from 'assert'
import clearEmail from "./clearEmail"
import clearPass from "./clearPass"

async function userAlreadyExist(driver:any, user:UserInfo[]) {
  clearPass(driver)
  clearEmail(driver)
  driver.findElement(By.id("emails")).sendKeys(user[0].email)
  driver.findElement(By.id("passwords")).sendKeys(user[0].pass)
  await driver.findElement(By.id("buttonRegister")).click()
  assert(await driver.switchTo().alert().getText() == "uzytkownik juz istnieje")
  await driver.switchTo().alert().accept()
}

export default userAlreadyExist
