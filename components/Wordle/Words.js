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
      const wordArr = result.split("\r\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  console.log("Correct word is ", todaysWord);
  return { wordSet, todaysWord };
};
