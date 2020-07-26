import React from 'react';
import Button from '../../../Button/Button';

import styles from './ProfileStatus.module.scss';

const ProfileStatus = ({
  status,
  inputStatusValue,
  isEdit,
  onActivateEditMode,
  onDeactivateEditMode,
  onChangeStatus,
  onFocusInput,
  onUpdateStatus,
}) => {
  return (
    <>
      {!isEdit ? (
        <div className={styles.status} onClick={onActivateEditMode}>
          {status ? status : <span>добавить статус</span>}
        </div>
      ) : (
        <div className={styles.editPanel}>
          <div className={styles.inputWrap}>
            <input
              onFocus={onFocusInput}
              autoFocus={true}
              onChange={onChangeStatus}
              value={inputStatusValue}
              type="text"
            />
          </div>

          <div className="btn-group">
            <Button
              text="Сохранить"
              classNames="btn-primary"
              styles={{ fontWeight: 600, fontSize: '.8rem' }}
              onClickHandler={onUpdateStatus}
            />
            <Button
              text="Отменить"
              classNames="btn-secondary"
              styles={{ fontWeight: 600, fontSize: '.8rem' }}
              onClickHandler={onDeactivateEditMode}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
