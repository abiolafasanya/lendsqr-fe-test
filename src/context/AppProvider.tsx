import React, { useState, createContext, useEffect } from 'react';

type AppContextType = {
    sidebar: boolean,
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const AppContext = createContext({} as AppContextType);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSidebar(false);
      } else {
        setSidebar(true);
      }
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

