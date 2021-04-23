// document.querySelectorAll('')


// colors
let colors_png = ["black.png", "blue.png", "brown.png", "gray.png", "green.png", "orange.png", "purple.png", "red.png", "yellow.png"];

let colors = ["black", "blue", "green", "purple", "red", "yellow", "colors"];
// let colors = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];

let colors_hmong = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];


let cardElements = document.getElementsByClassName("card-custom");

let elemments2 = document.querySelectorAll(".card-custom");
console.log(elemments2);

let colorElements = document.querySelector(".colors");
console.log(colorElements);

// how to change the text with a button press
document.querySelector(".colors").addEventListener("click", function() {
  document.querySelector(".category_div h1").innerText = "Category: Colors";
  // document.querySelector(".category_div h1").before(document.createElement("div"));
  // document.querySelector(".category_div h1").after(document.createElement("img"));
  const div_tag = ' <div class="image-custom"> </div>';
  const div_tag2 = '<div class="card-custom"><div class="image-custom"><img src="images/colors/blue.png"> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div>';
  console.log(div_tag);

  const div_tag3 = ' <div class = "new_category"><div class="row"> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> </div> <div class="row"> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> </div> <div class="row"> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> </div> </div>';

  const div_tag4 = create_str2(colors);

  if (document.querySelector(".new_category")) {
    console.log('category already exist');
  } else {
    console.log('category does not exist')
    document.querySelector(".category_div h1").insertAdjacentHTML('afterend', div_tag4);
  }
  for (let i = 0; i < colors.length - 1; i++) {
    // if (colors[i] == "brown" || colors[i] == "gray" || colors[i] == "orange") {
    //   console.log(colors[i] + " skip")
    //   continue;
    // }
    // let image_html = "images/" + colors[colors.length - 1] + "/" + colors[i] + ".png"
    // // console.log(image_html)
    // let english_text = colors[i];
    // let hmong_text = colors_hmong[i];
    let sound_category = colors[colors.length - 1];
    let sound_name = colors[i];
    let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
    // ADDing sound to the generateHTML
    // console.log(String(i) + ":" + audio_link);

    console.log(sound_name)
    console.log(String(i) + ":" + audio_link);
    console.log(document.querySelectorAll('.sound_element')[i]);
    document.querySelectorAll('.sound_element')[i].addEventListener("click", function() {
      console.log("added click function to" + String(i));
      let voice_recording = new Audio(audio_link);
       console.log(audio_link)
      voice_recording.play();
    });
    // console.log(audio_link);
    // document.querySelector(".category_div h1").after(generate_card3(image_html, english_text, hmong_text, audio_link));
    // cardElements[i].addEventListener('click', playSound(audio_link));
  }
});


document.querySelector('.add_sound').addEventListener("click", function(){
  for (let i = 0; i < document.querySelectorAll('.sound_element').length - 1; i++) {
    // if (colors[i] == "brown" || colors[i] == "gray" || colors[i] == "orange") {
    //   console.log(colors[i] + " skip")
    //   continue;
    // }
    // let image_html = "images/" + colors[colors.length - 1] + "/" + colors[i] + ".png"
    // // console.log(image_html)
    // let english_text = colors[i];
    // let hmong_text = colors_hmong[i];
    let sound_category = colors[colors.length - 1];
    let sound_name  = colors[i];
    let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";

    // ADDing sound to the generateHTML
    // console.log(String(i) + ":" + audio_link);
    console.log(String(i) + ":" + audio_link);
    //console.log(document.querySelectorAll('.sound_element')[i]);
    document.querySelectorAll('.sound_element')[i].addEventListener("click", function() {
      let localSoundName = sound_name;

      console.log(sound_name, 'inside event listener')
      console.log(String(i) + ":" + audio_link);
      let voice_recording = new Audio(audio_link);


       console.log(audio_link, 'audio link');
      voice_recording.play();
    });
  }
});

// if (document.querySelector('.sound_element')) {
//   for (let i = 0; i < colors.length - 1; i++){
//     let sound_category = colors[colors.length - 1];
//     let sound_name = colors[i];
//     let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
//     console.log(sound_name)
//     console.log(String(i) + ":" + audio_link);
//     console.log(document.querySelectorAll('.sound_element')[i]);
//     document.querySelectorAll('.sound_element')[i].addEventListener("click", function() {
//       console.log(sound_name)
//       console.log(String(i) + ":" + audio_link);
//       let voice_recording = new Audio(audio_link);
//       // console.log(audio_link)
//       voice_recording.play();
//     });
//   }
// }


document.querySelector('.remove').addEventListener("click", function() {
  document.querySelector(".category_div h1").innerText = "Category: None";
  remove_category();
});

function remove_category() {
  let myobj = document.querySelector(".new_category");
  myobj.remove();
}


function generate_color_cards() {
  for (let i = 0; i < colors.length - 1; i++) {
    // if (colors[i] == "brown" || colors[i] == "gray" || colors[i] == "orange") {
    //   console.log(colors[i] + " skip")
    //   continue;
    // }
    let image_html = "images/" + colors[colors.length - 1] + "/" + colors[i] + ".png"
    // console.log(image_html)
    let english_text = colors[i];
    let hmong_text = colors_hmong[i];
    let sound_category = colors[colors.length - 1];
    let sound_name = english_text;
    let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
    // console.log(audio_link);
    generate_card2(image_html, english_text, hmong_text, audio_link);
    // cardElements[i].addEventListener('click', playSound(audio_link));
  }
}




function playSound(audio_link) {
  // let sound_category = sound_list[sound_list.length-1];
  // let sound_name = sound_name;
  // let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
  // console.log(audio_link);
  let tom1 = new Audio(audio_link);
  tom1.play();
}

// function playSound2(sound_list, sound_name) {
//   let sound_category = sound_list[sound_list.length - 1];
//   let sound_name = sound_name;
//   let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
//   // console.log(audio_link)
//   let tom1 = new Audio(audio_link);
//   tom1.play();
// }

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  // this is how you add a class to tag/etc
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}



function myFunction() {
  let tom1 = new Audio("sounds/colors/yellow.mp3");
  tom1.play();
}

random_pic = "https://source.unsplash.com/random";


function create_str(category_list) {
  const category_string1 = '<div class="col-9 row-custom">';
  // for (let i = 0; i < category_list.length - 1; i++) {
  const category_row = '<div class="row"><div class="col-lg-3 col-md-6"><div class="card2"><div class="image-custom">'
  const image_url = 'https://source.unsplash.com/random';
  console.log(image_url)
  // const image_url = "images/" + category_list[category_list.length - 1] + "/" + category_list[i] + ".png"
  const image_html = '<img class="image-size" src="' + image_url + '">';
  console.log(image_html)
  // + image_url '">'
  const category2 = '</div><div class="text-custom">'
  const english_text = "english text";
  const hmong_text = "hmong text";
  // const english_text = category_list[i];
  // const hmong_text = category_list[i];
  const hmong_html = '<p>' + hmong_text + '</p>'
  const english_html = '<p>' + english_text + '</p>'
  const row_end = '</div></div></div>'
  const all_str = category_row + image_html + category2 + english_text + hmong_text + english_html + row_end;
  console.log(all_str);
}

create_str();

function create_str2(category_list) {
  const category_string1 = '<div class="new_category">';
  let running_str = "";
  let counter = 3;

  // i did this wrong, i got to change the rows every 4 number's!

  for (let i = 0; i < category_list.length - 1; i++) {
    if (category_list[i] == "brown" || category_list[i] == "gray" || category_list[i] == "orange") {
      console.log(category_list[i] + " skip_creating_str2");
      continue;
    }
    // only do it for the first 4
    if (counter == 3) {
      console.log('hello');
    }
    const row_div = '<div class="row">';
    // add a for loop that does 4 times
    const category_row = '<div class="col-lg-3 col-md-6 sound_element"><div class="card2"><div class="image-custom">';
    // const image_url = 'https://source.unsplash.com/random';
    // console.log(image_url)
    const image_url = "images/" + category_list[category_list.length - 1] + "/" + category_list[i] + ".png";
    const image_html = '<img class="image-size" src="' + image_url + '">';
    console.log(image_html);
    // + image_url '">'
    const category2 = '</div><div class="text-custom">';
    // const english_text = "english text";
    // const hmong_text = "hmong text";
    const english_text = category_list[i];
    const hmong_text = category_list[i];
    const hmong_html = '<p>' + hmong_text + '</p>';
    const english_html = '<p>' + english_text + '</p>';
    const row_end = '</div></div></div>'
    if (counter == 3) {
      let all_str = row_div + category_row + image_html + category2 + hmong_html + english_html + row_end;
      // running_str = running_str + all_str;
      running_str = running_str.concat(all_str);
      counter = 0;
    } else if (counter == 2) {
      let all_str = category_row + image_html + category2 + hmong_html + english_html + row_end + '</div>';
      // running_str = running_str + all_str;
      running_str = running_str.concat(all_str);
      counter = counter + 1;
    } else {
      let all_str = category_row + image_html + category2 + hmong_html + english_html + row_end;
      // running_str = running_str + all_str;
      running_str = running_str.concat(all_str);
      counter = counter + 1;
    }
  }

  console.log(running_str);
  const category_string2 = '</div></div>';
  const final_div = category_string1 + running_str + category_string2;
  console.log(final_div);
  return final_div;
}

create_str2(colors);
