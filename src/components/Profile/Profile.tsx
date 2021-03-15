import React from 'react'
import UserProfile from './UserProfile/UserProfile'
import PostsContainer from './Posts/PostsContainer'
import { UserProfile as userProfileType } from '../../redux/profile/types'

type profileProps = {
  authedUserId: string | null
  urlParamUserId: string | undefined
  userProfile: userProfileType
}

const Profile: React.FC<profileProps> = ({ userProfile, urlParamUserId, authedUserId, ...rest }) => {
  return (
    <div className="profile">
      <UserProfile authedUserId={authedUserId} urlParamUserId={urlParamUserId} userProfile={userProfile} />
      <PostsContainer />
    </div>
  )
}

export default Profile
