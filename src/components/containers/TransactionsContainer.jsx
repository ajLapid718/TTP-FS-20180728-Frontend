import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransactionsView } from '../views';

class TransactionsContainer extends Component {
  render() {
    return <TransactionsView userTransactions={this.props.userTransactions} />;
  }
}

// Map state to props;
const mapState = state => {
  return {
    userTransactions: state.userTransactions
  }
}

// Export our store-connected container by default;
export default connect(mapState, null)(TransactionsContainer);
