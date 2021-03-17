import React from 'react'
import moment from 'moment'
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import { UserProfile as userProfileType } from '../../../redux/profile/types'

import styles from './UserProfile.module.scss'

export type UserProfileProps = {
  authedUserId: string | null
  urlParamUserId: string | undefined
  userProfile: userProfileType
}

const UserProfile: React.FC<UserProfileProps> = ({ userProfile, urlParamUserId, authedUserId }) => {
  const now = moment(new Date())
  const profileLastActivity = moment(userProfile.lastActivity)

  return (
    <div className={styles.user}>
      <ProfilePhoto authedUserId={authedUserId} urlParamUserId={urlParamUserId} photo={userProfile.photos.large} />

      <div className={styles.userData}>
        <div className={styles.userDataTop}>
          <div className={styles.name}>
            {userProfile.name} {userProfile.surname}
          </div>
          <div className={styles.lastActivity}>
            {now.diff(profileLastActivity, 'minute') > 5 ? moment(userProfile.lastActivity).fromNow() : 'online'}
          </div>
          <ProfileStatusContainer urlParamUserId={urlParamUserId} status={userProfile.status} />
        </div>
        <div className={styles.mainInfo}>
          {userProfile.birthDate && (
            <div className={styles.birthDate}>
              День рождения: <span>{userProfile.birthDate}</span>
            </div>
          )}

          {userProfile.location && userProfile.location.city && (
            <div className={styles.city}>
              Город: <span>{userProfile.location.city}</span>
            </div>
          )}

          <div className={styles.btn}>
            &nbsp;<span>Показать подробную информацию</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
