import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/users/actions';
import { Users } from './Users';
import { Pagination } from '../Pagination/Pagination';
import withMappedRouterProps from '../hoc/WithMappedRouterProps';

import styles from './Users.module.scss';

const UsersContainer = (props) => {
  const changePage = (page) => {
    props.fetchUsers(page, props.pageSize);
  };

  useEffect(() => {
    props.fetchUsers(props.currentPage, props.pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.usersContainer}>
      <Pagination
        pageSize={props.pageSize}
        totalItemsCount={props.totalUsersCount}
        currentPage={props.currentPage}
        onChangePage={changePage}
      />
      <Users
        authedUserId={props.uthedUserId}
        isFetching={props.isFetching}
        users={props.users}
        followingProcessUsers={props.followingProcessUsers}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    accessToken: state.auth.accessToken,
  };
};

const mapDispatchToProps = {
  fetchUsers,
};

export default compose(
  withMappedRouterProps(),
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
