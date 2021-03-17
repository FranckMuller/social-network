import React, { CSSProperties } from 'react';

type ButtonProps = {
  text: string;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  styles?: CSSProperties;
  classNames?: Array<string>;
};

const Button: React.FC<ButtonProps> = ({ text, onClickHandler, isDisabled, styles = undefined, classNames = null }) => {
  return (
    <button style={styles} disabled={isDisabled} className={`btn ${classNames}`} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;
