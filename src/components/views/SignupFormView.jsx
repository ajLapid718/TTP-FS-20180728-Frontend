import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignupFormView = props => {
  return (
    <div>
      Sign Up Here
      <form onSubmit={props.handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={props.signupFields.firstName}
          onChange={props.handleChange}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={props.signupFields.lastName}
          onChange={props.handleChange}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={props.signupFields.email}
          onChange={props.handleChange}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={props.signupFields.password}
          onChange={props.handleChange}
          required
        />
        <br />
        <button>Sign Up!</button>
      </form>
      <Link to="/login">Go To Log In</Link>
    </div>
  );
};

// Type check the data types of the incoming props;
SignupFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  signupFields: PropTypes.object.isRequired
}

export default SignupFormView;
