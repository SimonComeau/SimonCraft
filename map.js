const DEFAULT_MAP_SIZE = 10;
const DEFAULT_MAP_SYMBOL = '.';
const MAX_MAP_SIZE = 100;
const LETTER_A = 65;
const LETTER_Z = 90;
const LETTER_UNDEFINED = 0;

exports.symbol = DEFAULT_MAP_SYMBOL;
exports.size = DEFAULT_MAP_SIZE;
exports.display = displayMap;

function generateRows() {
    var mapRow = '';
    var headerRow = '  ';
    for (var counter = 1; counter <= Math.min(exports.size, MAX_MAP_SIZE); counter++) {
        headerRow += (counter > 10 ? ' ' : '  ') + counter;
        mapRow += '  ' + exports.symbol;
    }
    console.log(headerRow);
    return mapRow;
}

function displayMap() {
    var rowTemplate = generateRows();
    var rowLimit = Math.min(exports.size, MAX_MAP_SIZE) + LETTER_A;
    var indexLetter = LETTER_UNDEFINED;

    for (var counter = LETTER_A; counter < rowLimit; counter = getNextRowIndex(counter)) {
        var index = (indexLetter == LETTER_UNDEFINED ? ' ' : String.fromCharCode(indexLetter));
        console.log(index + String.fromCharCode(counter) + rowTemplate + '\n');
    }

    function getNextRowIndex(currentIndex) {
        if (currentIndex == LETTER_Z) {
            rowLimit -= 26;
            if (indexLetter == LETTER_UNDEFINED) {
                indexLetter = LETTER_A;
            } else {
                indexLetter++;
            }
            return LETTER_A;
        }
        return ++currentIndex;
    }
}