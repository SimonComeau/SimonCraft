describe('We expect the index', () => {
    it('to have a generate function', () => {
        //arrange
        var map = require('../index');

        //act

        //assert
        expect(map.generate).toBeDefined();
    });
});