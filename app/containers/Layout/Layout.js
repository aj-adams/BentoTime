import React, { Component, PropTypes } from 'react';

class Layout extends Component {
  render() {
    return (
      <div>
        Bentotime
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default Layout;
