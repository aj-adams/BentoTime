import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Button from 'app/components/Button';

describe('Components', function() {
  describe('Button', function() {
    var shallowRenderer;
    var node;

    beforeEach(function() {
      node = document.createElement('div');
      shallowRenderer = TestUtils.createRenderer();
    });

    it('Should render a `button` tag with appropriate props', function renderButton() {
      shallowRenderer.render(
        <Button awesome="hello" />
       );
      const ButtonInstance = shallowRenderer.getRenderOutput();
      expect(ButtonInstance.type).to.equal('button');
      expect(ButtonInstance.props.awesome).to.equal('hello');
    });
  });
});