import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import NotFoundView from 'app/containers/NotFoundView';
import { forEach } from 'lodash';

describe('Containers', function() {
  describe('NotFoundView', function() {
    var shallowRenderer;
    var node;

    beforeEach(function() {
      node = document.createElement('div');
      shallowRenderer = TestUtils.createRenderer();
    });

    it('Should render a `h1`', function renderChapterView() {
      shallowRenderer.render(<NotFoundView />);
      const NotFoundViewInstance = shallowRenderer.getRenderOutput();
      expect(NotFoundViewInstance.type).to.equal('h1');
    });
  });
});
