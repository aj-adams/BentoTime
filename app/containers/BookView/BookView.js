import React, { Component, PropTypes } from 'react';
import { map, cloneDeep, isEmpty } from 'lodash';
import { connect } from 'react-redux';

import ChapterList from 'app/components/ChapterList';
import { fetchBook } from 'app/data/actions';
import { Link } from 'react-router';

class BookView extends Component {
  componentDidMount() {
    const { dispatch, book } = this.props;
    dispatch(fetchBook(book)).subscribe();
  }

  render() {
    const { book } = this.props;
    return (
      <div className="book-view">
        <h1 className="book-view__title">{book.title}</h1>
        <p className="book-view__description">{book.description}</p>
        <Link to="/" className="book-view__back">Back</Link>
        <ChapterList book={book} />
      </div>
    );
  }
}

BookView.defaultProps = {
  book: {}
};

function select(state) {
  const bookId = state.routing.location.pathname;
  return {
    book: cloneDeep(state.library.books[bookId])
  };
}

export default connect(select)(BookView);
