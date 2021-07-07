const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector('.navbar2');

menuIcon.addEventListener("click", () =>{
  navbar.classList.toggle('change')
});

// colors
let colors_png = ["black.png", "blue.png", "brown.png", "gray.png", "green.png", "orange.png", "purple.png", "red.png", "yellow.png"];

// let colors = ["black", "blue", "green", "purple", "red", "yellow", "colors"];
// var colors = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];

let colors_hmong = ["blackss", "bluess", "brownss", "grayss", "greenss", "orangess", "purpless", "redss", "yellowss", "colorsss"];

let animals = [
  ["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey", "animals"],
  ["dais", "heev nyuj", "miv", "qaib", "nyuj", "muas lwj", "os", "ntxhw", "hma", "tshis", "poj qaib", "nees", "tsov ntxhuav", "liab", "animals"],
  ["dlais", "heev nyuj", "miv", "qab", "nyuj", "mos lwj", "os", "ntxhw", "hma", "mi es", "puj qaib", "neeg", "tsuv ntxhuav", "lab", "animals"],
]

let numbers = [
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'numbers'],
  ['ib', 'ob', 'peb', 'pluab', 'tsib', 'rau', 'xyaa', 'yim', 'cuaj', 'kuam'],
  ['ib', 'ob', 'peb', 'pluab', 'tsis', 'rau', 'xyaa', 'yim', 'cuaj', 'kaum'],
]

let colors = [
  ["black", "blue", "green", "purple", "red", "yellow", "colors"],
  ["dub", "xiav", "ntsuab", "xiav tsuag", "liab", "daj", "colors"],
  ["dlub", "xav", "ntsuab", "xim tsom xem", "lab", "dlaaj", "colors"],
];
//
// colors2[0] = 1st array =   ["black", "blue", "green", "purple", "red", "yellow", "colors"],
// colors2[1] = 2nd array =   ["blacks", "blues", "greens", "purples", "reds", "yellows", "colors"],

let counter = 2;
let view_number = document.querySelector('.nav-link.active').innerText;
let active_category = document.querySelector('.categories.active').innerText;
let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
console.log(toggle_language);

// initalize buttons when start, runs only once
if (view_number == 1){
  create_button_generator3(colors);
  create_button_generator3(animals);
  create_button_generator3(numbers);
  // console.log('intialize 1');
} else if (view_number == 3) {
  create_button_generator3_views(colors);
  create_button_generator3_views(animals);
  create_button_generator3_views(numbers);
  // console.log('intialize 3');
} else {
  create_button_generator6_views(colors);
  create_button_generator6_views(animals);
  create_button_generator6_views(numbers);
  // console.log('intialize 6');
}

$('.df-switch').on("click", function(){
  let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
  let view_number = document.querySelector('.nav-link.active').innerText;
  let active_category = document.querySelector('.categories.active').innerText;
  console.log(toggle_language, view_number, active_category);
  if (toggle_language == 'true'){
    // console.log('true, should be green');
  } else{
    // console.log('false, should be white');
  }
  // ADD a class that says green/white?
  // $(".side2 h1").removeClass("active");
  // $(this).addClass("active");
  // we add a class and check which class is aviable?
  // if green exist do this, if white exist, do this?
  if (counter%2 == 0){
    let active_class = "white";
    // console.log(active_class, counter);
    counter = counter + 1;
  } else{
    let active_class = "green";
    // console.log(active_class, counter);
    counter = counter + 1;
  }





  // console.log(view_number, active_category);
  if (view_number == 1){
    if (active_category.toLowerCase() == "colors"){
      create_remove_view1(colors);
      // console.log('create new colors');
    } else if (active_category.toLowerCase() == "animals"){
      create_remove_view1(animals);
      // console.log('create new animals');
    } else if (active_category.toLowerCase() == "numbers"){
      create_remove_view1(numbers);
      // console.log('create new numbers');
    }
  } else if (view_number == 3) {
    if (active_category.toLowerCase() == "colors"){
      create_remove_view3(colors);
      // console.log('create new colors');
    } else if (active_category.toLowerCase() == "animals"){
      create_remove_view3(animals);
      // console.log('create new animals');
    } else if (active_category.toLowerCase() == "numbers"){
      create_remove_view3(numbers);
      // console.log('create new numbers');
    }
  } else {
    if (active_category.toLowerCase() == "colors"){
      create_remove_view6(colors);
      // console.log('create new colors');
    } else if (active_category.toLowerCase() == "animals"){
      create_remove_view6(animals);
      // console.log('create new animals');
    } else if (active_category.toLowerCase() == "numbers"){
      create_remove_view6(numbers);
      // console.log('create new numbers');
    }
  }
});


$(".side2 h1").on("click", function() {
  $(".side2 h1").removeClass("active");
  $(this).addClass("active");
  let active_category = document.querySelector('.categories.active').innerText;
  // console.log(active_category);
  // console.log(active_category.toLowerCase());
  // console.log(typeof(active_category));
  // if (active_category.toLowerCase() == 'colors'){
  //   console.log('active = colors');
  // }
  // else if (active_category.toLowerCase() == 'numbers'){
  //   console.log('active = numbers');
  // } else if (active_category.toLowerCase() == 'animals'){
  //   console.log('active = animals');
  // }
})

$(".nav-item a").on("click", function() {
  $(".nav-item a").removeClass("active");
  $(this).addClass("active");
  // if (active_category==null) {
  //   $(".side2 h1").removeClass("active");
  //   $(this).addClass("active");
  // }
  // console.log(this);
  let view_number = document.querySelector('.nav-link.active').innerText;
  let active_category = document.querySelector('.categories.active').innerText;
  // console.log(active_category, 'animal category')
    // create_remove_view1(active_category);
    // create_remove_view3(active_category);
    // create_remove_view6(active_category);
    // console.log('create new view');

  // console.log(view_number, active_category);
  if (view_number == 1){
    if (active_category.toLowerCase() == "colors"){
      create_remove_view1(colors);
      // console.log('create new colors');
    } else if (active_category.toLowerCase() == "animals"){
      create_remove_view1(animals);
      // console.log('create new animals');
    } else if (active_category.toLowerCase() == "numbers"){
      create_remove_view1(numbers);
      // console.log('create new numbers');
    }
    create_button_generator3(colors);
    create_button_generator3(animals);
    create_button_generator3(numbers);
    // console.log('new 1');
  } else if (view_number == 3) {
    if (active_category.toLowerCase() == "colors"){
      create_remove_view3(colors);
      // console.log('create new colors');
    } else if (active_category.toLowerCase() == "animals"){
      create_remove_view3(animals);
      // console.log('create new animals');
    } else if (active_category.toLowerCase() == "numbers"){
      create_remove_view3(numbers);
      // console.log('create new numbers');
    }
    create_button_generator3_views(colors);
    create_button_generator3_views(animals);
    create_button_generator3_views(numbers);
    // console.log('new 3');
  } else {
    if (active_category.toLowerCase() == "colors"){
      create_remove_view6(colors);
      // console.log('create new colors');
    } else if (active_category.toLowerCase() == "animals"){
      create_remove_view6(animals);
      // console.log('create new animals');
    } else if (active_category.toLowerCase() == "numbers"){
      create_remove_view6(numbers);
      // console.log('create new numbers');
    }
    create_button_generator6_views(colors);
    create_button_generator6_views(animals);
    create_button_generator6_views(numbers);
    // console.log('new 6');
  }
});


// This makes button generate card's given the category list with according sound mp3
function create_button_generator1(category_list){
  let category_name = category_list[category_list.length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {

    let swiper_str = create_str2(category_list);

    if (document.querySelector(".swiper-container")) {
      // console.log('category already exist');
      remove_category();
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    } else {
      // console.log('category does not exist')
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    }
    create_sound(category_list[0])
    let swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
}


function create_button_generator3(category_list){
  let category_name = category_list[0][category_list[0].length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {
  create_remove_view1(category_list)
  });
}

function create_remove_view1(category_list){

    let swiper_str = create_str3(category_list);
    if (document.querySelector(".swiper-container")) {
      // console.log('category already exist');
      remove_category();
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    } else {
      // console.log('category does not exist')
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    }
    create_sound(category_list)
    let swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}

function create_button_generator3_views(category_list){
  let category_name = category_list[0][category_list[0].length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {
  create_remove_view3(category_list)
  });
}

function create_remove_view3(category_list){
  let swiper_str = create_str3(category_list);

  if (document.querySelector(".swiper-container")) {
    // console.log('category already exist');
    remove_category();
    document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
  } else {
    // console.log('category does not exist')
    document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
  }
  create_sound(category_list)
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function create_button_generator6_views(category_list){
  let category_name = category_list[0][category_list[0].length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {
  create_remove_view6(category_list)
  });
}

function create_remove_view6(category_list){
  let swiper_str = create_str6(category_list);

  if (document.querySelector(".swiper-container")) {
    // console.log('category already exist');
    remove_category();
    document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
  } else {
    // console.log('category does not exist')
    document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
  }
  create_sound(category_list)
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


function remove_category() {
  let myobj = document.querySelector(".swiper-container");
  myobj.remove();
}

function create_sound(category_list) {
  for (let i = 0; i < category_list[0].length - 1; i++) {

    let sound_category = category_list[0][category_list[0].length - 1];
    let sound_name = category_list[0][i];
    let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";

    document.querySelectorAll('.sound_element')[i].addEventListener("click", function() {
      // console.log("added click function to" + String(i));
      let voice_recording = new Audio(audio_link);
       // console.log(audio_link)
      voice_recording.play();
    });
  }
}

  function create_str2(category_list) {

    const category_string1 = '<div class="swiper-container z-container"> <div class="swiper-wrapper">';
    // const category_string1 = '<div class="swiper-container z-container"> <div class="swiper-wrapper">';
    let running_str = "";
    let running_pagination = "";
    let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
    console.log(toggle_language, 'check toggle');
    if (toggle_language == 'true'){
      // console.log('its true');
    } else{
      // console.log('its false');
    }
    let hmong_text = "";

    for (let i = 0; i < category_list[0].length - 1; i++) {
      let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
      // console.log(toggle_language, 'check toggle');
      const swiper_slide = '  <div class="swiper-slide sound_element">';
      const category_container = '<div class="category-container">';
      const image_container = '<div class="image-container">';
      const image_url = "images/" + category_list[0][category_list[0].length - 1] + "/" + category_list[0][i] + ".png";
      const image_html = '<img class="image-size" src="' + image_url + '">';
      // console.log(image_html);
      const first_half = swiper_slide + category_container + image_container  + image_html;
      const text_contaer = '<div class="text-container">';
      const english_text = category_list[0][i];
      if (counter%2 == 0){
        // let hmong_text = "";
        hmong_text = category_list[1][i];
        // console.log(typeof(hmong_text));
        // console.log(hmong_text, 'hmong true xxxx');
      } else {
        hmong_text = category_list[2][i];
        // console.log(typeof(hmong_text));
        // console.log(hmong_text, 'hmong false xxxx');
      }
      // console.log(hmong_text, 'hmong false xxxx');
      const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
      // console.log(hmong_html, 'hmong html xxxx');
      // const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
      const english_html = '<h1 class="english-text">' + english_text + '</h1>';
      const row_end = '</div></div></div></div>';
      const second_half = text_contaer + english_html + hmong_html  + row_end;
      let all_str = first_half + second_half
      running_str = running_str.concat(all_str);
      if (i > 0) {
        let pagination = '<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide' + String(i+1) +'"></span>'
        running_pagination = running_pagination.concat(pagination)
      }
      }
      const pag_1 = '<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">';
      const pag_2 = '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>';
      const pag_end = '</div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>';
      // const end_str = pag_1 + pag_2 + running_pagination + pag_end;

      const end_str = '</div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div></div>';
      let final_str = category_string1 + running_str + end_str;
      return final_str
    }

    function create_str3(category_list) {

      const category_string1 = '  <div class="swiper-container mySwiper z-container"><div class="swiper-wrapper">';
      // const category_string1 = '<div class="swiper-container z-container"> <div class="swiper-wrapper">';
      let running_str = "";
      let running_pagination = "";
      let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
      // console.log(toggle_language, 'check toggle');
      if (toggle_language == 'true'){
        // console.log('its true');
      } else{
        // console.log('its false');
      }
      let hmong_text = "";

      for (let i = 0; i < category_list[0].length - 1; i++) {
        let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
        // console.log(toggle_language, 'check toggle');
        const swiper_slide = '  <div class="swiper-slide sound_element">';
        const category_container = '<div class="category-container">';
        const image_container = '<div class="image-container">';
        const image_url = "images/" + category_list[0][category_list[0].length - 1] + "/" + category_list[0][i] + ".png";
        const image_html = '<img class="image-size" src="' + image_url + '">';
        // console.log(image_html);
        const first_half = swiper_slide + category_container + image_container  + image_html;
        const text_contaer = '<div class="text-container">';
        const english_text = category_list[0][i];
        if (counter%2 == 0){
          // let hmong_text = "";
          hmong_text = category_list[1][i];
          // console.log(typeof(hmong_text));
          // console.log(hmong_text, 'hmong true xxxx');
        } else {
          hmong_text = category_list[2][i];
          // console.log(typeof(hmong_text));
          // console.log(hmong_text, 'hmong false xxxx');
        }
        // console.log(hmong_text, 'hmong false xxxx');
        const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
        // console.log(hmong_html, 'hmong html xxxx');
        // const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
        const english_html = '<h1 class="english-text">' + english_text + '</h1>';
        const row_end = '</div></div></div></div>';
        const second_half = text_contaer + english_html + hmong_html  + row_end;
        let all_str = first_half + second_half
        running_str = running_str.concat(all_str);
        if (i > 0) {
          let pagination = '<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide' + String(i+1) +'"></span>'
          running_pagination = running_pagination.concat(pagination)
        }
        }
        const pag_1 = '<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">';
        const pag_2 = '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>';
        const pag_end = '</div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>';
        // const end_str = pag_1 + pag_2 + running_pagination + pag_end;
        const pag_end_short = '</div><div class="swiper-pagination"></div></div></div>'
        const end_str = '</div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div></div>';
        let final_str = category_string1 + running_str + pag_end_short;
        return final_str
      }

      function create_str6(category_list) {

        const category_string1 = '  <div class="swiper-container mySwiper six_views"><div class="swiper-wrapper">';
        // const category_string1 = '<div class="swiper-container z-container"> <div class="swiper-wrapper">';
        let running_str = "";
        let running_pagination = "";
        let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
        // console.log(toggle_language, 'check toggle');
        if (toggle_language == 'true'){
          // console.log('its true');
        } else{
          // console.log('its false');
        }

        let hmong_text = "";

        for (let i = 0; i < category_list[0].length - 1; i++) {
          let toggle_language = document.querySelector('.df-switch .btn').getAttribute('aria-pressed');
          console.log(toggle_language, 'check toggle');
          const swiper_slide = '  <div class="swiper-slide six_swiper_slider sound_element">';
          const category_container = '<div class="category-container">';
          const image_container = '<div class="image-container">';
          const image_url = "images/" + category_list[0][category_list[0].length - 1] + "/" + category_list[0][i] + ".png";
          const image_html = '<img class="image-size6" src="' + image_url + '">';
          // console.log(image_html);
          const first_half = swiper_slide + category_container + image_container  + image_html;
          const text_contaer = '<div class="text-container">';
          const english_text = category_list[0][i];
          if (counter%2 == 0){
            // let hmong_text = "";
            hmong_text = category_list[1][i];
            // console.log(typeof(hmong_text));
            // console.log(hmong_text, 'hmong true xxxx');
          } else {
            hmong_text = category_list[2][i];
            // console.log(typeof(hmong_text));
            // console.log(hmong_text, 'hmong false xxxx');
          }
          // console.log(hmong_text, 'hmong false xxxx');
          const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
          // console.log(hmong_html, 'hmong html xxxx');
          // const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
          const english_html = '<h1 class="english-text">' + english_text + '</h1>';
          const row_end = '</div></div></div></div>';
          const second_half = text_contaer + english_html + hmong_html  + row_end;
          let all_str = first_half + second_half
          running_str = running_str.concat(all_str);
          if (i > 0) {
            let pagination = '<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide' + String(i+1) +'"></span>'
            running_pagination = running_pagination.concat(pagination)
          }
          }
          const pag_1 = '<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">';
          const pag_2 = '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>';
          const pag_end = '</div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>';
          // const end_str = pag_1 + pag_2 + running_pagination + pag_end;
          const pag_end_short = '</div><div class="swiper-pagination"></div></div></div>'
          const end_str = '</div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div></div>';
          let final_str = category_string1 + running_str + pag_end_short;
          return final_str
        }
