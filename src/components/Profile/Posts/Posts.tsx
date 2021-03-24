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

const Posts: React.FC<UserProfileProps> = ({ authedUserId, urlParamUserId }) => {
  const { fullname, photo } = useSelector(selectUserPostDataInfo)
  const posts = useSelector(selectProfilePosts)
  const dispatch = useDispatch()

  useEffect(() => {
    const userId = urlParamUserId ? urlParamUserId : authedUserId
    if (userId) {
      dispatch(fetchPosts(userId))
    }
  }, [urlParamUserId, authedUserId, dispatch])

  const postsDisplayed = [...posts].reverse()
  let isPostFormShowed = urlParamUserId === authedUserId || !urlParamUserId;
  console.log(isPostFormShowed)
  return (
    <div className={styles.posts}>
      {isPostFormShowed && <PostForm />}
      {postsDisplayed.map((post) => {
        return <Post key={post._id} fullname={fullname} photo={photo} post={post} />
      })}
    </div>
  )
}

export default memo(Posts)
