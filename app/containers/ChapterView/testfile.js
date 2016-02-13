import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ChapterView from 'app/containers/ChapterView';

describe('Containers', function() {
  describe('ChapterView', function() {
    var shallowRenderer;
    var node;
    var book;
    var chapter;

    beforeEach(function() {
      node = document.createElement('div');
      shallowRenderer = TestUtils.createRenderer();
    });

    it('Should render a `div` with correct child elements if given a chapter', function renderChapterView() {
      book = { id: '12345' };

      chapter = {
        title: 'Attack of the Mutant Bears from Neptune',
        chapters: [
          { image: 'theimage.src', id: '12355' }
        ]
      };

      shallowRenderer.render(<ChapterView chapter={chapter} book={book} />);
      const ChapterViewinstance = shallowRenderer.getRenderOutput();
      expect(ChapterViewinstance.type).to.equal('div');
    });

    it('Should render a PageList component, and pass it all of our chapters');
    it('Should render a Loading component if no book is passed in as a prop');
  });
});
