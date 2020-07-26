import { profilePageReducer, dialogsPageReducer } from './reducers';
import avatar from './../avatar-mini.jpg';

export const store = {
  _callSubscriber() {},

  _state: {
    dialogsPage: {
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
    },

    profilePage: {
      posts: [
        {
          author: { name: 'Дмитрий Светлов', avatar: avatar },
          message: 'привет',
          created: '21 янв в 14:51',
          id: 1,
        },
        {
          author: { name: 'Дмитрий Светлов', avatar: avatar },
          message: 'привет, как ты ?',
          created: '21 янв в 14:51',
          id: 2,
        },
        {
          author: { name: 'Дмитрий Светлов', avatar: avatar },
          message: 'реакт на самом деле очень крутой',
          created: '21 янв в 14:51',
          id: 3,
        },
      ],
      postInputValue: '',
    },
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );

    this._callSubscriber();
  },

  subscribe(abserver) {
    this._callSubscriber = abserver;
  },
};
