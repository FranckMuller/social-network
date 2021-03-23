import React from 'react'
import moment from 'moment'
import defaultMiniature from '../../../../assets/images/user-miniature.svg'

import styles from './Post.module.scss'

export const Post = ({ fullname, photo, text, created }) => {
  return (
    <div className={styles.post}>
      <div className={styles.author}>
        <span className={styles.avatar}>
          <img src={photo ? photo : defaultMiniature} alt={fullname} />
        </span>
        <span className={styles.name}>{fullname}</span>
        <span className={styles.created}>{moment(created).format('LLL')}</span>
      </div>

      <div className={styles.postMessage}>{text}</div>
    </div>
  )
}
