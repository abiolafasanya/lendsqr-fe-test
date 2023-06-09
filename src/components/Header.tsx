import React from 'react';
import styles from './styles/header.module.scss';
import Group from '../assets/Group.svg';
import profile from '../assets/profile.svg';
import { FaBell, FaCaretDown, FaSearch } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import useApp from '../hooks/useApp';

const Header = () => {
  const { setSidebar } = useApp();
  return (
    <div className={styles.Header}>
      <div className={styles.group}>
        <div className={styles.logo}>
          <img src={Group} alt="logo" />
          <MdMenu
            className={styles.bars}
            onClick={() => setSidebar((b) => !b)}
          />
          {/* < className={styles.bars} /> */}
        </div>
        <div className={styles.searchArea}>
          <form>
            <input type="text" />
            <button>
              <FaSearch className={styles.fa} />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.menuArea}>
        <ul>
          <li className={styles.underline}>Doc</li>
          <li>
            <FaBell />
          </li>
          <li>
            <img src={profile} alt="" />
          </li>
          <li>
            Adedeji <FaCaretDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
