import React from 'react'
import styles from './styles/infocard.module.scss'
import { activateUser, blacklisted, eyes } from '../utils/images'
import { Link } from 'react-router-dom'

const InfoCard: React.FC<{id: string}> = ({id}) => {
  return (
    <div className={styles.card}>
      <Link to={`/user/${id}`}>
        <div className={styles.info}>
          <img src={eyes} alt="view" />
          <span> View User</span>
        </div>
      </Link>
      <div className={styles.info}>
        <img src={blacklisted} alt="blacklist" />
        <span>Blacklist User</span>
      </div>
      <div className={styles.info}>
        <img src={activateUser} alt="activate" />
        <span>Activate User</span>
      </div>
    </div>
  );
}

export default InfoCard