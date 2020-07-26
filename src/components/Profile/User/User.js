import React from 'react';
import moment from 'moment';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';

import styles from './User.module.scss';

import avatar from './user-avatar.png';

const User = ({ profile }) => {
  const now = moment(new Date());
  const profileLastActivity = moment(profile.lastActivity);

  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img src={profile.photo ? profile.photo : avatar} alt="avatar" />
      </div>

      <div className={styles.userData}>
        <div className={styles.userDataTop}>
          <div className={styles.name}>
            {profile.name} {profile.surname}
          </div>
          <div className={styles.lastActivity}>
            {now.diff(profileLastActivity, 'minute') > 5
              ? moment(profile.lastActivity).fromNow()
              : 'online'}
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

export default User;
