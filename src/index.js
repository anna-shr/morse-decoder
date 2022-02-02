module.exports = {
    decode
}

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let encodedLetters = []; //(массив из строк)
    for (let i = 0; i <= expr.length - 10; i = i + 10) {
        encodedLetters.push(expr.substring(i, i + 10));
    }
    let decodedString = '';
    encodedLetters.forEach(function (encodedLetter) {
        if (encodedLetter == '**********') {
            decodedString = decodedString + ' ';

            return;
        }

        let letter = '';
        for (let i = 0; i <= encodedLetter.length - 2; i = i + 2) {
            let symbol = encodedLetter.substring(i, i + 2); //для первой строки берем 2 буквы
            if (symbol == '00') {
                continue;
            }
            if (symbol == '10') {
                letter = letter + '.';
            }
            if (symbol == '11') {
                letter = letter + '-';
            }
            //получаем в результате вместо каждой строки в массиве набор палочек и точек + пробелов
        }
        decodedString = decodedString + MORSE_TABLE[letter];
    });
    return decodedString;
}