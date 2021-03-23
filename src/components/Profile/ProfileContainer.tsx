import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchUserProfile } from '../../redux/profile/actions'
import { selectProfileState } from '../../redux/profile/selectors'
import { selectAuthedUserId } from '../../redux/auth/selectors'
import Profile from './Profile'
import Preloader from '../Preloader/Preloader'

type ParamTypes = {
  userId: string | undefined
}

const ProfileContainer: React.FC = () => {
  const authedUserId = useSelector(selectAuthedUserId)
  const profile = useSelector(selectProfileState)
  const { userId } = useParams<ParamTypes>()
  const dispatch = useDispatch()

  useEffect(() => {
    const id = userId ? userId : authedUserId
    if (id) {
      dispatch(fetchUserProfile(id))
    }
  }, [userId, authedUserId, dispatch])


  return <div>{profile.isFetching ? <Preloader /> : <Profile authedUserId={authedUserId} urlParamUserId={userId} userProfile={profile.userProfile} />}</div>
}

export default ProfileContainer
