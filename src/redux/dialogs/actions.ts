import { CHANGE_NEW_MESSAGE_TEXT, ADD_NEW_MESSAGE } from './constants';
import { DialogsActions } from './types';

export const changeNewMessageText = (value: string): DialogsActions => {
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    payload: {
      value,
    },
  };
};

export const addNewMessage = (): DialogsActions => {
  return {
    type: ADD_NEW_MESSAGE,
  };
};
