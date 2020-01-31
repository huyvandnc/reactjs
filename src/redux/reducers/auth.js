import { authConstants } from '../constants';

let token = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user && token ? { loading: false, loggedIn: true, user, token } : { loading: false, loggedIn: false, user: {}, token: '' };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGNUP_REQUEST:
      return {
        loading: true,
        loggedIn: false,
        user: {},
        token: ''
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        user: {},
        token: ""
      };
    case authConstants.SIGNIN_REQUEST:
      return {
        loading: true,
        loggedIn: false,
        user: {},
        token: ''
      };
    case authConstants.SIGNIN_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case authConstants.SIGNIN_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        user: {},
        token: ""
      };
    case authConstants.SIGNOUT:
      return {
        loading: false,
        loggedIn: false,
        user: {},
        token: ""
      };
    default:
      return state;
  }
}

export default auth;