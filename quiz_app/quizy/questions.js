let colors = [
  ["black", "blue", "green", "purple", "red", "yellow", "colors"],
  ["dub", "xiav", "ntsuab", "xiav tsuag", "liab", "daj", "colors"],
  ["dlub", "xav", "ntsuab", "xim tsom xem", "lab", "dlaaj", "colors"],
];

let questions = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
]

create_questions(category){
  for (i=0; i<category[0].length(); i++){
    let running_number = i
    let running_question = category[0][i]
    let running_answer = category[0][i]
    let options = [category[0][i]]
    let random3 = []
  }
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)


const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);


// how to check if a value is already in an array
// ["Sam", "Great", "Sample", "High"].includes("Sam"); // true
