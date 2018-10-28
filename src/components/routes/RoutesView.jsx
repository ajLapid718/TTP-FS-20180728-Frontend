import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignupFormContainer, LoginFormContainer, SearchFormContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/search" component={SearchFormContainer} />
    </Switch>
  )
}

export default RoutesView;
