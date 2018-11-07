import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginFormView = props => {
  return (
    <div>
      Login Here
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
      <Link to="/signup">Go To Sign Up</Link>
    </div>
  );
};

// Type check the data types of the incoming props;
LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loginFields: PropTypes.object.isRequired
}

export default LoginFormView;
