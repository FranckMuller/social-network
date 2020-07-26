import React from 'react';

import styles from './Messages.module.scss';

export const Messages = ({ messages }) => {
  return (
    <div className={styles.messages}>
      {messages.map((m) => {
        return <div key={m.id}>{m.message}</div>;
      })}
    </div>
  );
};
