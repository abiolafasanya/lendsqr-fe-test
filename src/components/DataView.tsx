import React, { useState } from 'react';
import { IUser } from '../utils/types';
import Pagination from './Paginate';
import Table from './Table';
import styles from './styles/datatable.module.scss';

type TableProps = {
  tableHeader: Array<string>;
  tableData: IUser[];
};

const DataView = ({ tableHeader, tableData }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className={styles.Data}>
      <Table
        tableData={tableData}
        tableHeader={tableHeader}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalItems={tableData.length}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default DataView;
