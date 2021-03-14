import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'
import { fetchUserProfile } from '../../redux/profile/actions'
import { selectUserProfile } from '../../redux/profile/selectors'
import { selectAuthedUserId } from '../../redux/auth/selectors'
import Profile from './Profile'
import Preloader from '../Preloader/Preloader'
import { UserProfile } from '../../redux/profile/types'
import { RootState } from '../../redux/store'

type OwnProps = {
  urlParamUserId: string | undefined
}

type MapStateProps = {
  userProfile: UserProfile
  authedUserId: string | null
}

type ParamTypes = {
  userId: string | undefined
}

type MapDispatchProps = {
  fetchUserProfile: (userId: string) => void
}

type ProfileContainerProps = OwnProps & MapStateProps & MapDispatchProps

const ProfileContainer: React.FC<ProfileContainerProps> = (props) => {
  const [isFetchingProfile, setIsFetchingProfile] = useState(true)
  let { userId } = useParams<ParamTypes>()

  useEffect(() => {
    if (props.userProfile) {
      setIsFetchingProfile(false)
    }
  }, [props.userProfile])

  useEffect(() => {
    const id = userId ? userId : props.authedUserId
    if (id) {
      setIsFetchingProfile(true)
      props.fetchUserProfile(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <>
      {isFetchingProfile ? (
        <Preloader />
      ) : (
        <Profile
          authedUserId={props.authedUserId}
          urlParamUserId={props.urlParamUserId}
          {...props}
        />
      )}
    </>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    userProfile: selectUserProfile(state),
    authedUserId: selectAuthedUserId(state),
  }
}

const mapDispatchToProps = {
  fetchUserProfile,
}

export default compose(
  connect<MapStateProps, MapDispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ProfileContainer)
