import {
  loginURL,
  registerURL
} from "./config";

import { navToPage } from "./router.js";

export let user = {
  token: String = undefined,
};

export let workspaces = {
  active: Number = undefined,
  spaces: [],
}

export const login = (username, password) => {
  const params = {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      // 'Authorization': `Basic ${username}:${password}`
    },
    body: JSON.stringify({
      email: username,
      password: password
    }),
    method: 'POST'
  };
  return fetch(loginURL, params).then((r) => getUserFromRequest(r));
}

export const register = (username, password) => {
  const params = {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      // 'Authorization': `Basic ${username}:${password}`    
    },
    body: JSON.stringify({
      email: username,
      password: password
    }),
    method: 'POST'
  };
  return fetch(registerURL, params).then((r) => getUserFromRequest(r));
}

export const getUserFromRequest = (res) => {
  res.text().then(function (json) {
    json = JSON.parse(json);
    console.debug(json);
    if (json != undefined && json.token != undefined) {
      document.cookie = `token=${json.token}`;
      navToPage();
      user.token = json.token; 
    } else {
      alert('Login Error')
    }
  });
}

export const getUserFromCookie = () => {
  let cookie;
  if (document.cookie)
    cookie = document.cookie.split('; ')
    .find(row => row.startsWith('token='))
    .split('=')[1];
  if (cookie != undefined) 
    user.token = cookie;

  console.log(user);
}

export const isUserSignedIn = () => {
  getUserFromCookie();
  console.debug(user);
  return user.token != undefined
}