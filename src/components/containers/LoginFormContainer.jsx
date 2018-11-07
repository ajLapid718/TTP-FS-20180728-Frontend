import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginFormView } from '../views';
import { loginUserThunk } from '../../thunks';

class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
    this.props.history.push('/search')
  };

  render() {
    return (
      <LoginFormView
        loginFields={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// Type check the data types of the incoming props;
LoginFormContainer.propTypes = {
  loginUser: PropTypes.func.isRequired
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUserThunk(email, password))
  }
}

// Export our store-connected component by default;
export default connect(null, mapDispatch)(LoginFormContainer);
