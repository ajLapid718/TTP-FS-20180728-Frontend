import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchFormView } from '../views';
import getTickerPrice from '../../utilities/getTickerPrice';
import isPositiveWholeNumber from '../../utilities/isPositiveWholeNumber';
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
    this.setState({ restrictionMessage: null });
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
    if (isPositiveWholeNumber(Number(this.state.quantity)) === false) {
      this.setState({restrictionMessage: 'You are only allowed to buy whole, not partial, stocks!'})
    }
    else {
      this.setState({restrictionMessage: null});
    }

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

    const updatedPortfolio = Object.assign({}, { stocks: [...this.props.personalPortfolio.stocks, transactionObj] })

    axios
      .put(`/api/users/${this.props.currentUser.id}/portfolio`, updatedPortfolio)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.props.history.push('/transactions');
  }

  render() {
    return (
      <SearchFormView
        searchInfo={this.state}
        handleChange={this.handleChange}
        handleSearch={this.handleSearch}
        handleCalculate={this.handleCalculate}
        handlePurchase={this.handlePurchase}
        isPositiveWholeNumber={isPositiveWholeNumber}
      />
    );
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentUser: state.currentUser,
    personalPortfolio: state.personalPortfolio
  }
}

// Export our store-connected component by default;
export default connect(mapState, null)(SearchFormContainer);
