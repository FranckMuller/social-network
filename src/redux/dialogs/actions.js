import { CHANGE_NEW_MESSAGE_TEXT, ADD_NEW_MESSAGE } from './constants';

export const changeNewMessageText = (value) => {
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    payload: {
      value,
    },
  };
};

export const addNewMessage = () => {
  return {
    type: ADD_NEW_MESSAGE,
  };
};
