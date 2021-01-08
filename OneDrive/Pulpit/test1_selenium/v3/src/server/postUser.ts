import {UserInfo} from './../UserInfo'

export {};
const axios = require('axios');

async function postUser(user:UserInfo[]) {
  let res1 = await axios.get('http://localhost:3000/users/');
  let params = {
        id: (res1.data.length+1),
        email: user[0].email,
        pass: user[0].pass
      }

  let res2 = await axios.post('http://localhost:3000/users/', params);
}

export default postUser
