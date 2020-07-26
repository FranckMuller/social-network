import { connect } from 'react-redux';
import { DialogsList } from './DialogsList';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
  };
};

export const DialogsListContainer = connect(mapStateToProps)(DialogsList);
