import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProps, AuthProvider, Auth } from './context/AuthProvider';
import { AppProvider } from './context/AppProvider';

const auth: Auth = {}
const authProviderProps: AuthContextProps = {
  auth: {},
  setAuth: () => {},
  handleSetAuth: () => auth,
  handleLogout: () => {}
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider {...authProviderProps}>
        <AppProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
