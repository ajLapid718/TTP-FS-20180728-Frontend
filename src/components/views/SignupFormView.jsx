import React from 'react';

const SignupFormView = props => {
  return (
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
  );
};

export default SignupFormView;
