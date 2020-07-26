import { connect } from 'react-redux';
import { Posts } from './Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
  };
};

export const PostsContainer = connect(mapStateToProps)(Posts);
