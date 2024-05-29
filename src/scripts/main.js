function findAllAnagrams(string, chars) {
  const anagramArr = [];
  const CHARS = chars.split('');
  const CHARS_LENGTH = CHARS.length;
  const INPUT_STRING = string.slice('');
  const INPUT_STRING_LENGTH = INPUT_STRING.length;

  for (let i = 0; i < INPUT_STRING_LENGTH; i++) {
    const part = INPUT_STRING.slice(i, i + CHARS_LENGTH).split('');

    if (part.filter(item => CHARS.includes(item)).length === CHARS_LENGTH) {
      anagramArr.push(i);
    }
  }

  return anagramArr;
}

console.log(findAllAnagrams('seqsaqssesqessqeaasqseqse', 'qss')); //[0, 6]
// Підрядок з початковим індексом 0 - це 'cba', який є анаграмою 'abc'.
// Підрядок з початковим індексом 6 - це 'bac', який є анаграмою 'abc'.
//
// findAllAnagrams('abab', 'ab') === [0, 1, 2]
// // Підрядок з початковим індексом 0 - це 'ab', який є анаграмою 'ab'.
// // Підрядок з початковим індексом 1 - це 'ba', який є анаграмою 'ab'.
// // Підрядок з початковим індексом 2 - це 'ab', який є анаграмою 'ab'.

