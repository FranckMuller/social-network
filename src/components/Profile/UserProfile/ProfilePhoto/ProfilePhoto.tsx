import React, { useState } from 'react';
import ProfilePhotoDropZone from './ProfilePhotoDropZone';

import avatar from './user-avatar.png';
import styles from './ProfilePhoto.module.scss';
import { CloudUploadOutlined, RadiusUprightOutlined } from '@ant-design/icons';

type ProfilePhotoProps = {
  photo?: string;
  urlParamUserId?: string;
  authedUserId: string;
};

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ photo, urlParamUserId, authedUserId }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const onUpdatePhoto = () => {
    setIsEditMode(true);
  };

  const onClose = () => {
    setIsEditMode(false);
  };

  if (!photo && (urlParamUserId === authedUserId || !urlParamUserId)) {
    return <ProfilePhotoDropZone handlerAfterSave={onClose} />;
  }

  return (
    <div className={styles.photo}>
      <img src={photo ? photo : avatar} alt="avatar" />
      {photo && (urlParamUserId === authedUserId || !urlParamUserId) && (
        <div className={styles.photoControls}>
          <ul>
            <li onClick={onUpdatePhoto}>
              <CloudUploadOutlined />
              <span>Обновить фотографию</span>
            </li>
            <li>
              <RadiusUprightOutlined />
              <span>Изменить миниатюру</span>
            </li>
          </ul>
        </div>
      )}
      {isEditMode && (
        <div className={styles.updatePhotoModal}>
          <div className={styles.updatePhotoModalContent}>
            <button onClick={onClose} className={`${styles.closeBtn} btn-secondary`}>
              Отменить
            </button>
            <ProfilePhotoDropZone handlerAfterSave={onClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
