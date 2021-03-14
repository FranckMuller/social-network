import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserPostDataInfo, selectProfilePosts } from '../../../redux/profile/selectors'
import Posts from './Posts'

const PostsContainer = () => {
  const { fullname, photo } = useSelector(selectUserPostDataInfo)
  const posts = useSelector(selectProfilePosts)
  const author = {
    fullname,
    photo,
  }
  return <Posts author={author} posts={posts} />
}

export default PostsContainer
