import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile/reducer';
import usersReducer from './users/reducer';
import dialogsReducer from './dialogs/reducer';
import authReducer, { initialState as authInitialState } from './auth/reducer';
import { reducer as formReducer } from 'redux-form';

type RootReducer = typeof rootReducer;
export type RootState = ReturnType<RootReducer>;

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const authState = window.localStorage.getItem('authState')
  ? {
      ...JSON.parse(window.localStorage.getItem('authState') || '{}'),
      isAuthed: true,
    }
  : authInitialState;

export const store = createStore(
  rootReducer,
  {
    auth: authState,
  },
  compose(
    applyMiddleware(thunkMiddleware),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
