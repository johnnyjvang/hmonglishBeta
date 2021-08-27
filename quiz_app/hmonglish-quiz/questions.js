// var colors = [
//   ["black", "blue", "green", "purple", "red", "yellow", "colors"],
//   ["dub", "xiav", "ntsuab", "xiav tsuag", "liab", "daj", "colors"],
//   ["dlub", "xav", "ntsuab", "xim tsom xem", "lab", "dlaaj", "colors"],
//   ["black", "blue", "green", "purple", "red", "yellow"],
// ];

var colors = [
  ["black", "blue", "green", "purple", "red", "yellow"],
];

var animals = [
    ["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey"],
]

var numbers = [
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
]

// console.log('hello');
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
  // console.log("Call to doSomething took " + time + " milliseconds.")
  return array
}

console.log("non-shuffled list: ", colors[0]);
let test = shuffleArray(colors[0]);
console.log("shuffled list: ", test);

function create_questions(category){
  let questions = [];
  for (let i =0; i< category[0].length; i++){
    let working_set = [];
    working_set.push(category[0][i]);
    // console.log('working_set: ', working_set)
    let working_category = [...category[0]];
    let index = working_category.indexOf(category[0][i]);
    if (index > -1) {
      working_category.splice(index, 1);
    }
    // console.log('array w/o current: ', working_category);
    let mixed_working = shuffleArray(working_category);
    // console.log('shuffled: ', mixed_working);
    working_set.push(mixed_working[0]);
    working_set.push(mixed_working[1]);
    working_set.push(mixed_working[2]);
    working_set = shuffleArray(working_set);
    // console.log('working set: ', working_set);
    let final_set = [category[0][i], ...working_set];
    // console.log('final set:', final_set);
    questions.push(final_set);
    // console.log('questions set:', questions);
  }
  return questions;
}

let question1 = create_questions(colors);
let question2 = create_questions(animals);
let question3 = create_questions(numbers);
console.log('questions1: ', question1);
console.log('questions2: ', question2);
console.log('questions3: ', question3);

let all_categories = [...question1, ...question2, ...question3];
console.log('non-shuffled: ', all_categories);
console.log('shuffled: ', shuffleArray(all_categories));

let image = "image";
let button1 = "one";
let button2 = "two";
let button3 = "thre";
let button4 = "four";

for (let y = 0; y < all_categories.length-1; y++){
  image = all_categories[y][0]
  button1 = all_categories[y][1]
  button2 = all_categories[y][2]
  button3 = all_categories[y][3]
  button4 = all_categories[y][4]
  console.log('Questions list #: ', y)
  console.log('image: ', image);
  console.log('button1: ', button1);
  console.log('button2: ', button2);
  console.log('button3: ', button3);
  console.log('button4: ', button4);
}


// let questions = [];
// for (let i =0; i< colors[0].length; i++){
//   let working_set = [];
//   working_set.push(colors[0][i]);
//   console.log('working_set: ', working_set)
//   let working_category = [...colors[0]];
//   let index = working_category.indexOf(colors[0][i]);
//   if (index > -1) {
//     working_category.splice(index, 1);
//   }
//   console.log('array w/o current: ', working_category);
//   let mixed_working = shuffleArray(working_category);
//   // console.log('shuffled: ', mixed_working);
//   working_set.push(mixed_working[0]);
//   working_set.push(mixed_working[1]);
//   working_set.push(mixed_working[2]);
//   working_set = shuffleArray(working_set);
//   console.log('working set: ', working_set);
//   let final_set = [colors[0][i], ...working_set];
//   console.log('final set:', final_set);
//   questions.push(final_set);
//   console.log('questions set:', questions);
// }

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  // console.log(index);
  return choices[index];
}
