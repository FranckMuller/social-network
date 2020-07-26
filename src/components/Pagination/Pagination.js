import React from 'react';

import styles from './Pagination.module.scss';

export const Pagination = (props) => {
  let pages = [];
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => {
        return (
          <span
            key={page}
            className={
              props.currentPage === page ? styles.activePage : undefined
            }
            onClick={() => props.onChangePage(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};
