import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, setCurrentPage } from '../../redux/users/actions'
import Users from './Users'
import Pagination from '../Pagination/Pagination'
import { selectUsersState } from '../../redux/users/selectors'

import styles from './Users.module.scss'

const UsersContainer: React.FC = () => {
  const {
    pageSize,
    currentPage,
    totalUsersCount,
    isFetching,
    users,
    followingProcessUsers,
  } = useSelector(selectUsersState)
  const dispatch = useDispatch()

  const changePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  useEffect(() => {
    dispatch(fetchUsers(currentPage, pageSize))
  }, [dispatch, pageSize, currentPage])

  return (
    <div className={styles.usersContainer}>
      <Pagination
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        currentPage={currentPage}
        onChangePage={changePage}
      />
      <Users isFetching={isFetching} users={users} followingProcessUsers={followingProcessUsers} />
    </div>
  )
}

export default UsersContainer
