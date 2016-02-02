describe('We expect the map', () => {
    var map = undefined;
    beforeEach(function () {
        map = require('../map');
    });
    it('to have a generate function', () => {
        //arrange

        //act

        //assert
        expect(map.generate).toBeDefined();
    });
    it('generate to have a default value of 10 rows', () => {
        //arrange

        //act

        //assert
        expect(map.size).toBe(10);
    });
    it('to have a default character of .', () => {
        //arrange

        //act


        //assert
        expect(map.symbol).toBe('.');
    });
    it('should display a row with 10 dots by default', () => {
        //arrange
        var expected = '  .  .  .  .  .  .  .  .  .  .';

        //act
        var result = map.generateRowData();

        //assert
        expect(result).toBe(expected);
    });
    afterEach(function () {
        map = undefined;
    });
});