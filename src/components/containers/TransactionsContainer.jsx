import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransactionsView } from '../views';
import { fetchUserTransactionsThunk } from '../../thunks';

class TransactionsContainer extends Component {
  componentDidMount() {
    this.props.fetchUserTransactions(this.props.currentUser.id);
  }

  render() {
    return <TransactionsView userTransactions={this.props.userTransactions} />;
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentUser: state.currentUser,
    userTransactions: state.userTransactions
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchUserTransactions: (userId) => dispatch(fetchUserTransactionsThunk(userId)),
  }
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(TransactionsContainer);
