import React from 'react';
import ProfileStatus from './ProfileStatus';
import { connect } from 'react-redux';
import { fetchUpdateUserProfile } from '../../../../redux/profile/actions';

class ProfileStatusContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      status: null,
      inputStatusValue: null,
    };

    this.activateEditMode = this.activateEditMode.bind(this);
    this.deactivateEditMode = this.deactivateEditMode.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    this.setState({
      status: this.props.status,
      inputStatusValue: this.props.status,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
        isEdit: false,
      });
    }
  }

  changeStatus(e) {
    this.setState({
      inputStatusValue: e.currentTarget.value,
    });
  }

  focusInput(e) {
    e.target.select();
  }

  activateEditMode() {
    this.setState({
      isEdit: true,
    });
  }

  deactivateEditMode(e) {
    this.setState({
      isEdit: false,
    });
  }

  updateStatus() {
    this.props.fetchUpdateUserProfile({ status: this.state.inputStatusValue });
  }

  render() {
    return (
      <ProfileStatus
        onChangeStatus={this.changeStatus}
        onActivateEditMode={this.activateEditMode}
        onDeactivateEditMode={this.deactivateEditMode}
        onFocusInput={this.focusInput}
        status={this.state.status}
        isEdit={this.state.isEdit}
        inputStatusValue={this.state.inputStatusValue}
        onUpdateStatus={this.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.profile.userProfile.status,
  };
};

const mapDispatchToProps = {
  fetchUpdateUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileStatusContainer);
