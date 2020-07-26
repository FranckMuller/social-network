import React from 'react';
import Preloader from '../Preloader/Preloader';
import UserItemContainer from '../UserItem/UserItemContainer';

import styles from './Users.module.scss';

export const Users = ({ users, isFetching, followingProcessUsersg }) => {
  return (
    <div className={styles.users}>
      {isFetching ? (
        <Preloader />
      ) : (
        users.map((user) => <UserItemContainer key={user._id} user={user} />)
      )}
    </div>
  );
};
