import { connect } from 'react-redux';
import { PostForm } from './PostForm';
import {
  changeNewPostMessage,
  addPost,
} from '../../../../redux/profile/actions';

const mapStateToProps = (state) => {
  return {
    newPostMessage: state.profile.newPostMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPost());
    },
    changeNewPostMessage: (value) => {
      dispatch(changeNewPostMessage(value));
    },
  };
};

export const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
