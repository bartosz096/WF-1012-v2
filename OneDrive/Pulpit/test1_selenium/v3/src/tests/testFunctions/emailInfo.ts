import "chromedriver"
import { By } from "selenium-webdriver"
import {UserInfo} from './../../UserInfo'
import assert from 'assert'

async function emailInfo(driver:any, user:UserInfo[]) {
  await driver.findElement(By.id("emailInfo")).click()
  assert(await driver.switchTo().alert().getText() == user[0].email)
  await driver.switchTo().alert().accept()
}

export default emailInfo
