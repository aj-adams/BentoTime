import React from 'react';

import BookList from 'app/components/BookList';

const LibraryView = function LibraryView({ library }) {
  if(library.lastUpdated) {
    return (
      <div className="library-view">
        <BookList books={library.books} />
      </div>
    );
  }
  return <div>loading...</div>;
};

LibraryView.defaultProps = {
  library: {}
};

export default LibraryView;
