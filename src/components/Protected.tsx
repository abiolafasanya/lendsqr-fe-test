import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';
import Sidebar from './Sidebar';
import Header from './Header';
import styles from './styles/protected.module.scss';
import useApp from '../hooks/useApp';


const Protected = () => {
  const { auth } = UseAuth();
  const location = useLocation();
  const { sidebar, setSidebar } = useApp();


  return (
    <>
      {auth?.isLoggedIn ? (
        <div className={styles.container}>
          <Header />
          <div className={styles.main}>
            <div className={sidebar ? styles.mobileSidebar : styles.desktop}>
              <Sidebar />
            </div>
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={'/login'} state={{ from: location.pathname }} replace />
      )}
    </>
  );
};

export default Protected