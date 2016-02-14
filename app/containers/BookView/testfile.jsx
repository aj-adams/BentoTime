import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import BookView from 'app/containers/BookView';

describe('Containers', function() {
  describe('BookView', function() {
    var shallowRenderer;
    var node;
    var book;

    beforeEach(function() {
      node = document.createElement('div');
      shallowRenderer = TestUtils.createRenderer();
    });

    it('Should render a `div` with correct child elements if given a book', function renderBookView() {
      book = {
        title: "The little engine that could",
        description: "A book about a train that tried so hard and finally succeeded"
      };

      shallowRenderer.render(<BookView book={book} />);
      const BookViewinstance = shallowRenderer.getRenderOutput();
      expect(BookViewinstance.type).to.equal('div');
    });

    it('Should render a ChapterList component, and pass it a book');
    it('Should render a Loading component if no book is passed in as a prop');
  });
});
