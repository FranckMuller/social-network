import React from 'react';

const Button = ({ text, onClickHandler, isDisabled, styles, classNames }) => {
  return (
    <button
      style={styles ? styles : null}
      disabled={isDisabled}
      className={`btn ${classNames}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
