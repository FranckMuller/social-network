import React from 'react';

import styles from './DialogsList.module.scss';

export const DialogsList = ({ dialogs }) => {
  return (
    <div className={styles.dialogsList}>
      {dialogs.map((d) => {
        return (
          <div key={d.id} className={styles.dialogItem}>
            {d.name}
          </div>
        );
      })}
    </div>
  );
};
