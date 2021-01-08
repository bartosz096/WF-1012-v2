import {UserInfo} from './../UserInfo'

export {};
const axios = require('axios');

async function deleteUser(user:UserInfo[]) {
  let res = await axios.delete('http://localhost:3000/users/'+ user[0].id);
}
export default deleteUser
