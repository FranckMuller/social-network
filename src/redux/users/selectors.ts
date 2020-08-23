import { RootState } from '../store';
import { UsersState } from './types';

export const selectUsersState = (state: RootState): UsersState => {
  return state.users;
};
