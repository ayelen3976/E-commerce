import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './Redux/Actions/auth';

function App() {

  if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }
  
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );

}

export default App;
