import React from 'react';
import styles from '../styles/detailtab.module.scss';
import { IUser } from '../../utils/types';
import {
  personalInfo,
  educationAndEmployment,
  social,
  guarantor,
} from '../../utils/userHelper';
import DetailsRow from './DetailsRow';

const DetailTab: React.FC<{ user: IUser }> = ({ user }) => {
  const personal = personalInfo(user);
  const eduAndEmployment = educationAndEmployment(user);
  const userSocials = social(user);
  const userGuantor= guarantor(user);

  

  return (
    <div className={styles.Tab}>
      <DetailsRow title={'personal information'} data={personal} />
      <div className={styles.border} />
      <DetailsRow title={'Education and Employment'} data={eduAndEmployment} />
      <div className={styles.border} />
      <DetailsRow title={'social'} data={userSocials} />
      <DetailsRow title={'guarantor'} data={userGuantor} />
    </div>
  );
};

export default DetailTab;
