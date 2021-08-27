// single button
// const category_buttons = document.querySelector('.pick_category h1');
// all category buttons
// NodeList(4) [h1, h1, h1, h1, onclick: ƒ]

var colors = [
  ["black", "blue", "green", "purple", "red", "yellow"],
];

var animals = [
  ["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey"],
]

var numbers = [
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
]

const first_box = document.querySelector('.start_btn');
const category_buttons = document.querySelectorAll('.pick_category h1');
const test_button = document.querySelector('.pick_category h3');
const all_button = document.querySelector('.pick_category h2');
let category_buttons_active = document.querySelectorAll('.start_btn .pick_category h1.active');
let counter = 0;
const quiz_box = document.querySelector('.quiz_box');
const quiz_header = document.querySelector('.quiz_box header')
let quiz_image = document.querySelector('.quiz_box section img');
let quiz_buttons = document.querySelectorAll('.quiz_box h1');
const quiz_next_button = document.querySelector('.quiz_box .next_btn');
const start_button = document.querySelector('.start_button');
const total_questions = document.querySelector('.quiz_box footer h3')
let list_of_categories = [];
let number_of_active = 0;
let questions = NaN;
// works for 1 button
// category_buttons.onclick = () => {
//   category_buttons.classList.add("active");
// }

// for loop for all buttons
category_buttons.forEach((button) => {

  button.onclick = () => {
    // toggle allows you to have it on/off switch
    button.classList.toggle("active");
    if (button.classList.contains('active')) {
      counter = counter + 1;
      console.log('counter = ', counter)
    } else {
      counter = counter - 1;
      console.log('counter = ', counter)
      if (all_button.classList.contains('active')) {
        all_button.classList.remove('active')
      }
    }

    category_buttons_active = document.querySelectorAll('.start_btn .pick_category h1.active');
    number_of_active = category_buttons_active.length;
    if (number_of_active >= 1) {
      list_of_categories = [];
      for (x = 0; x < number_of_active; x++) {
        list_of_categories.push(category_buttons_active[x].innerText);
        // console.log('list of category: ', x, list_of_categories);
      }
      // console.log('fuck you');
      console.log('full list of categories: ', list_of_categories);
      // alert(number_of_active);
    }
    is_start_active(number_of_active);
  }
  // if (button.classList.contains('active')){
  //   counter = counter + 1;
  //   console.log(counter);
  // }
});

function is_start_active(counter) {
  if (counter >= 1) {
    start_button.classList.add('active');
    console.log('i am active');
    // console.log('full list of categories: ');
  } else {
    start_button.classList.remove('active');
    console.log('i am not active');
  }
  if (counter == 4) {
    all_button.classList.add('active')
  }
}

all_button.onclick = () => {
  all_button.classList.toggle("active");
  if (all_button.classList.contains('active')) {
    category_buttons.forEach((button) => {
      button.classList.add("active");
    });
    counter = category_buttons.length;
    is_start_active(counter);
  } else {
    category_buttons.forEach((button) => {
      button.classList.remove("active");
    });
    counter = 0;
    is_start_active(counter);
  }
}

// write a code that will light up the start button when one is clicked

function check_for_active(elements) {
  let counter = 0;
  elements.forEach((element) => {
    if (element.classList.contains('active')) {
      counter = counter + 1;
    } else {
      counter = counter - 1;
    }
  });
}

let all_questions = [];
let category_questions = NaN;
let category_counter = 0;
let total_number_questions = NaN;
start_button.onclick = () => {
  if (start_button.classList.contains('active')) {
    console.log('start game');
    quiz_box.classList.add('active_screen');
    first_box.classList.add('non-active');
    console.log('categories: ', list_of_categories);
    all_questions = [];
    let colors_questions = []
    let animals_questions = []
    let numbers_questions = []
    for (let y = 0; y < list_of_categories.length; y++) {
      let current_category = list_of_categories[y];
      if (current_category == "colors") {
        colors_questions = create_questions(colors);
        console.log('color :', colors_questions);
      }
      if (current_category == "animals") {
        animals_questions = create_questions(animals);
        console.log('animals :', animals_questions);
      }
      if (current_category == "numbers") {
        numbers_questions = create_questions(numbers);
        console.log('numbers :', numbers_questions);
      }

      // all_questions = all_questions.concat(colors_questions);
      // all_questions = all_questions.concat(animals_questions);
      // all_questions = all_questions.concat(numbers_questions);
    }
    all_questions = [...colors_questions, ...animals_questions, ...numbers_questions];
    console.log('all questions', all_questions);
    all_questions = shuffleArray(all_questions);
    console.log('shuffled questions:', all_questions);

    // alert('categories pressed: ', list_of_categories);
    // let example_list = ["one", "two", "three", "four"];
    let example_list = all_questions[category_counter];
    let x = 0;
    quiz_image.src = example_list[x] +'.png';
    x = 1;
    quiz_buttons.forEach((button) => {
      button.innerText = example_list[x];
      x = x + 1;
    });
    total_number_questions = all_questions.length;
    category_counter++;
    total_questions.innerText = String(category_counter) + ' of ' + String(total_number_questions) + ' Questions'
  } else {
    // console.log('try again');
    alert('Please pick a category');
  }
}

quiz_image.onclick = () => {
  // quiz_image.classList.toggle('active');
  let audio_link = quiz_image.getAttribute("src");
  let real_length = audio_link.length - 4;
  // console.log(real_length);
  audio_link = audio_link.slice(0, real_length);
  // console.log(audio_link);
  audio_link = audio_link + '.mp3';
  // console.log(audio_link);
  playsound(audio_link);
}

quiz_buttons.forEach((button) => {
  // quiz_image = document.querySelector('.quiz_box section img');
  // quiz_buttons = document.querySelectorAll('.quiz_box h1');
  // let button_text = button.innerText;
  button.onclick = () => {
    let image_text = quiz_image.getAttribute('src');
    let image_length = image_text.length - 4;
    image_text = image_text.slice(0, image_length);
    let button_text = button.innerText;
    quiz_buttons.forEach((button) => {
      button.classList.remove('active');
      button.classList.remove('correct');
      button.classList.remove('incorrect');
      button.classList.add('no_click');
    });
    button.classList.add('active');
    if (image_text == button_text) {
      button.classList.remove('active');
      button.classList.add('correct');
    } else {
      button.classList.remove('active');
      button.classList.add('incorrect');
      quiz_buttons.forEach((butt) => {
        let butt_text = butt.innerText;
        // console.log(butt_text);
        if (image_text == butt_text) {
          butt.classList.add('correct');
          // console.log('changing to correct');
        } else {
          // console.log('nada');
          // console.log(image_text, button_text);
        }

      });
    }
    quiz_next_button.classList.add('dark');
    // alert(button_text);
    // alert(image_text);
  }
});


quiz_next_button.onclick = () => {
  let correct_number = 0;
  quiz_buttons.forEach((button)=>{
    if (button.classList.contains('correct')){
      correct_number++;
    }
  });
  if (correct_number>=1) {
    quiz_next_button.classList.remove('dark');
    //clear all correct and incorrect classes
    quiz_buttons.forEach((button)=>{
      button.classList.remove('correct');
      button.classList.remove('incorrect');
      button.classList.remove('no_click');
    });
    let working_list = all_questions[category_counter];
    let x = 0;
    quiz_image.src = working_list[x] +'.png';
    x = 1;
    quiz_buttons.forEach((button) => {
      button.innerText = working_list[x];
      x = x + 1;
    });
    category_counter++;
    total_questions.innerText = String(category_counter) + ' of ' + String(total_number_questions) + ' Questions';
  } else{
    alert('Please pick an answer')
  }

}


function playsound(audio_link) {
  // audio link is going to be the innerText variable
  let voice_recording = new Audio(audio_link);
  voice_recording.play();
}

// --------------------------------------------------------------------------------
// question.js
// --------------------------------------------------------------------------------
// This function will shuffle an array
function shuffleArray(array) {
  let start = new Date().getTime();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  let end = new Date().getTime();
  let time = end - start;
  // console.log("Call to doSomething took " + time + " milliseconds.")
  return array
}

// this function will create an array of questions given a category
// [image, text, text, text, text]
function create_questions(category) {
  let questions = [];
  for (let i = 0; i < category[0].length; i++) {
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
