import {LOGIN_SUCCESS, LOGIN_ERROR, SET_USERNAME, SET_PASSWORD} from './types'
export function login(userCredentials){
  if(userCredentials.username === 'Divye' && userCredentials.password === '123456'){
    return{
      type: LOGIN_SUCCESS,
    }
  }
  else {
    return {
      type: LOGIN_ERROR
    }
  }
}

export function setUsername(username){
  return {
    type: SET_USERNAME,
    text: username
  }
}

export function setPassword(password){
  return {
    type: SET_PASSWORD,
    text: password
  }
}
