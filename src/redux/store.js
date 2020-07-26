import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile/reducer';
import usersReducer from './users/reducer';
import dialogsReducer from './dialogs/reducer';
import authReducer, { initialState as authInitialState } from './auth/reducer';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer
});

const authState = window.localStorage.getItem('authState')
  ? {
      ...JSON.parse(window.localStorage.getItem('authState')),
      isAuthed: true,
    }
  : authInitialState;

export const store = createStore(
  reducers,
  {
    auth: authState,
  },
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
