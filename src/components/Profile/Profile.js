import React from 'react';
import User from './User/User';
import { PostsContainer } from './Posts/PostsContainer';

const Profile = ({ userProfile }) => {
  return (
    <div className="profile">
      <User profile={userProfile} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
