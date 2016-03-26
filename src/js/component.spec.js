import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MyComponent from './component';

describe('MyComponent', function() {
    it('should render into the document', function () {
        var shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
          <MyComponent/>  
        );
        
        var result = shallowRenderer.getRenderOutput();
        
        expect(result.type).to.equal('div');
    });
});