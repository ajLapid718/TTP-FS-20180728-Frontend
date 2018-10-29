import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransactionsView } from '../views';
import axios from 'axios';

class TransactionsContainer extends Component {
  constructor() {
    super();
    this.state = {
      userTransactions: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/users/1/transactions')
      .then(res => res.data)
      .then(userTransactions => this.setState({userTransactions}))
      .catch(err => console.log(err))
  }

  render() {
    return <TransactionsView userTransactions={this.state.userTransactions} />;
  }
}

// Export our store-connected container by default;
export default connect()(TransactionsContainer);
