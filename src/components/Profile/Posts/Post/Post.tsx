import React from 'react'
import moment from 'moment'
import defaultMiniature from '../../../../assets/images/user-miniature.svg'
import { fetchDeletePost } from '../../../../redux/profile/actions'
import { useDispatch } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'

import styles from './Post.module.scss'
import { Post as PostType } from '../../../../types'

type PostProps = {
  fullname: string
  photo: string
  post: PostType
}

export const Post: React.FC<PostProps> = ({ fullname, photo, post }) => {
  const dispatch = useDispatch()

  const onDeletePost = () => {
    dispatch(fetchDeletePost(post._id))
  }

  return (
    <div className={styles.post}>
      <div className={styles.author}>
        <span className={styles.avatar}>
          <img src={photo ? photo : defaultMiniature} alt={fullname} />
        </span>
        <span className={styles.name}>{fullname}</span>
        <span className={styles.created}>{moment(post.created).format('LLL')}</span>
      </div>
      <div className={styles.postMessage}>{post.text}</div>
      <div className={styles.controlsPanel}>
        <button className={styles.deletePostBtn} onClick={onDeletePost}>
          <DeleteOutlined className={styles.deletePostBtnIcon} />
        </button>
      </div>
    </div>
  )
}
