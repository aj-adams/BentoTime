import React, { Component, PropTypes } from 'react';
import { isEmpty, cloneDeep } from 'lodash';
import { connect } from 'react-redux';

import { fetchLibrary } from 'app/data/actions';
import BookList from 'app/components/BookList';

class LibraryView extends Component {
  componentDidMount() {
    const { dispatch, library } = this.props;
    if(isEmpty(library.books)) {
      dispatch(fetchLibrary()).subscribe();
    }
  }

  render() {
    const { books } = this.props.library;
    if(!books || isEmpty(books) ) {
      return <h1>Loading</h1>;
    }
    return <BookList books={books} />;
  }
}

LibraryView.defaultProps = {
  library: {}
};

function select(state) {
  return { library: cloneDeep(state.library) };
}

export default connect(select)(LibraryView);
