import React from 'react';
import styles from './styles/card.module.scss';

type cardType = {
  data: any;
};

const Card = ({ data }: cardType) => {
  return (
    <div className={styles.card}>
      <img src={data.icon} alt="" />
      <h4>{data.textDescription}</h4>
      <h2>{data.number}</h2>
    </div>
  );
};

export default Card;
