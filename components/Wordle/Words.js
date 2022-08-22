export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch("/wordle-bank.txt")
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      let randNum = Math.floor(Math.random() * wordArr.length);
      todaysWord = wordArr[randNum];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
