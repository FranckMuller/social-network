import { connect } from 'react-redux';
import { DialogsForm } from './DialogsForm';
import {
  changeNewMessageText,
  addNewMessage,
} from '../../../redux/dialogs/actions';

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (value) => {
      dispatch(changeNewMessageText(value));
    },
    addNewMessage: () => {
      dispatch(addNewMessage());
    },
  };
};

export const DialogsFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsForm);
