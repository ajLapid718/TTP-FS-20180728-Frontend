import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PortfolioView } from '../views';
import { fetchUserPortfolioThunk } from '../../thunks';

class PortfolioContainer extends Component {
  componentDidMount() {
    this.props.fetchUserPortfolio(this.props.currentUser.id);
  }

  render() {
    return <PortfolioView personalPortfolio={this.props.personalPortfolio} />;
  }
}

// Map state to props;
const mapState = state => {
  return {
    currentUser: state.currentUser,
    personalPortfolio: state.personalPortfolio
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchUserPortfolio: (userId) => dispatch(fetchUserPortfolioThunk(userId))
  }
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(PortfolioContainer);
