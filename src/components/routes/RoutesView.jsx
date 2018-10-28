import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignupFormContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>
  )
}

export default RoutesView;
