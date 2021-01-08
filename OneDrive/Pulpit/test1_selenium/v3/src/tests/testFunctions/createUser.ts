import "chromedriver"
import { By } from "selenium-webdriver"
import {UserInfo} from './../../UserInfo'
import assert from 'assert'
import clearEmail from "./clearEmail"
import clearPass from "./clearPass"
/*
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

let mock:any;

mock = new MockAdapter(axios);
mock.onGet('http://localhost:3000/users/').reply(200, {
  users: [
    {
      "id": 1,
      "email": "User_1@miten.pl",
      "pass": "Pass1!"
    },
    {
      "id": 2,
      "email": "User.2@miten.pl",
      "pass": "Pass2!"
    },
    {
      "id": 3,
      "email": "User-3@miten.pl",
      "pass": "Pass3!"
    }
  ]
}, {});
mock.onPost('http://localhost:3000/users/').reply(200, {}, {});*/
async function createUser(driver:any, user:UserInfo[]) {
  clearPass(driver)
  clearEmail(driver)
  driver.findElement(By.id("emails")).sendKeys(user[0].email)
  driver.findElement(By.id("passwords")).sendKeys(user[0].pass)
  await driver.findElement(By.id("buttonRegister")).click()
  assert(await driver.switchTo().alert().getText() == "stworzono uzytkownika")
  await driver.switchTo().alert().accept()
}

export default createUser
