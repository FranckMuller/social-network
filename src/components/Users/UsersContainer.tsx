import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers, clearUsers } from '../../redux/users/actions';
import Users from './Users';
import { Pagination } from '../Pagination/Pagination';
import withMappedRouterProps from '../hoc/WithMappedRouterProps';
import { RootState } from '../../redux/store';
import { UsersState } from '../../redux/users/types';
import { selectUsersState } from '../../redux/users/selectors';
import { selectAuthedUserId, selectAccessToken } from '../../redux/auth/selectors';

import styles from './Users.module.scss';

type MapStateProps = UsersState & {
  accessToken: string | null;
  authedUserId: string | null;
};

type MapDispatchProps = {
  fetchUsers: (currentPage: number, pageSize: number) => void;
  clearUsers: () => void;
};

type UsersContainerProps = MapStateProps & MapDispatchProps;

const UsersContainer: React.FC<UsersContainerProps> = ({ pageSize, currentPage, fetchUsers, clearUsers, ...props }) => {
  const changePage = (page: number) => {
    fetchUsers(page, pageSize);
  };

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
    return function cleanUp() {
      clearUsers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className={styles.usersContainer}>
      <Pagination
        pageSize={pageSize}
        totalItemsCount={props.totalUsersCount}
        currentPage={currentPage}
        onChangePage={changePage}
      />
      <Users isFetching={props.isFetching} users={props.users} followingProcessUsers={props.followingProcessUsers} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    ...selectUsersState(state),
    authedUserId: selectAuthedUserId(state),
    accessToken: selectAccessToken(state),
  };
};

const mapDispatchToProps = {
  fetchUsers,
  clearUsers,
};

export default compose(
  withMappedRouterProps(),
  connect<MapStateProps, MapDispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
