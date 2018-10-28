import React from 'react';
import PropTypes from 'prop-types';

const LoginFormView = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={props.loginFields.email}
        onChange={props.handleChange}
        required
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={props.loginFields.password}
        onChange={props.handleChange}
        required
      />
      <br />
      <button>Log In!</button>
    </form>
  );
};

// Type check the data types of the incoming props;
LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loginFields: PropTypes.object.isRequired
}

export default LoginFormView;
