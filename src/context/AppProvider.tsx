import React, { useState, createContext } from 'react';

type AppContextType = {
    sidebar: boolean,
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const AppContext = createContext({} as AppContextType);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <AppContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
