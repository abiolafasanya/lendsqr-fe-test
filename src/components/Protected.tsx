import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';
import Sidebar from './Sidebar';
import Header from './Header';
import styles from './styles/protected.module.scss';

const Protected = () => {
  const { auth } = UseAuth();
  const location = useLocation();

  return (
    <>
      {auth?.isLoggedIn ? (
        <div className={styles.container}>
          <Header />
          <div className={styles.main}>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default Protected