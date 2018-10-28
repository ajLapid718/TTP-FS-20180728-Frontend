import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignupFormContainer, LoginFormContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
    </Switch>
  )
}

export default RoutesView;
