import React from 'react';
import styles from '../styles/detailtab.module.scss';
import { IUser } from '../../utils/types';

const Detail: React.FC<{ item: string; itemKey: any }> = ({
  item,
  itemKey,
}) => {
  console.log(item, itemKey);
  return (
    <div className={styles.col}>
      <h4>{itemKey}</h4>
      <h2>{item}</h2>
    </div>
  );
};

export default Detail;
