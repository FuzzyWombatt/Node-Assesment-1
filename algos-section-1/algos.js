// Section One: JS
// Part A: 5-random-7
// If you have a function that generates random number between 1 to 5
// how could u generate a random number from 1 to 7 inclusively by using
// the aforementioned function?
// ex) given fx:
const random5 = () => {
  return 1 + Math.random() * 4;
};

const random7 = () => {
  return Math.floor(random5() + Math.random() * 3);
};

// Part B: reverse-a-string
// Given any string, write a function that returns the string in reverse.
// ex)
//const initialString = 'hello' // 'olleh'

const revString = (str) => {
  let revStr = "";

  if (typeof str === "string") {
    for (let ind = str.length - 1; ind >= 0; ind--) {
      revStr += str[ind];
    }
  } else {
    console.log("enter a string variable");
  }

  return revStr;
};

console.log(revString('hello'));