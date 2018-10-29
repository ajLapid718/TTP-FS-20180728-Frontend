import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignupFormContainer, LoginFormContainer, SearchFormContainer, TransactionsContainer, PortfolioContainer } from '../containers';

const RoutesView = (props) => {
  return (
    <Switch>

      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />

      {props.isLoggedIn && (
        <Switch>
          <Route exact path="/search" component={SearchFormContainer} />
          <Route exact path="/transactions" component={TransactionsContainer} />
          <Route exact path="/portfolio" component={PortfolioContainer} />
        </Switch>
      )}

    </Switch>
  )
}

export default RoutesView;
