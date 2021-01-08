import {UserInfo} from './../UserInfo'
export {};
const axios = require('axios');

/*
var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);
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
}, {});*/

async function getAllUsers() {
  let res = await axios.get('http://localhost:3000/users/');
  let data:UserInfo[] = res.data;
  return data;
}


export default getAllUsers
