// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const doubleNumbers = numbers.map(function (x) {
//   return x * 2;
// });
//or the arrow function:
//const doubleNumbers = numbers.map((x) => x * 2);

//Filter - Create a new array by keeping the items that return true.
// const newFilterNumbers = numbers.filter(function (num) {
//   return num > 10;
// });
//or the arrow function:
//const newFilterNumbers = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// const reducedSum = numbers.reduce(function (acc, currentNumber) {
//   //console.log("acc: " + acc);
//   //console.log("current Number: " + currentNumber);
//   return acc + currentNumber;
// });
// or arrow function:
//const reducedSum = numbers.reduce((acc, currentNumber) => acc + currentNumber);

//Find - find the first item that matches from an array.
// const foundNumber = numbers.find(function (num) {
//   return num > 10;
// });
//or the arrow function:
//const foundNumber = numbers.find(num => num > 10);

//FindIndex - find the index of the first item that matches.
// const foundNumberIndex = numbers.findIndex(function (num) {
//     return num > 10;
//   });
//or the arrow function:
// const foundNumberIndex = numbers.findIndex(num => num > 10);

// console.log(foundNumberIndex);

//create a new array of a meaning with a max of 100 characters.

import emojipedia from "./emojipedia";

// const meaning = emojipedia.map(function(emoji){
//     return emoji.meaning.substring(0,100);
// });
//or the arrow function:
const meaning = emojipedia.map(emoji => emoji.meaning.substring(0,100));

console.log(meaning);