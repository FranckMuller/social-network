import React from 'react';
import UserProfileContainer from './UserProfile/UserProfileContainer';
import PostsContainer from './Posts/PostsContainer';

const Profile = ({ userProfile, urlParamUserId, authedUserId }) => {
  return (
    <div className="profile">
      <UserProfileContainer authedUserId={authedUserId} urlParamUserId={urlParamUserId} userProfile={userProfile} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
