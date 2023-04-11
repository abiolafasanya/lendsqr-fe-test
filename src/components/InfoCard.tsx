import React from 'react'
import styles from './styles/infocard.module.scss'
import { activateUser, blacklisted, eyes } from '../utils/images'

const InfoCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.info}>
            <img src={activateUser} alt="activate" />
            <span>View User</span>
        </div>
        <div className={styles.info}>
            <img src={blacklisted} alt="blacklist" />
            <span>Blacklist User</span>

        </div>
        <div className={styles.info}>
            <img src={eyes} alt="view" />
            <span>View User</span>
        </div>
    </div>
  )
}

export default InfoCard