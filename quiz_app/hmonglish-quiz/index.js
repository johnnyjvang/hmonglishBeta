// single button
// const category_buttons = document.querySelector('.pick_category h1');
// all category buttons
// NodeList(4) [h1, h1, h1, h1, onclick: ƒ]
const first_box = document.querySelector('.start_btn');
const category_buttons = document.querySelectorAll('.pick_category h1');
const test_button = document.querySelector('.pick_category h3');
const all_button = document.querySelector('.pick_category h2');
let category_buttons_active = document.querySelectorAll('.start_btn .pick_category h1.active');
let counter = 0;
const quiz_box = document.querySelector('.quiz_box');
const quiz_header = document.querySelector('.quiz_box header')
const quiz_image = document.querySelector('.quiz_box section img');
const quiz_buttons = document.querySelectorAll('.quiz_box h1');
const quiz_next_button = document.querySelector('.quiz_box .next_btn');
const start_button = document.querySelector('.start_button');

let list_of_categories = [];
let number_of_active = 0;
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
    if (number_of_active >=1){
      list_of_categories = [];
      for (x=0; x<number_of_active; x++){
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
  if (counter == 4){
    all_button.classList.add('active')
  }
}

test_button.onclick = () => {
  test_button.classList.add("active");
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


start_button.onclick = () => {
  if (start_button.classList.contains('active')) {
    console.log('start game');
    quiz_box.classList.add('active_screen');
    first_box.classList.add('non-active');
    console.log('categories: ', list_of_categories);
    alert('categories pressed: ', list_of_categories);
    let example_list = ["one", "two", "three", "four"];
    let x = 0;
    quiz_buttons.forEach( (button)=>{
        button.innerText = example_list[x];
        x = x + 1;
    });
  } else {
    console.log('try again');
    alert('Please pick a category');
  }
}

quiz_image.onclick = () =>{
  quiz_image.classList.toggle('active');
  let audio_link = quiz_image.getAttribute("src");
  let real_length = audio_link.length - 4;
  // console.log(real_length);
  audio_link = audio_link.slice(0, real_length);
  // console.log(audio_link);
  audio_link = audio_link + '.mp3';
  // console.log(audio_link);
  playsound(audio_link);
}

quiz_buttons.forEach((button)=>{
  let image_text = quiz_image.getAttribute('src');
  let image_length = image_text.length - 4;
  image_text = image_text.slice(0,image_length);
  let button_text = button.innerText;
  button.onclick = () =>{
    quiz_buttons.forEach((button)=>{
      button.classList.remove('active');
      button.classList.remove('correct');
      button.classList.remove('incorrect');
    });
    button.classList.add('active');
    if (image_text==button_text){
      button.classList.remove('active');
      button.classList.add('correct');
    }else{
      button.classList.remove('active');
      button.classList.add('incorrect');
      quiz_buttons.forEach((butt)=>{
        let butt_text = butt.innerText;
        console.log(butt_text);
        if (image_text==butt_text){
          butt.classList.add('correct');
          console.log('changing to correct');
        } else{
          console.log('nada');
          console.log(image_text, button_text);
        }

      });
    }
  }
});

quiz_next_button.onclick = () =>{
  quiz_header.classList.toggle('active');
}


function playsound(audio_link){
  // audio link is going to be the innerText variable
  let voice_recording = new Audio(audio_link);
  voice_recording.play();
}
