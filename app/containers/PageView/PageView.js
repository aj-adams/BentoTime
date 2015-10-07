import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class PageView extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {
    return <h1>Page View</h1>;
  }
}

function select(state) {}

export default PageView;
