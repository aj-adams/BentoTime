import React, { Component, PropTypes } from 'react';
import { isEmpty, cloneDeep, find } from 'lodash';
import { connect } from 'react-redux';
import { Observable } from 'rx';

import { fetchLibrary, fetchBook, fetchChapter, setUpdated } from 'app/data/actions';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.updateLibrary(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const currentLocation = this.props.location.pathname;
    const nextLocation = nextProps.location.pathname;
    if(currentLocation !== nextLocation) {
      this.updateLibrary(nextProps.params);
    }
  }

  updateLibrary(params) {
    const { dispatch, library } = this.props;

    // Prefer to use the book and chapter id of our next location.
    // Will use our current location if we initialize on a book, chapter, or page view
    const bookid = params.bookid || this.props.params.bookid;
    const chapterid = params.chapterid || this.props.params.chapterid;

    if(isEmpty(library.books)) {
      dispatch(fetchLibrary())
        .flatMap( state => {
          const book = state.library.books[bookid];
          const bookNeedsUpdate = bookid && !book.lastUpdated;
          return bookNeedsUpdate ? this.updateBook(book) : Observable.empty();
        })
        .subscribe();
    } else {
      const book = library.books[bookid];
      if(book) {
        const bookNeedsUpdate = bookid && !book.lastUpdated;
        if(bookNeedsUpdate) { return this.updateBook(book).subscribe(); }

        const chapter = find(book.chapters, { id: chapterid });
        const chapterNeedsUpdate = chapter && !chapter.lastUpdated;
        if(chapterNeedsUpdate) { return dispatch(fetchChapter(book, chapter)).subscribe(); }
      }
      return library;
    }
  }

  updateBook(book) {
    const { dispatch, library, params } = this.props;
    const { bookid, chapterid } = params;

    return dispatch(fetchBook(book))
      .flatMap( state => {
        const book = state.book;
        const chapter = find(book && book.chapters, { id: params.chapterid });
        const chapterNeedsUpdate = chapter && !chapter.lastUpdated;
        return chapterNeedsUpdate ? dispatch(fetchChapter(book, chapter)) : Observable.empty();
      });
  }

  render() {
    const { library, user, params } = this.props;
    const book = library.books[params.bookid];
    const chapter = find(book && book.chapters, { id: params.chapterid });
    return (
      <div>
        Bentotime
        {React.cloneElement(this.props.children, { library, user, book, chapter })}
      </div>
    );
  }
}

function select(state) {
  return {
    library: cloneDeep(state.library),
    user: cloneDeep(state.user),
    routing: cloneDeep(state.user)
  };
}

export default connect(select)(Layout);
