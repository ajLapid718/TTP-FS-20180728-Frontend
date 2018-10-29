import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RoutesView from './RoutesView';
import { me, fetchUserTransactionsThunk, fetchUserPortfolioThunk } from '../../thunks';

class RoutesContainer extends Component {
  async componentDidMount() {
    await this.props.loadUser();
    await this.props.fetchUserTransactions(this.props.currentUser.id);
    await this.props.fetchUserPortfolio(this.props.currentUser.id);
  }

  render() {
    return <RoutesView isLoggedIn={this.props.isLoggedIn} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentUser: state.currentUser,
    isLoggedIn: !!state.currentUser.id
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loadUser: () => dispatch(me()),
    fetchUserTransactions: (userId) => dispatch(fetchUserTransactionsThunk(userId)),
    fetchUserPortfolio: (userId) => dispatch(fetchUserPortfolioThunk(userId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));
