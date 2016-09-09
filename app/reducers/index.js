import {LOGIN_SUCCESS, SET_USERNAME, SET_PASSWORD} from '../actions/types'

let cloneObject = function(obj){
  return JSON.parse(JSON.stringify(obj))
}

let newState = {user:
                {
                 loggedIn: false,
                 username: '',
                 password: ''
               }
             };

//Check if the action returned is success, then return the new state.
//Otherwise return the old state
export default function(state, action) {
  switch (action.type) {
    case SET_USERNAME:
      console.log(action.text)
      newState = cloneObject(state);
      newState.user.username = action.text;
      return newState;
    case SET_PASSWORD:
      newState = cloneObject(state);
      newState.user.password = action.text;
      return newState;
    case LOGIN_SUCCESS:
      newState = cloneObject(state);
      newState.user.loggedIn = true;
      return newState;
    default:
      return state || newState
  }
};
