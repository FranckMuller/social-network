import React from 'react';

import styles from './Post.module.scss';

export const Post = ({ author: { fullname, photo }, postMessage, created }) => {
  return (
    <div className={styles.post}>
      <div className={styles.author}>
        <span className={styles.avatar}>
          <img src={photo} alt={fullname} />
        </span>
        <span className={styles.name}>{fullname}</span>
        <span className={styles.created}>{created}</span>
      </div>

      <div className={styles.postMessage}>{postMessage}</div>
    </div>
  );
};
