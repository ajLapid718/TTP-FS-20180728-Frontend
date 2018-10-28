import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignupFormView } from '../views';
// import { signupThunk } from '../../thunks';

class SignupFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // this.props.signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
  };

  render() {
    return (
      <SignupFormView
        signupFields={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// Map dispatch to props;
// const mapDispatch = dispatch => {
//   return {
//     signup: (firstName, lastName, email, password) => dispatch(signupThunk(firstName, lastName, email, password))
//   }
// }

// Export our store-connected component by default;
export default connect()(SignupFormContainer);
