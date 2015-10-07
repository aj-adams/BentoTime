import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    return <h1>Settings View</h1>;
  }
}

function select(state) {}

export default connect(select)(Settings);
