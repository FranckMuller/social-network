import React, { memo } from 'react'
import UserProfile, { UserProfileProps } from './UserProfile/UserProfile'
import Posts from './Posts/Posts'

type profileProps = UserProfileProps

const Profile: React.FC<profileProps> = ({ userProfile, urlParamUserId, authedUserId }) => {
  return (
    <div className="profile">
      <UserProfile authedUserId={authedUserId} urlParamUserId={urlParamUserId} userProfile={userProfile} />
      <Posts authedUserId={authedUserId} urlParamUserId={urlParamUserId} />
    </div>
  )
}

export default memo(Profile)
