describe('We expect the map', () => {
    it('to have a display function', () => {
        //arrange
        var map = require('../map');

        //act

        //assert
        expect(map.display).toBeDefined();
    });
    it('display to have a default value of 10 rows', () => {
        //arrange
        var map = require('../map');

        //act

        //assert
        expect(map.size).toBe(10);
    });
    it('to have a default character of .', () => {
        //arrange
        var map = require('../map');

        //act


        //assert
        expect(map.symbol).toBe('.');
    });
    it('should display a row with 10 dots by default', () => {
        //arrange
        var map = require('../map');
        var expected = '  .  .  .  .  .  .  .  .  .  .';
        //act
        var defaultFirstIndex = map.getNextRowIndex;

        //assert
        expect(defaultFirstIndex).toBe(expected);
    });
});
