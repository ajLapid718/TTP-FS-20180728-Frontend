import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RoutesView from './RoutesView';
import { me } from '../../thunks';

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return <RoutesView currentUser={this.props.currentUser} />
  }
}

const mapState = state => {
  return {
    currentUser: state.currentUser
  }
}


// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loadUser: () => dispatch(me())
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));
