import React, { Component, PropTypes } from 'react';
import { map, cloneDeep, isEmpty, findIndex } from 'lodash';
import { connect } from 'react-redux';

import { fetchChapter } from 'app/data/actions';
import Img from 'app/components/Img';
import { Link } from 'react-router';

class ChapterView extends Component {
  componentDidMount() {
    const { dispatch, book, chapter } = this.props;
    dispatch(fetchChapter(book, chapter)).subscribe();
  }

  render() {
    const { chapter, book } = this.props;
    var pages;
    if(chapter.pages) {
      pages = map(chapter.pages.reverse(), page => {
        return (
          <li className="chapter-view__page" key={page.id}>
            <Img src={page.image} className="chapter-view__page-image"/>
          </li>
        );
      });
    }
    return (
      <div className="chapter-view">
        <h1 className="chapter-view__title">{chapter.title}</h1>
        <Link to={'/' + book.id} className="chapter-view__back">Back</Link>
        <ul className="chapter-view__pages">{pages}</ul>
      </div>
    );
  }
}

ChapterView.defaultProps = {
  chapter: {}
};

function select(state) {
  const bookId = state.routing.location.pathname.split('/')[0];
  const chapterId = state.routing.location.pathname.split('/')[1];
  const chapters = state.library.books[bookId].chapters;
  const chapterIndex = findIndex(chapters, function(chapter) { return chapter.id === chapterId; });
  return {
    book: cloneDeep(state.library.books[bookId]),
    chapter: cloneDeep(chapters[chapterIndex])
  };
}

export default connect(select)(ChapterView);
