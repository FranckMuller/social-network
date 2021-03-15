import React from 'react'
import UserProfile, { UserProfileProps } from './UserProfile/UserProfile'
import PostsContainer from './Posts/PostsContainer'

type profileProps = UserProfileProps

const Profile: React.FC<profileProps> = ({ userProfile, urlParamUserId, authedUserId }) => {
  return (
    <div className="profile">
      <UserProfile authedUserId={authedUserId} urlParamUserId={urlParamUserId} userProfile={userProfile} />
      <PostsContainer />
    </div>
  )
}

export default Profile
