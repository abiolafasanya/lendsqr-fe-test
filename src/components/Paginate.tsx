import React, { useState } from 'react';
import styles from './styles/paginate.module.scss';
import {prevArror, nextArror} from '../utils/images'

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  setItemsPerPage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  setItemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [pagesToShow] = useState(10);

  const getStartPage = () => {
    if (currentPage <= Math.floor(pagesToShow / 2)) {
      return 1;
    }
    if (currentPage + Math.floor(pagesToShow / 2) >= totalPages) {
      return totalPages - pagesToShow + 1;
    }
    return currentPage - Math.floor(pagesToShow / 2);
  };

  const startPage = getStartPage();
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const pages = Array.from(Array(endPage - startPage + 1).keys()).map(
    (i) => startPage + i
  );

  function itemPerPageHanler(val: React.ChangeEvent<HTMLSelectElement>) {
    const itemPerPage = parseInt(val.target.value)
    setItemsPerPage(itemPerPage)
    return itemPerPage
  }

  function prevPageHandler() {
    if(currentPage !== 1) return onPageChange(currentPage - 1)
  }


  function nextPageHandler() {
    if(currentPage < totalPages) return onPageChange(currentPage + 1)
  }

  return (
    <div className={styles.Paginate}>
      <div className={styles.info}>
        <span>Showing</span>
        <select
          name="page"
          id="page"
          defaultValue={itemsPerPage}
          onChange={itemPerPageHanler}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>{`out of ${totalItems}`}</span>
      </div>

      <ul className={styles.links}>
        <li>
          <a onClick={prevPageHandler}><img src={prevArror}  alt='prevbtn' /></a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? styles.current : styles.regular}
            onClick={() => onPageChange(page)}
          >
            <a>{page}</a>
          </li>
        ))}
        <li>
          <a onClick={nextPageHandler}>
            <img src={nextArror} alt="nextbtn" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
