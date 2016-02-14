import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import BookListItem from 'app/components/BookListItem';

describe('Components', function() {
  describe('BookListItem', function() {
    var shallowRenderer;
    var node;
    var book;

    beforeEach(function() {
      node = document.createElement('div');
      shallowRenderer = TestUtils.createRenderer();
    });

    it('Should render an `li` tag with appropriate props', function renderBookListItem() {
      book = {
        id: "flappy-monkey",
        title: "Flappy Monkey Banana Attack"
      }

      shallowRenderer.render(
        <BookListItem key="key1" book={book} />
       );
      const BookListItemInstance = shallowRenderer.getRenderOutput();
      expect(BookListItemInstance.type).to.equal('li');
    });
  });
});