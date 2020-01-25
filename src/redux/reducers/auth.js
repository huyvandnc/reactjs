import { authConstants } from '../constants';

let token = JSON.parse(localStorage.getItem('token'));
let currentUsers = JSON.parse(localStorage.getItem('currentUsers'));
const initialState = currentUsers && token ? { loggedIn: true, currentUsers, token } : {loggingIn: false, currentUsers: {}, token: ""};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        currentUsers: action.user,
        token: action.token
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        currentUsers: action.user,
        token: action.token
      };
    case authConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        currentUsers: {},
        token: ""
      };
    case authConstants.LOGOUT:
      return {
        loggedIn: false,
        currentUsers: {},
        token: ""
      };
    default:
      return state;
  }
}

export default auth;