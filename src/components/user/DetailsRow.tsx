import React from 'react';
import styles from '../styles/detailtab.module.scss';
import Detail from './Detail';

type rowProps = {
  title: string;
  data: any;
};

const DetailsRow = ({ data, title }: rowProps) => {
  return (
    <section>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.row}>
        {data &&
          Object.keys(data).map((item, key) => (
            <Detail key={key} itemKey={item} item={data[item]} />
          ))}
      </div>
    </section>
  );
};

export default DetailsRow;
