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

  const titles = {
    personal: 'personal information',
    eduWork: 'Education and Employment',
    social: 'social',
    guarantor: 'guarantor',
  };

  return (
    <div className={styles.Tab}>
      <DetailsRow title={titles.personal} data={personal} />
      <div className={styles.border} />
      <DetailsRow title={titles.eduWork} data={eduAndEmployment} />
      <div className={styles.border} />
      <DetailsRow title={titles.social} data={userSocials} />
        <div className={styles.border} />
      <DetailsRow title={titles.guarantor} data={userGuantor} />
    </div>
  );
};

export default DetailTab;
