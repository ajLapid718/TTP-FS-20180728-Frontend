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
      requestType: 'BUY'
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
      this.setState({ticker: "", tickerPrice: "Please enter a valid ticker symbol!"});
    }
  };

  handleCalculate = evt => {
    evt.preventDefault();
    const total = this.state.tickerPrice * this.state.quantity;
    this.setState({total: total});
  }

  handlePurchase = evt => {
    evt.preventDefault();
    // this is where we'll handle the logic for buying as many whole stocks as our balance permits;
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

// Export our store-connected component by default;
export default connect()(SearchFormContainer);
