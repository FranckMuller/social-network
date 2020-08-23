import React from 'react';
import Preloader from '../Preloader/Preloader';
import UserItemContainer from '../UserItem/UserItemContainer';
import { User } from '../../redux/users/types';

import styles from './Users.module.scss';

type UsersProps = {
  users: Array<User>;
  isFetching: boolean;
  followingProcessUsers: Array<string>;
};

const Users: React.FC<UsersProps> = ({ users, isFetching, followingProcessUsers }) => {
  return (
    <div className={styles.users}>
      {isFetching ? (
        <Preloader />
      ) : (
        users.map((user) => (
          <UserItemContainer followingProcessUsers={followingProcessUsers} key={user._id} user={user} />
        ))
      )}
    </div>
  );
};

export default Users;
