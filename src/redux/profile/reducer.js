import {
  CHANGE_NEW_POST_MESSAGE,
  ADD_POST,
  SET_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from './constants';
import avatar from './../../avatar-mini.jpg';

const initialState = {
  posts: [
    {
      author: { name: 'Дмитрий Светлов', avatar: avatar },
      message: 'react - путь самруая',
      created: '21 янв в 14:51',
      id: 1,
    },
    {
      author: { name: 'Дмитрий Светлов', avatar: avatar },
      message: 'hello world',
      created: '21 янв в 14:51',
      id: 2,
    },
    {
      author: { name: 'Дмитрий Светлов', avatar: avatar },
      message: 'build awesome application',
      created: '21 янв в 14:51',
      id: 3,
    },
  ],
  userProfile: null,
  newPostCurrentValue: '',
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_NEW_POST_MESSAGE:
      return {
        ...state,
        newPostCurrentValue: payload.value,
      };

    case ADD_POST:
      const newPost = {
        author: { name: 'Дмитрий Светлов', avatar: avatar },
        message: state.newPostCurrentValue,
        created: '21 янв в 14:51',
        id: state.posts[state.posts.length - 1].id + 1,
      };
      return {
        ...state,
        newPostCurrentValue: '',
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload.userProfile,
      };

    case UPDATE_USER_PROFILE: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...payload.userUpdates,
        },
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
