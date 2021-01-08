import { UserInfo } from './../UserInfo'
import alerts from './../Alerts'
import serverActions from './../server/serverActions'

export function checkUser1(user:UserInfo[], users:UserInfo[], errors:{email:string, pass:string})  {   //sprawdza czy user(rmsil) juz istnieje, true jesli nie istnieje, do rejestracji
  const email=user[0].email;
  if (errors.email !== undefined || errors.pass !== undefined){
    return 'FormikValidationError';
  }
  console.log(user);
  console.log(users);

  const userCheck=users.filter(p => p.email === email);
  if (userCheck.length >= 1) {
      return 'UserAlreadyExist';
  } else{
    return 'UserCreated';
  }
}

function checkUser(user:UserInfo[], users:UserInfo[], errors:{email:string, pass:string}){
  if(user[0].email.length===0 || user[0].pass.length===0){
    return false;
  }
  switch(checkUser1(user,users,errors)){
      case "UserAlreadyExist":
        alerts('UserAlreadyExist');
        return false;
      case "UserCreated":
        alerts('UserCreated');
        serverActions.postUser(user);
        return true;
      default:
        return false;
  }
}


export default checkUser
