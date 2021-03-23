import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../../redux/profile/actions'
import { selectUserPostDataInfo, selectProfilePosts } from '../../../redux/profile/selectors'
import { Post } from './Post/Post'
import { PostForm } from './PostForm/PostForm'

import styles from './Posts.module.scss'

export type UserProfileProps = {
  authedUserId: string | null
  urlParamUserId: string | undefined
}

const Posts: React.FC<UserProfileProps> = ({ authedUserId, urlParamUserId, ...props }) => {
  const { fullname, photo } = useSelector(selectUserPostDataInfo)
  const posts = useSelector(selectProfilePosts)
  const dispatch = useDispatch()

  useEffect(() => {
    const userId = urlParamUserId ? urlParamUserId : authedUserId
    if (userId) {
      dispatch(fetchPosts(userId))
    }
  }, [urlParamUserId, authedUserId, dispatch])

  return (
    <div className={styles.posts}>
      <PostForm />
      {posts.map((post, idx) => {
        return <Post key={idx} fullname={fullname} photo={photo} text={post.text} created={post.created} />
      })}
    </div>
  )
}

export default memo(Posts)
