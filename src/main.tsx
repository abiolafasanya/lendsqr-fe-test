import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProps, AuthProvider, Auth } from './context/AuthProvider';

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
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
