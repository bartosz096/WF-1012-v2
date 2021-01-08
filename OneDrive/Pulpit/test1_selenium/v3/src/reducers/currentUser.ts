import {UserInfo} from './../UserInfo'
import allFunctions from './../functions/allFunctions'
import serverActions from './../server/serverActions'

let user:UserInfo[];
let users1:UserInfo[];
async function test(){
users1 = await serverActions.getAllUsers();
}
test();

const currentUser = (state = {users:users1, user:user, loggedIn:false}, action:any) => {
  test().then(()=>{
    state.users=users1;
  });
   switch(action.type){
        case "LOG_IN":
        if(allFunctions.correctPass(action.name, state.users,action.errors)){
            return {
                ...state,
                user: action.name,
                loggedIn: true
            }
          }else{
            return {
              ...state,
            }
          }

        case "LOG_OUT":
            return {
                ...state,
                user: [{}],
                loggedIn: false
            }

        case "ADD_USER":
            if(allFunctions.checkUser(action.name,state.users,action.errors)){
              return {
                  ...state,
                  users: state.users.concat(action.name),
                  user: action.name,
                }
              }else{
                  return{
                    ...state,
                  }
                }
        default:
            return state
    }
}

export default currentUser;
