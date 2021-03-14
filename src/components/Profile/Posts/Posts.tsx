import React from 'react'
import { Post } from './Post/Post'
import { Post as PostType } from '../../../redux/profile/types'
import { PostFormContainer } from './PostForm/PostFormContainer'

import styles from './Posts.module.scss'

type PostsProps = {
  author: {
    fullname: string
    photo: string
  }
  posts: Array<PostType>
}

const Posts: React.FC<PostsProps> = ({ author, posts }) => {
  return (
    <div className={styles.posts}>
      <PostFormContainer />
      {posts.map((post, idx) => {
        return (
          <Post
            key={idx}
            author={author}
            postMessage={post.message}
            created={post.created}
          />
        );
      })}
    </div>
  )
}

export default Posts
