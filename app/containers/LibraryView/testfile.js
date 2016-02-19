import React from 'react';
import { find } from 'lodash';
import TestUtils from 'react/lib/ReactTestUtils';
import LibraryView from 'app/containers/libraryView';

describe('Containers', function() {
  describe('LibraryView', function() {
    beforeEach(function() {
      this.library = {
        lastUpdated: 12345,
        books: {}
      };

      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<LibraryView library={this.library} />);
      this.component = shallowRenderer.getRenderOutput();
    });

    it('Should render a `div` with a class of `library-view`', function() {
      expect(this.component.type).to.equal('div');
      expect(this.component.props.className).to.equal('library-view');
    });

    it('Should render a BookList component, and pass it all of our books', function() {
      const bookList = this.component.props.children;
      expect(bookList.books).to.equal(this.books);
    });

    it('Should render a Loading component if it has never been updated', function() {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<LibraryView />);
      this.component = shallowRenderer.getRenderOutput();
      expect(this.component.props.children).to.equal('loading...');
    });
  });
});
