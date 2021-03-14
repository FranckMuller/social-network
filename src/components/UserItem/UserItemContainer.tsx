import React from 'react'
import { useDispatch } from 'react-redux'
import { followUser, unFollowUser } from '../../redux/users/actions'
import UserItem from './UserItem'
import { User } from '../../redux/users/types'

type UserItemContainerProps = {
  user: User
  followingProcessUsers: Array<string>
}

const UserItemContainer: React.FC<UserItemContainerProps> = ({ user, followingProcessUsers }) => {
  const dispatch = useDispatch()

  const onFollowUser = (userId: string) => {
    dispatch(followUser(userId))
  }

  const onUnFollowUser = (userId: string) => {
    dispatch(unFollowUser(userId))
  }

  let isFetchingFollowing = false
  if (followingProcessUsers.some((id) => id === user._id)) isFetchingFollowing = true

  return (
    <UserItem
      onFollowUser={onFollowUser}
      onUnFollowUser={onUnFollowUser}
      user={user}
      isFetchingFollowing={isFetchingFollowing}
    />
  )
}

export default UserItemContainer
