import React from 'react';

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

export default LoginFormView;
