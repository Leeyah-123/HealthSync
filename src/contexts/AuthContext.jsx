import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import CookiesService from '../services/Cookies.service';
import {
  HEALTHSYNC_AUTH_TOKEN_KEY,
  HEALTHSYNC_USER_KEY,
} from '../utils/constants/cookie.constants';

//? initial auth state
const initialAuthState = {
  isLoggedIn: false,
  user: null,
  login: () => null,
  logout: () => null,
  setUser: () => null,
};

//? declaration of auth context
export const AuthContext = createContext(initialAuthState);

export default function AuthContextContainer({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!CookiesService.getter(HEALTHSYNC_AUTH_TOKEN_KEY)
  ); //? isLoggedIn state
  const [user, setUser] = useState(CookiesService.getter(HEALTHSYNC_USER_KEY)); //? user state

  //? function to log a user out
  const logout = () => {
    CookiesService.remover(HEALTHSYNC_AUTH_TOKEN_KEY);
    CookiesService.remover(HEALTHSYNC_USER_KEY);
    setIsLoggedIn(false);
    setUser(null);
  };
  // ? function to set user to cookie and state
  const handleSetUser = (passedUser) => {
    let newUser = { ...user, ...passedUser };
    CookiesService.setter(HEALTHSYNC_USER_KEY, newUser);
    setUser(newUser);
  };

  //? function to log a user in
  const login = (userData) => {
    handleSetUser(userData);
    setIsLoggedIn(true);
  };

  //? declaring value that will be passed down the app through the AuthContext's provider.
  const authContextValue = {
    isLoggedIn,
    user,
    login,
    logout,
    setUser: handleSetUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextContainer.propTypes = {
  children: PropTypes.element,
};
