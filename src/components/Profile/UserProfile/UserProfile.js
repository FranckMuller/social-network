import React from 'react';
import moment from 'moment';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

import styles from './User.module.scss';

const UserProfile = ({ profile, urlParamUserId, authedUserId }) => {
  const now = moment(new Date());
  const profileLastActivity = moment(profile.lastActivity);

  return (
    <div className={styles.user}>
      <ProfilePhoto authedUserId={authedUserId} urlParamUserId={urlParamUserId} photo={profile.photos.large} />

      <div className={styles.userData}>
        <div className={styles.userDataTop}>
          <div className={styles.name}>
            {profile.name} {profile.surname}
          </div>
          <div className={styles.lastActivity}>
            {now.diff(profileLastActivity, 'minute') > 5 ? moment(profile.lastActivity).fromNow() : 'online'}
          </div>
          <div className={styles.status}>
            <ProfileStatusContainer />
          </div>
        </div>
        <div className={styles.mainInfo}>
          {profile.birthDate && (
            <div className={styles.birthDate}>
              День рождения: <span>{profile.birthDate}</span>
            </div>
          )}

          {profile.location && profile.location.city && (
            <div className={styles.city}>
              Город: <span>{profile.location.city}</span>
            </div>
          )}

          <div className={styles.btn}>
            &nbsp;<span>Показать подробную информацию</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
