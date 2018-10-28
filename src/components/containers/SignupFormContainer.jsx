import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SignupFormView } from '../views';
import { registerUserThunk } from '../../thunks';

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
    this.props.registerUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
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

// Type check the data types of the incoming props;
SignupFormContainer.propTypes = {
  registerUser: PropTypes.func.isRequired
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    registerUser: (firstName, lastName, email, password) => dispatch(registerUserThunk(firstName, lastName, email, password))
  }
}

// Export our store-connected component by default;
export default connect(null, mapDispatch)(SignupFormContainer);
