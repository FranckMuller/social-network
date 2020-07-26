import React from 'react';
import { connect } from 'react-redux';
import { followUser, unFollowUser } from '../../redux/users/actions';
import UserItem from './UserItem';

const UserItemContainer = ({
  user,
  followUser,
  unFollowUser,
  followingProcessUsers,
}) => {
  const onFollowUser = (userId) => {
    followUser(userId);
  };

  const onUnFollowUser = (userId) => {
    unFollowUser(userId);
  };

  let isFetchingFollowing = false;
  if (followingProcessUsers.some((id) => id === user._id))
    isFetchingFollowing = true;

  return (
    <UserItem
      onFollowUser={onFollowUser}
      onUnFollowUser={onUnFollowUser}
      user={user}
      isFetchingFollowing={isFetchingFollowing}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    followingProcessUsers: state.users.followingProcessUsers,
  };
};

const mapDispatchToProps = {
  followUser,
  unFollowUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserItemContainer);
