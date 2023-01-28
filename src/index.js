const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let str = '';
  let number = 10;
  for (let i = 0; i < expr.length; i = i + number) {
    let symbols = expr.substring(i, i + number);
    console.log(symbols);
    if(symbols === '**********') {
      str = str + ' ';
    } else {
      let numberToMorse = '';
      for (let j = symbols.length; j > 0; j = j - 2) {
        let numberToConvert = symbols.substring(j - 2, j);
        if(numberToConvert === '10') {
          numberToMorse = '.' + numberToMorse;
        } else if(numberToConvert === '11') {
          numberToMorse = '-' + numberToMorse;
        } else if(numberToConvert === '00') {
          break;
        }
      }
      str = str + MORSE_TABLE[numberToMorse];
    }
  }
  return str;
}

module.exports = {
  decode
};
