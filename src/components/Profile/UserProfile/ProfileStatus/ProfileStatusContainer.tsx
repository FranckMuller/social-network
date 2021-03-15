import React, { useState, useEffect } from 'react'
import ProfileStatus from './ProfileStatus'
import { useDispatch } from 'react-redux'
import { fetchUserProfileUpdate } from '../../../../redux/profile/actions'

type ProfileStatusContainerProps = {
  status: string
  authedUserId: string | null
  urlParamUserId: string | undefined
}

const ProfileStatusContainer: React.FC<ProfileStatusContainerProps> = ({ status, ...rest }) => {
  const [isEditMode, setIseditmode] = useState(false)
  const [localStatus, setStatus] = useState('')
  const [inputStatusValue, setInputStatusValue] = useState('')
  const dispatch = useDispatch()

  const changeStatus = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setInputStatusValue(e.currentTarget.value)
  }

  const focusInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.currentTarget.select()
  }

  const activateEditMode = () => {
    setIseditmode(true)
  }

  const deactivateEditMode = () => {
    setIseditmode(false)
  }

  const updateStatus = () => {
    if (inputStatusValue !== null) {
      dispatch(fetchUserProfileUpdate({ status: inputStatusValue }))
      setIseditmode(false)
    }
  }

  useEffect(() => {
    if (status !== '') {
      setStatus(status)
      setInputStatusValue(status)
    }
  }, [status])

  return (
    <ProfileStatus
      onChangeStatus={changeStatus}
      onActivateEditMode={activateEditMode}
      onDeactivateEditMode={deactivateEditMode}
      onFocusInput={focusInput}
      status={localStatus}
      isEditMode={isEditMode}
      inputValue={inputStatusValue}
      onUpdateStatus={updateStatus}
      {...rest}
    />
  )
}

export default ProfileStatusContainer
