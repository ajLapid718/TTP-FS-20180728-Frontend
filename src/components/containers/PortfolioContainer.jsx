import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PortfolioView } from '../views';

class PortfolioContainer extends Component {
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
