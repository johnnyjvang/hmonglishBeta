const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector('.navbar2');

menuIcon.addEventListener("click", () =>{
  navbar.classList.toggle('change')
});

// colors
let colors_png = ["black.png", "blue.png", "brown.png", "gray.png", "green.png", "orange.png", "purple.png", "red.png", "yellow.png"];

let colors = ["black", "blue", "green", "purple", "red", "yellow", "colors"];
// var colors = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];

let colors_hmong = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];
let animals = ["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey", "tiger", "animals"];

let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'numbers'];

// var cardElements = document.getElementsByClassName("category-container");
// // console.log(elements)
// for (var i = 0; i < cardElements.length; i++) {
//   cardElements[i].addEventListener('click', myFunction);
// }
//
// function myFunction() {
//   var tom1 = new Audio("elephant.mp3");
//   tom1.play();
// }
let counter = 1

create_button_generator3(colors)
create_button_generator3_views(animals)
// create_button_generator6_views(animals)
create_button_generator6_views(numbers)
// if (counter ==1){
//   create_sound(colors)
//   counter = 9999;
// }

// This makes button generate card's given the category list with according sound mp3
function create_button_generator1(category_list){
  let category_name = category_list[category_list.length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {

    const swiper_str = create_str2(category_list);

    if (document.querySelector(".swiper-container")) {
      console.log('category already exist');
      remove_category();
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    } else {
      console.log('category does not exist')
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    }
    create_sound(category_list)
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // scrollbar: {
      //    el: '.swiper-scrollbar',
      //    draggable: true,
      // },
    });
  });
}

function create_button_generator3(category_list){
  let category_name = category_list[category_list.length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {

    const swiper_str = create_str3(category_list);

    if (document.querySelector(".swiper-container")) {
      console.log('category already exist');
      remove_category();
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    } else {
      console.log('category does not exist')
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
  });
}

function create_button_generator3_views(category_list){
  let category_name = category_list[category_list.length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {

    const swiper_str = create_str3(category_list);

    if (document.querySelector(".swiper-container")) {
      console.log('category already exist');
      remove_category();
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    } else {
      console.log('category does not exist')
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
  });
}

function create_button_generator6_views(category_list){
  let category_name = category_list[category_list.length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {

    const swiper_str = create_str6(category_list);

    if (document.querySelector(".swiper-container")) {
      console.log('category already exist');
      remove_category();
      document.querySelector(".row-custom").insertAdjacentHTML('afterend', swiper_str);
    } else {
      console.log('category does not exist')
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
  });
}


function remove_category() {
  let myobj = document.querySelector(".swiper-container");
  myobj.remove();
}

function create_sound(category_list) {
  for (let i = 0; i < category_list.length - 1; i++) {

    let sound_category = category_list[category_list.length - 1];
    let sound_name = category_list[i];
    let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";

    console.log(sound_name)
    console.log(String(i) + ":" + audio_link);
    console.log(document.querySelectorAll('.sound_element')[i]);
    document.querySelectorAll('.sound_element')[i].addEventListener("click", function() {
      console.log("added click function to" + String(i));
      let voice_recording = new Audio(audio_link);
       console.log(audio_link)
      voice_recording.play();
    });
  }
}


function create_str1(category_list) {

  const category_string1 = '<div class="swiper-container z-container swiper-container-initialized swiper-container-vertical"> <div class="swiper-wrapper">';
  // const category_string1 = '<div class="swiper-container z-container"> <div class="swiper-wrapper">';
  let running_str = "";
  let running_pagination = "";

  for (let i = 0; i < category_list.length - 1; i++) {
    const swiper_slide = '  <div class="swiper-slide sound_element">';
    const category_container = '<div class="category-container">';
    const image_container = '<div class="image-container">';
    const image_url = "images/" + category_list[category_list.length - 1] + "/" + category_list[i] + ".png";
    const image_html = '<img class="image-size" src="' + image_url + '">';
    // console.log(image_html);
    const first_half = swiper_slide + category_container + image_container  + image_html;
    const text_contaer = '<div class="text-container">';
    const english_text = category_list[i];
    const hmong_text = category_list[i];
    const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
    const english_html = '<h1 class="english-text">' + english_text + '</h1>';
    const row_end = '</div></div></div></div>';
    const second_half = text_contaer + hmong_html + english_html + row_end;
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
    const end_str = pag_1 + pag_2 + running_pagination + pag_end;

    // const end_str = '</div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div></div>';
    let final_str = category_string1 + running_str + end_str;
    return final_str
  }


  function create_str2(category_list) {

    const category_string1 = '<div class="swiper-container z-container"> <div class="swiper-wrapper">';
    // const category_string1 = '<div class="swiper-container z-container"> <div class="swiper-wrapper">';
    let running_str = "";
    let running_pagination = "";

    for (let i = 0; i < category_list.length - 1; i++) {
      const swiper_slide = '  <div class="swiper-slide sound_element">';
      const category_container = '<div class="category-container">';
      const image_container = '<div class="image-container">';
      const image_url = "images/" + category_list[category_list.length - 1] + "/" + category_list[i] + ".png";
      const image_html = '<img class="image-size" src="' + image_url + '">';
      // console.log(image_html);
      const first_half = swiper_slide + category_container + image_container  + image_html;
      const text_contaer = '<div class="text-container">';
      const english_text = category_list[i];
      const hmong_text = category_list[i];
      const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
      const english_html = '<h1 class="english-text">' + english_text + '</h1>';
      const row_end = '</div></div></div></div>';
      const second_half = text_contaer + hmong_html + english_html + row_end;
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

      for (let i = 0; i < category_list.length - 1; i++) {
        const swiper_slide = '  <div class="swiper-slide sound_element">';
        const category_container = '<div class="category-container">';
        const image_container = '<div class="image-container">';
        const image_url = "images/" + category_list[category_list.length - 1] + "/" + category_list[i] + ".png";
        const image_html = '<img class="image-size" src="' + image_url + '">';
        // console.log(image_html);
        const first_half = swiper_slide + category_container + image_container  + image_html;
        const text_contaer = '<div class="text-container">';
        const english_text = category_list[i];
        const hmong_text = category_list[i];
        const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
        const english_html = '<h1 class="english-text">' + english_text + '</h1>';
        const row_end = '</div></div></div></div>';
        const second_half = text_contaer + hmong_html + english_html + row_end;
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

        for (let i = 0; i < category_list.length - 1; i++) {
          const swiper_slide = '  <div class="swiper-slide six_swiper_slider sound_element">';
          const category_container = '<div class="category-container">';
          const image_container = '<div class="image-container">';
          const image_url = "images/" + category_list[category_list.length - 1] + "/" + category_list[i] + ".png";
          const image_html = '<img class="image-size6" src="' + image_url + '">';
          // console.log(image_html);
          const first_half = swiper_slide + category_container + image_container  + image_html;
          const text_contaer = '<div class="text-container">';
          const english_text = category_list[i];
          const hmong_text = category_list[i];
          const hmong_html = '<h1 class="hmong-text">' + hmong_text + '</h1>';
          const english_html = '<h1 class="english-text">' + english_text + '</h1>';
          const row_end = '</div></div></div></div>';
          const second_half = text_contaer + hmong_html + english_html + row_end;
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
