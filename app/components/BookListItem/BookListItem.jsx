import React from 'react';
import { Link } from 'react-router';

const BookListItem = function({ key, book }) {
  return (
    <li key={key}>
      <Link to={"book/" + book.id}>{book.title}</Link>
    </li>
  );
};

BookListItem.propTypes = {
  book: React.PropTypes.object.isRequired
};

export default BookListItem;
