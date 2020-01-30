import { authConstants } from '../constants';

let token = JSON.parse(localStorage.getItem('token'));
let currentUsers = JSON.parse(localStorage.getItem('currentUsers'));
const initialState = currentUsers && token ? { loading: false, loggedIn: true, currentUsers, token } : { loading: false, loggingIn: false, currentUsers: {}, token: "" };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGNUP_REQUEST:
      return {
        loading: true,
        loggingIn: false,
        currentUsers: action.user,
        token: action.token
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        currentUsers: action.user,
        token: action.token
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        currentUsers: {},
        token: ""
      };
    case authConstants.SIGNIN_REQUEST:
      return {
        loading: true,
        loggingIn: false,
        currentUsers: action.user,
        token: action.token
      };
    case authConstants.SIGNIN_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        currentUsers: action.user,
        token: action.token
      };
    case authConstants.SIGNIN_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        currentUsers: {},
        token: ""
      };
    case authConstants.SIGNOUT:
      return {
        loading: false,
        loggedIn: false,
        currentUsers: {},
        token: ""
      };
    default:
      return state;
  }
}

export default auth;