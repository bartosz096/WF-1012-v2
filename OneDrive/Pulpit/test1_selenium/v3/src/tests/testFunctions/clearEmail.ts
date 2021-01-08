import "chromedriver"
import { By, Key } from "selenium-webdriver"

async function clearEmail(driver:any) {     // nie wiem dlaczego w typescript funckja .clear() nie działa, w js dzialalo
   driver.findElement(By.id("emails")).sendKeys(Key.CONTROL + 'a' + Key.DELETE)
  //await driver.findElement(By.id("emails")).clear()
}

export default clearEmail
