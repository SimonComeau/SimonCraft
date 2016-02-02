const DEFAULT_MAP_SIZE = 10;
const DEFAULT_MAP_SYMBOL = '.';
const MAX_MAP_SIZE = 100;
const LETTER_A = 65;
const ALPHABET_SIZE = 26;
const util = require('util');

function generateRowData(row) {
    row['data'] = '';
    for (var counter = 1; counter <= Math.min(exports.size, MAX_MAP_SIZE); counter++) {
        row['data'] += '  ' + exports.symbol;
    }
}

function generateHeaderRow() {
    var headerRow = '';
    for (var counter = 1; counter <= Math.min(exports.size, MAX_MAP_SIZE); counter++) {
        headerRow += (counter > DEFAULT_MAP_SIZE ? ' ' : '  ') + counter;
    }
    return headerRow;
}

function generateRowIndex(row) {
    if (row['number'] < ALPHABET_SIZE) {
        row['index'] = util.format(' %s', String.fromCharCode(LETTER_A + row['number']));
    } else {
        var base = row['number'] % ALPHABET_SIZE;
        var firstIndex = String.fromCharCode(LETTER_A + (base - 1));
        var secondBase = row['number'] - (base * ALPHABET_SIZE);
        var secondIndex = String.fromCharCode(LETTER_A + secondBase);
        row['index'] = util.format('%s %s', firstIndex, secondIndex);
    }
}
function generateMap() {
    var rows = [];
    rows.length = Math.min(exports.size, MAX_MAP_SIZE) + 1;
    rows[0] = [];
    rows[0]['index'] = '  ';
    rows[0]['data'] = generateHeaderRow();

    for (var counter = 1; counter < rows.length; counter++) {
        rows[counter] = [];
        rows[counter]['number'] = counter - 1;
        generateRowIndex(rows[counter]);
        generateRowData(rows[counter]);
    }
    return rows;
}

exports.symbol = DEFAULT_MAP_SYMBOL;
exports.size = DEFAULT_MAP_SIZE;
exports.generate = generateMap;
//test exports
exports.generateRowData = generateRowData;
exports.generateHeaderRow = generateHeaderRow;
exports.generateRowIndex = generateRowIndex;