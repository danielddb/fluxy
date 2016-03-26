describe('Function', function() {
    it('should be called once', function () {
        var message = 'an example message';
        var spy = sinon.spy();
        spy();

        sinon.assert.calledOnce(spy);
    });
});