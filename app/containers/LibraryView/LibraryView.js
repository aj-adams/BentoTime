import React from 'react';

import BookList from 'app/components/BookList';

const LibraryView = function LibraryView({ library }) {
  if(library.lastUpdated) {
    return <BookList books={library.books} />;
  }
  return <div>Loading...</div>;
};

LibraryView.defaultProps = {
  library: {}
};

export default LibraryView;
