import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER ,SET_USER_GOOGLE } from './actiontypes';

export function setCurrentUser(user) {

  return {
    type: SET_CURRENT_USER,
    payload : user.user
  };
}

export function setCurrentUserGoogle(user){
  return {
    type: SET_USER_GOOGLE,
    payload: user.user[0]
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.clear()
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/auth/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}

export function loginWithGoogle(data) {
  console.log(data)
  return dispatch => {
    return axios.post('/auth/login/google', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUserGoogle(jwtDecode(token)));
    });
  }
}
