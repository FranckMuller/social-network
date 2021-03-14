import React from 'react';

import styles from './PostForm.module.scss';

export const PostForm = ({
  newPostMessage,
  addPost,
  changeNewPostMessage,
}) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    addPost();
  };

  const onChangeTextareaValue = (e) => {
    const value = e.target.value;
    changeNewPostMessage(value);
  };

  return (
    <div className={styles.postForm}>
      <form onSubmit={onSubmitForm}>
        <textarea
          onChange={onChangeTextareaValue}
          value={newPostMessage}
          className={styles.formTextarea}
          type="text"
          placeholder="Что у Вас нового?"
        />
        <button className="btn-primary btn">Опубликовать</button>
      </form>
    </div>
  );
};
