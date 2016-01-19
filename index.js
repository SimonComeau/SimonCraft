const MAP_SIZE = 26;
const LETTER_A = 65;
const LETTER_Z = 90;
const LETTER_UNDEFINED = 0;
const MAP_SYMBOL = '.';
var colCounter = 1;
var mapRow = '';
var headerRow = '  ';

while (colCounter <= MAP_SIZE) {
    headerRow += (colCounter > 10 ? ' ' : '  ') + colCounter;
    mapRow += '  ' + MAP_SYMBOL;
    colCounter++;
}

var rowCounter = LETTER_A;
var rowLimit = MAP_SIZE + LETTER_A;
var indexLetter = LETTER_UNDEFINED;
console.log(headerRow);
while (rowCounter < rowLimit) {
    var index = (indexLetter == LETTER_UNDEFINED ? ' ' : String.fromCharCode(indexLetter));
    console.log(index + String.fromCharCode(rowCounter) + mapRow);
    console.log('');
    if (rowCounter == LETTER_Z) {
        rowCounter = LETTER_A;
        rowLimit -= 26;
        if (indexLetter == LETTER_UNDEFINED) {
            indexLetter = LETTER_A;
        } else {
            indexLetter++;
        }
    } else {
        rowCounter++;
    }
}