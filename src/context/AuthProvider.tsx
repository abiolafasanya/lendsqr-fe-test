import React, { createContext, useEffect, useState } from 'react';

export interface Auth {
  isLoggedIn?: boolean;
}

export interface AuthContextProps {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
  handleSetAuth: (auth: Auth) => Auth;
  handleLogout: () => void;
  children?: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [auth, setAuth] = useState<Auth>({ isLoggedIn: false });

  useEffect(() => {
    setAuth((prev) => {
      const auth = localStorage.getItem('auth');
      if (auth) return JSON.parse(auth);
      return prev;
    });
  }, []);

  const handleSetAuth = (auth: Auth) => {
    localStorage.setItem('auth', JSON.stringify(auth));
    setAuth(auth);
    return auth;
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setAuth({ isLoggedIn: false });
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, handleSetAuth, handleLogout, children }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
