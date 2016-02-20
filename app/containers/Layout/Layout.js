import React, { Component, PropTypes } from 'react';
import { isEmpty, cloneDeep, find } from 'lodash';
import { connect } from 'react-redux';
import { Observable } from 'rx';

import { fetchLibrary, fetchBook, fetchChapter, setUpdated } from 'app/data/actions';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  // Make sure we update our library on load
  componentWillMount() {
    this.updateLibrary(this.props).subscribe();
  }

  // Also update our library whenever our location changes
  componentWillReceiveProps(nextProps) {
    const currentLocation = this.props.location.pathname;
    const nextLocation = nextProps.location.pathname;
    if(currentLocation !== nextLocation) {
      this.updateLibrary(nextProps.params).subscribe();
    }
  }

  updateLibrary(params) {
    const bookid = params.bookid || this.props.params.bookid;
    const chapterid = params.chapterid || this.props.params.chapterid;

    return this.updateBooks(this.props)
      .flatMap( () => this.updateBook(this.props, bookid))
      .flatMap( () => this.updateChapter(this.props, bookid, chapterid));
  }

  updateBooks(state) {
    const { dispatch, library } = state;
    if(isEmpty(library.books)) {
      return dispatch(fetchLibrary());
    } else {
      return Observable.just(this.props);
    }
  }

  updateBook(state, bookid) {
    if(!state || !state.library || !state.library.books || !bookid) {
      return Observable.just(state);
    }

    const { dispatch } = this.props;
    const book = find(state.library.books, { id: bookid });
    const bookNeedsUpdate = !book.lastUpdated;
    if(!bookNeedsUpdate) {
      return Observable.just(state);
    }
    return dispatch(fetchBook(book));
  }

  updateChapter(state, bookid, chapterid) {
    const improperState = !state || !state.library || !state.library.books;
    const missingId = !bookid || !chapterid;
    if(improperState || missingId) {
      return Observable.just(state);
    }

    const { dispatch } = this.props;
    const book = find(state.library.books, { id: bookid });
    const chapter = find(book.chapters, { id: chapterid });
    const chapterNeedsUpdate = chapter && !chapter.lastUpdated;
    if(!chapterNeedsUpdate) {
      return Observable.just(state);
    }
    return dispatch(fetchChapter(book, chapter));
  }

  render() {
    const { library, user, params } = this.props;
    const book = library.books[params.bookid];
    const chapter = find(book && book.chapters, { id: params.chapterid });
    const page = (book && chapter && params.pageid) ? chapter[params.pageid] : undefined;
    return (
      <div className="layout">
        <h1 className="layout__title">Bentotime</h1>
        {React.cloneElement(this.props.children, { library, user, book, chapter, page })}
      </div>
    );
  }
}

function select(state) {
  return {
    library: cloneDeep(state.library),
    user: cloneDeep(state.user),
    routing: cloneDeep(state.routing)
  };
}

export default connect(select)(Layout);
