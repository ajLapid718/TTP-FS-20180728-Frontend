import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PortfolioView } from '../views';

class PortfolioContainer extends Component {
  // If the pricePerShare (the original price we purchased the stock at) is greater than the current day's opening price, display the currentPrice as red;

  // If the pricePerShare (the original price we purchased the stock at) is less than the current day's opening price, display the currentPrice as green;

  // If the pricePerShare (the original price we purchased the stock at) is equal to the current day's opening price, display the currentPrice as grey;

  render() {
    return <PortfolioView personalPortfolio={this.props.personalPortfolio} />;
  }
}

// Map state to props;
const mapState = state => {
  return {
    personalPortfolio: state.personalPortfolio
  }
}

// Export our store-connected container by default;
export default connect(mapState, null)(PortfolioContainer);
