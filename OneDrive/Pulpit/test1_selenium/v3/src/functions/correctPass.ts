import { UserInfo } from './../UserInfo'
import alerts from './../Alerts'

function correctPass1(user:UserInfo[], users:UserInfo[], errors:{email:string, pass:string})  {
  const email=user[0].email;
  if (errors.email !== undefined || errors.pass !== undefined){
    return 'FormikValidationError';
  }
  const userCheck=users.filter(p => p.email === email);
  if (userCheck.length === 1){
    if(userCheck[0].email===user[0].email && userCheck[0].pass===user[0].pass){
      return 'CorrectLogin';
    }
    return 'WrongPassword';
  }
  return 'EmailNotExist';
}

function correctPass(user:UserInfo[], users:UserInfo[], errors:{email:string, pass:string})  {
  if(user[0].email.length===0 || user[0].pass.length===0){
    return false;
  }
  console.log(users);
  switch(correctPass1(user,users,errors)){
      case "CorrectLogin":
        alerts("CorrectLogin")
        return true;
      case "WrongPassword":
        alerts("WrongPassword")
        return false;
      case "EmailNotExist":
        alerts("EmailNotExist")
        return false;
      default:
      return false
    }
  }

export default correctPass;
