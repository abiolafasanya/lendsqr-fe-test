import React from 'react';
import styles from './styles/sidebar.module.scss';
import { menus } from '../utils/menuData';
import { NavLink, useNavigate } from 'react-router-dom';
import { signout } from '../utils/images';
import UseAuth from '../hooks/useAuth';

const Sidebar = () => {
  const { handleLogout } = UseAuth();
  const navigate = useNavigate();

  function handleSignout() {
    handleLogout();
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.Sidebar}>
      <menu>
        <li className={styles.organization}>
          <img src={menus.organization.icon} alt={menus.organization.name} />
          <span>{menus.organization.name}</span>
          <img src={menus.organization.icon2} alt={'caret icon'} />
        </li>

        <li className={styles.dashboard}>
          <img src={menus.dashboard.icon} alt={menus.dashboard.name} />
          <span>{menus.dashboard.name}</span>
        </li>

        <li className={styles.menuHeading}>{menus.customer.name}</li>

        {menus.customer.menu.map((item, id) => (
          <NavLink
            key={id}
            to={item.url}
            className={({ isActive }) =>
              isActive
                ? styles.active
                : location.pathname == '/dashboard' && id == 0
                ? styles.active
                : styles.nothing
            }
          >
            <li key={id} className={styles.item}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </li>
          </NavLink>
        ))}

        <li className={styles.menuHeading}>{menus.business.name}</li>

        {menus.business.menu.map((item, id) => (
          <NavLink
            key={id}
            to={item.url}
            className={({ isActive, isPending }) =>
              isPending
                ? styles.pending
                : isActive
                ? styles.active
                : styles.nothing
            }
          >
            <li key={id} className={styles.item}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </li>
          </NavLink>
        ))}

        <li className={styles.menuHeading}>{menus.settings.name}</li>

        {menus.settings.menu.map((item, id) => (
          <NavLink
            key={id}
            to={item.url}
            className={({ isActive, isPending }) =>
              isPending
                ? styles.pending
                : isActive
                ? styles.active
                : styles.nothing
            }
          >
            <li key={id} className={styles.item}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </li>
          </NavLink>
        ))}
        <div className={styles.border}></div>
        <li className={styles.signout} onClick={handleSignout}>
          <img src={signout} alt="signout" />
          <span>Logout</span>
        </li>

        <li className={styles.version}>v1.2.0</li>
      </menu>
    </div>
  );
};

export default Sidebar;
