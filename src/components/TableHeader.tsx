import React, { useState } from 'react';
import Filter from './Filter';
import { filter } from '../utils/images';
import styles from './styles/tableheader.module.scss';

type headerType = {
  title: string;
};

const TableHeader = ({ title }: headerType) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <th className={styles.Header}>
      <span>{title}</span>
      <img
        src={filter}
        alt="filter"
        onClick={() => setShowFilter((filter) => !filter)}
      />
      {showFilter && <Filter />}
    </th>
  );
};

export default TableHeader;
