import React from 'react';
import { Post } from './Post/Post';
import { PostFormContainer } from './PostForm/PostFormContainer';

import styles from './Posts.module.scss';

export const Posts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      <PostFormContainer />
      {posts.map((p, idx) => {
        return (
          <Post
            key={idx}
            author={p.author}
            postMessage={p.message}
            created={p.created}
          />
        );
      })}
    </div>
  );
};
