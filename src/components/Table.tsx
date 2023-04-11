import React, { useState } from 'react';
import { IUser } from '../utils/types';
import {
  formatDate,
  formatPhoneNumber,
  getStatuColor,
  userStatus,
} from '../utils/formatter';
import styles from './styles/table.module.scss';
import TableHeader from './TableHeader';
import Info from './Info';

type TableProps = {
  tableHeader: Array<string>;
  tableData: IUser[];
  currentPage: number;
  itemsPerPage: number;
};

const Table = ({
  tableHeader,
  tableData,
  currentPage,
  itemsPerPage,
}: TableProps) => {

  const slicedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr className={styles.tableHeader}>
            {tableHeader.map((header, id) => (
              <TableHeader key={id} title={header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {slicedData.map((data, id) => (
            <tr className={styles.tableData} key={id}>
              <td className={styles.ellipsis}>{data.orgName}</td>
              <td>{data.userName}</td>
              <td className={styles.ellipsis}>{data.email}</td>
              <td>{formatPhoneNumber(data.profile?.phoneNumber as string)}</td>
              <td>{formatDate(data.createdAt)}</td>
              <td className={styles.status}>
                <span
                  className={getStatuColor(
                    userStatus(data?.createdAt as string)
                  )}
                >
                  {userStatus(data?.createdAt as string)}
                </span>
                <Info />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
