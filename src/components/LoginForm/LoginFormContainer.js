import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { fetchSignin } from '../../redux/auth/actions';
import { requiredFiledCreator } from '../../utils/formValidators';

const LoginFormContainer = ({ fetchSignin, isAuthed, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (loginData) => {
    setIsLoading(true);
    fetchSignin(loginData);
  };

  console.log(props);

  let validators = [];
  validators.push(requiredFiledCreator('Заполните поле'));

  return (
    <>
      {isAuthed ? (
        <Redirect to="/profile" />
      ) : (
        <LoginForm
          onSubmit={submitForm}
          validators={validators}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

// class LoginFormContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: false,
//     };

//     this.submitForm = this.submitForm.bind(this);
//   }

//   submitForm(loginData) {
//     this.setState({
//       isLoading: true,
//     });

//     this.props.fetchSignin(loginData);
//   }

//   render() {
//     return (
//       <>
//         {this.props.isAuthed ? (
//           <Redirect to="/profile" />
//         ) : (
//           <LoginForm
//             requiredFiled={this.requiredFiled}
//             email={this.state.email}
//             password={this.state.password}
//             onSubmit={this.submitForm}
//           />
//         )}
//       </>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
  };
};

const mapDispatchToProps = {
  fetchSignin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
