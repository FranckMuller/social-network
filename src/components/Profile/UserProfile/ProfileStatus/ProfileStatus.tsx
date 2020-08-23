import React from 'react';
import Button from '../../../Button/Button';

import styles from './ProfileStatus.module.scss';

type ProfileStatusProps = {
  status: string;
  inputValue: string;
  isEditMode: boolean;
  onActivateEditMode: () => void;
  onDeactivateEditMode: () => void;
  onChangeStatus: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onFocusInput: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onUpdateStatus: () => void;
};

const ProfileStatus: React.FC<ProfileStatusProps> = ({
  status,
  inputValue,
  isEditMode,
  onActivateEditMode,
  onDeactivateEditMode,
  onChangeStatus,
  onFocusInput,
  onUpdateStatus,
}) => {
  return (
    <>
      {!isEditMode ? (
        <div className={styles.status} onClick={onActivateEditMode}>
          {status ? status : <span>добавить статус</span>}
        </div>
      ) : (
        <div className={styles.editPanel}>
          <div className={styles.inputWrap}>
            <input onFocus={onFocusInput} autoFocus={true} onChange={onChangeStatus} value={inputValue} type="text" />
          </div>

          <div className="btn-group">
            <Button
              text="Сохранить"
              classNames={['btn-primary']}
              styles={{ fontWeight: 600, fontSize: '.9rem' }}
              onClickHandler={onUpdateStatus}
            />
            <Button
              text="Отменить"
              classNames={['btn-secondary']}
              styles={{ fontWeight: 600, fontSize: '.9rem' }}
              onClickHandler={onDeactivateEditMode}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
