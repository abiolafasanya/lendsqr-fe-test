import React, { createContext, useState } from "react";

export interface Auth {
  email?: string;
  isLoggedIn?: boolean;
}

export interface AuthContextProps {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
  handleSetAuth: (auth: Auth ) => Auth;
  handleLogout: () => void;
  children?: React.ReactNode; // specify children prop as having type React.ReactNode
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children}: AuthContextProps) => {
  const [auth, setAuth] = useState<Auth>({});

  const handleSetAuth = (auth: Auth ) => {
    setAuth(auth);
    return auth;
  };

  const handleLogout = () => {
    setAuth({});
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, handleSetAuth, handleLogout, children }} // pass children prop to value object
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
