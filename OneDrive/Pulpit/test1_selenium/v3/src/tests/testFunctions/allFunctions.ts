import "chromedriver"
import clearEmail from "./clearEmail"
import clearPass from "./clearPass"
import correctLogin from "./correctLogin"
import emailInfo from "./emailInfo"
import createUser from "./createUser"
import incorrectRegister from "./incorrectRegister"
import incorrectLogin from "./incorrectLogin"
import emailNotExist from "./emailNotExist"
import userAlreadyExist from "./userAlreadyExist"
import getUrl from "./getUrl"

const testFunctions = {
  clearEmail,
  clearPass,
  correctLogin,
  emailInfo,
  createUser,
  incorrectRegister,
  incorrectLogin,
  emailNotExist,
  userAlreadyExist,
  getUrl

}

export default testFunctions
