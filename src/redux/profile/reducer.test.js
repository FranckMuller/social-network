import reducer from './reducer'
import { changeNewPostMessage } from './actions'

it('post message must match the passed value', () => {
  const state = {
    newPostMessage: '',
  };
  const action = changeNewPostMessage('new post message value')
  const newState = reducer(state, action)
  expect(newState.newPostMessage).toBe('new post message value')
})
