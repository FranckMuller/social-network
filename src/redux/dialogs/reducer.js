import { ADD_NEW_MESSAGE, CHANGE_NEW_MESSAGE_TEXT } from './constants';

const initialState = {
  dialogs: [
    { name: 'Света', id: 1 },
    { name: 'Андрей', id: 2 },
    { name: 'Оля', id: 3 },
  ],
  messages: [
    { message: 'Привет', id: 1 },
    { message: 'Пойдем замутим искру любви в нашем холодном мире', id: 2 },
    { message: 'и будем танцевать под дождем', id: 3 },
    { message: 'а на закате мы с тобой в долину радости уйдем', id: 5 },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: payload.value,
      };

    case ADD_NEW_MESSAGE:
      const newMessage = {
        message: state.newMessageText,
        id: state.messages[state.messages.length - 1].id + 1,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };

    default:
      return state;
  }
};

export default dialogsReducer;
