// colors
let colors_png = ["black.png", "blue.png", "brown.png", "gray.png", "green.png", "orange.png", "purple.png", "red.png", "yellow.png"];

// let colors = ["black", "blue", "green", "purple", "red", "yellow", "colors"];
// var colors = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];

let colors_hmong = ["blackss", "bluess", "brownss", "grayss", "greenss", "orangess", "purpless", "redss", "yellowss", "colorsss"];

var animals = [
  ["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey", "animals"],
  ["dais", "heev nyuj", "miv", "qaib", "nyuj", "muas lwj", "os", "ntxhw", "hma", "tshis", "poj qaib", "nees", "tsov ntxhuav", "liab", "animals"],
  ["dlais", "heev nyuj", "miv", "qab", "nyuj", "mos lwj", "os", "ntxhw", "hma", "mi es", "puj qaib", "neeg", "tsuv ntxhuav", "lab", "animals"],
    ["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey"],
]

var numbers = [
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'numbers'],
  ['ib', 'ob', 'peb', 'pluab', 'tsib', 'rau', 'xyaa', 'yim', 'cuaj', 'kuam'],
  ['ib', 'ob', 'peb', 'pluab', 'tsis', 'rau', 'xyaa', 'yim', 'cuaj', 'kaum'],
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
]

var colors = [
  ["black", "blue", "green", "purple", "red", "yellow", "colors"],
  ["dub", "xiav", "ntsuab", "xiav tsuag", "liab", "daj", "colors"],
  ["dlub", "xav", "ntsuab", "xim tsom xem", "lab", "dlaaj", "colors"],
  ["black", "blue", "green", "purple", "red", "yellow"],
];

let categories_list = [...colors[3], ...numbers[3], ...animals[3]];
let combined_category = [];
combined_category.concat(colors[3], numbers[3], animals[3]);


let a1 = [1, 2, 3],
    a2 = [4, 5],
    a3 = [6, 7, 8, 9];
let combined = Array.prototype.concat.apply([], [a1, a2, a3]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


let arr1 = [0, 1, 2],
      arr2 = [3, 4, 5];

let result1 = [...arr1, ...arr2]; // -> [0, 1, 2, 3, 4, 5]

function picture_list(category) {
  let working_list = category[0];
  for (let i = 0; i < working_list.length - 1; i++) {

  }
}

// The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


// implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates:
function shuffleArray(array) {
  let start = new Date().getTime();
  // for (let i = 0; i < 50000; ++i) {
  // // do something
  // }
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  let end = new Date().getTime();
  let time = end - start;
  console.log("Call to doSomething took " + time + " milliseconds.")
  return array
}

// execution time:
// https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute


// Used like so
let arr = [2, 11, 37, 42];
let fisher_yates = shuffle(arr);
let durstenfeld = shuffleArray(arr);
console.log(fisher_yates, durstenfeld);
console.log(colors[0]);
let working_list = [...colors[0]];
working_list.splice(working_list.length-1,1)
let new_category = shuffle(working_list);
// console.log("preshuffled:", categories_list);



let shuffled_categories = shuffle(categories_list)
// how to splice last element:
// colors[0].splice(colors[0].length-1, 1)
console.log(colors[0]);
console.log(working_list);
console.log(new_category);
console.log("combined categories:", categories_list);
console.log("combined shuffled categories:", shuffled_categories);

function split_shuffled(categories, split_size){
  let mixed_categories =[];
  var i,j,temparray,chunk = split_size;
  for (i=0,j=categories.length; i<j; i+=chunk) {
      temparray = categories.slice(i,i+chunk);
      // console.log(temparray)
      let temp_shuffle = shuffle(temparray)
      // console.log(temp_shuffle)
      mixed_categories = [...mixed_categories, ...temp_shuffle,]
  }
  return mixed_categories;
}

let mixed_shuffle = split_shuffled(shuffled_categories, 6);
console.log(mixed_shuffle);
let new_combo = [shuffled_categories, mixed_shuffle];
console.log(new_combo);
