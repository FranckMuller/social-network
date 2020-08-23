import { ADD_NEW_MESSAGE, CHANGE_NEW_MESSAGE_TEXT } from './constants';

type Dialog = {
  name: string;
  id: number;
};

type Message = {
  message: string;
  id: number;
};

export type DialogsState = {
  dialogs: [] | Array<Dialog>;
  messages: [] | Array<Message>;
  newMessageText: string;
};

type ChangeNewMessageText = {
  type: typeof CHANGE_NEW_MESSAGE_TEXT;
  payload: {
    value: string;
  };
};

type AddNewMessage = {
  type: typeof ADD_NEW_MESSAGE;
};

export type DialogsActions = ChangeNewMessageText | AddNewMessage;
