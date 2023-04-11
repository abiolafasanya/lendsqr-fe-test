import React from 'react';
import styles from './styles/sidebar.module.scss';
import { menus } from '../utils/menuData';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
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
      </menu>
    </div>
  );
};

export default Sidebar;
