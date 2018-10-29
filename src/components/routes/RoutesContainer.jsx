import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoutesView from './RoutesView';
import { me } from '../../thunks';

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return <RoutesView />
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loadUser: () => dispatch(me())
  }
}

export default connect(null, mapDispatch)(RoutesContainer);
