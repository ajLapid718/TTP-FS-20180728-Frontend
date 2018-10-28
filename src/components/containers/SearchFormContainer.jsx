import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchFormView } from '../views';
import getTickerPrice from '../../utilities/getTickerPrice';

class SearchFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      ticker: '',
      tickerPrice: '',
      selectedTicker: '',
      quantity: 1,
      total: ''
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
    // this is where we'll handle the logic for buying as many whole stocks as our balance permits;
    // this is where we'll POST the purchase information to our database via a thunk;
  }

  render() {
    return (
      <SearchFormView
        searchInfo={this.state}
        handleChange={this.handleChange}
        handleSearch={this.handleSearch}
        handleCalculate={this.handleCalculate}
      />
    );
  }
}

// Export our store-connected component by default;
export default connect(null, null)(SearchFormContainer);
