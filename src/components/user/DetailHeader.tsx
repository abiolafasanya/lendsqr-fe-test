import React, { useState } from 'react';
import styles from '../styles/detailheader.module.scss';
import { avatar, star, starB } from '../../utils/images';
import { IUser } from '../../utils/types';
import { formatCurrency } from '../../utils/formatter';
import { Link } from 'react-router-dom';


const DetailHeader: React.FC<{ user: IUser }> = ({ user }) => {
  const tabs = [
    'General Details',
    'Documents',
    'Bank Details',
    'Loans',
    'Savings',
    'App and System',
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const pics = user?.profile?.avatar ? user.profile.avatar : avatar;
  return (
    <div className={styles.Head}>
      <div className={styles.top}>
        <div className={styles.item1}>
          <img src={pics} alt="avatar" width={128} />
          <div>
            <h3>{`${user.profile?.firstName} ${user.profile?.lastName}`}</h3>
            <p>{user.userName}</p>
          </div>
        </div>
        <div className={styles.border} />
        <div className={styles.item2}>
          <h3>User’s Tier</h3>
          <div className={styles.star}>
            <img src={starB} alt="avatar" width={24} />
            <img src={star} alt="avatar" width={24} />
            <img src={star} alt="avatar" width={24} />
          </div>
        </div>
        <div className={styles.border} />
        <div className={styles.item3}>
          <h3>{formatCurrency(parseInt(user.accountBalance))}</h3>
          <p>
            <span>{user.accountNumber}</span> /<span>{user.orgName}</span>
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        {tabs.map((tab, i) => (
          <Link
            key={i}
            to={``}
            onClick={() => handleTabClick(tab)}
            className={activeTab === tab ? styles.current : ''}
          >
            {tab}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailHeader;
