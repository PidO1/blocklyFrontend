import { loginURL, registerURL } from "./config";

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
      email: 'pieter@bbd.co.za',
      password: 'password',
    }),
    method: 'POST'
  };
  return fetch(loginURL, params).then((r) => getUserFromRequest(r));
}

export const register = (username, password) => {
  const params = {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'Authorization': `Basic ${username}:${password}` 
    },
    method: 'POST'
  };
  fetch(registerURL, params);
}

export const getUserFromRequest = (res) => {
  res.text().then(function (json) {
    json = JSON.parse(json);
    console.debug(json);
    if (json != undefined && json.token != undefined)
      user.token = json.token;
  });
}

export const isUserSignedIn = () => {
  console.debug(user);
  return user.token != undefined
}