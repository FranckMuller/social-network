import React from 'react'

import styles from './Pagination.module.scss'

type PaginationProps = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onChangePage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onChangePage,
}) => {
  let pages = []
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => {
        return (
          <span
            key={page}
            className={currentPage === page ? styles.activePage : undefined}
            onClick={() => onChangePage(page)}
          >
            {page}
          </span>
        )
      })}
    </div>
  )
}

export default Pagination
