import React from 'react';
import { map } from 'lodash';

import Img from 'app/components/Img';
import { Link } from 'react-router';

const ChapterView = function ChapterView({ chapter, book }) {
  if( !book || !chapter ) { return <div className="chapter-view">loading...</div>; }

  var pages = 'No pages!';
  if(chapter.pages) {
    pages = map(chapter.pages.reverse(), function pageToComponent(page) {
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
      <Link to={'/book/' + book.id} className="chapter-view__back">Back</Link>
      <ul className="chapter-view__pages">{pages}</ul>
    </div>
  );
};

ChapterView.defaultProps = {
  chapter: {}
};

export default ChapterView;
