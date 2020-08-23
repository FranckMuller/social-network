import React from 'react';
import { connect } from 'react-redux';
import { followUser, unFollowUser } from '../../redux/users/actions';
import UserItem from './UserItem';
import { User } from '../../redux/users/types';

type OwnProps = {
  user: User;
  followingProcessUsers: Array<string>;
  key: string;
};

type MapDispatchProps = {
  followUser: (id: string) => void;
  unFollowUser: (id: string) => void;
};

type UserItemContainerProps = OwnProps & MapDispatchProps;

const UserItemContainer: React.FC<UserItemContainerProps> = ({
  user,
  followUser,
  unFollowUser,
  followingProcessUsers,
}) => {
  const onFollowUser = (userId: string) => {
    followUser(userId);
  };

  const onUnFollowUser = (userId: string) => {
    unFollowUser(userId);
  };

  let isFetchingFollowing = false;
  if (followingProcessUsers.some((id) => id === user._id)) isFetchingFollowing = true;

  return (
    <UserItem
      onFollowUser={onFollowUser}
      onUnFollowUser={onUnFollowUser}
      user={user}
      isFetchingFollowing={isFetchingFollowing}
    />
  );
};

const mapDispatchToProps = {
  followUser,
  unFollowUser,
};

export default connect<null, MapDispatchProps, OwnProps>(null, mapDispatchToProps)(UserItemContainer);
