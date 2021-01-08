import "chromedriver"
import { By, Key } from "selenium-webdriver"

async function clearPass(driver:any) {   // nie wiem dlaczego w typescript funckja .clear() nie działa, w js dzialalo
   driver.findElement(By.id("passwords")).sendKeys(Key.CONTROL + 'a' + Key.DELETE)
  //await driver.findElement(By.id("passwords")).clear()
}
export default clearPass
