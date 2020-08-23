import { CHANGE_NEW_POST_MESSAGE, ADD_POST, SET_USER_PROFILE, UPDATE_USER_PROFILE } from './constants';
import { ProfileState } from './types';
import photo from './../../avatar-mini.jpg';

const initialState: ProfileState = {
  posts: [
    {
      author: { name: 'Дмитрий Светлов', photo: photo },
      message: 'react - путь самруая',
      created: '21 янв в 14:51',
      id: 1,
    },
    {
      author: { name: 'Дмитрий Светлов', photo: photo },
      message: 'hello world',
      created: '21 янв в 14:51',
      id: 2,
    },
    {
      author: { name: 'Дмитрий Светлов', photo: photo },
      message: 'build awesome application',
      created: '21 янв в 14:51',
      id: 3,
    },
  ],
  userProfile: {
    status: '',
    photos: {
      large: '',
      small: '',
    },
  },
  newPostCurrentValue: '',
};

const profileReducer = (state = initialState, action: any): ProfileState => {
  switch (action.type) {
    case CHANGE_NEW_POST_MESSAGE:
      return {
        ...state,
        newPostCurrentValue: action.payload.value,
      };

    case ADD_POST:
      const newPost = {
        author: { name: 'Дмитрий Светлов', photo: photo },
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
        userProfile: action.payload.userProfile,
      };

    case UPDATE_USER_PROFILE: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload.userUpdates,
        },
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
