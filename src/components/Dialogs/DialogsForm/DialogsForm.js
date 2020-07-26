import React from 'react';

import styles from './DialogsForm.module.scss';

export const DialogsForm = ({
  newMessageText,
  updateNewMessageText,
  addNewMessage,
}) => {
  const onClickBtn = () => {
    addNewMessage();
  };

  const onChangeTextareaValue = (e) => {
    updateNewMessageText(e.target.value);
  };

  return (
    <div className={styles.dialogsFrom}>
      <textarea
        onChange={onChangeTextareaValue}
        value={newMessageText}
        placeholder="Введите ваше сообщение"
      />
      <button onClick={onClickBtn} className="btn-primary">
        Отправить
      </button>
    </div>
  );
};
