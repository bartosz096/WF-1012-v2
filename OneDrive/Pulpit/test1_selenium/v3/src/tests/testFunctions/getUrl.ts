import "chromedriver"

async function getUrl(driver:any) {
  await driver.get("http://localhost:3001/")
}

export default getUrl
