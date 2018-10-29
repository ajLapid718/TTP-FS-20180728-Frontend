import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchFormView } from '../views';
import getTickerPrice from '../../utilities/getTickerPrice';
import axios from 'axios';

class SearchFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      ticker: '',
      tickerPrice: '',
      selectedTicker: '',
      quantity: 1,
      total: '',
      requestType: 'BUY',
      restrictionMessage: null
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSearch = async evt => {
    evt.preventDefault();
    const response = await getTickerPrice(this.state.ticker);
    try {
      this.setState({tickerPrice: response.data, selectedTicker: this.state.ticker, total: response.data});
    }
    catch (err) {
      console.log(err);
      this.setState({ticker: '', tickerPrice: 'Please enter a valid ticker symbol!'});
    }
  };

  handleCalculate = evt => {
    evt.preventDefault();
    const total = this.state.tickerPrice * this.state.quantity;
    this.setState({total: total});
  }

  handlePurchase = evt => {
    evt.preventDefault();

    if (this.props.currentUser.balance < this.state.total) {
      this.setState({restrictionMessage: 'Insufficient funds'})
      return;
    }

    const transactionObj = {
      requestType: this.state.requestType,
      tickerSymbol: this.state.selectedTicker,
      amountOfShares: Number(this.state.quantity),
      pricePerShare: this.state.tickerPrice
    }

    axios
      .post('/api/transactions', transactionObj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <SearchFormView
        searchInfo={this.state}
        handleChange={this.handleChange}
        handleSearch={this.handleSearch}
        handleCalculate={this.handleCalculate}
        handlePurchase={this.handlePurchase}
      />
    );
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentUser: state.currentUser
  }
}

// Export our store-connected component by default;
export default connect(mapState, null)(SearchFormContainer);
