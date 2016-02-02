var map = require('./map');

map.symbol = '.';
map.size = 10;
var mapRows = map.generate();

mapRows.forEach(row => {
    console.log('%s%s', row['index'], row['data']);
});