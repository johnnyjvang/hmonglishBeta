// document.querySelectorAll('')


// colors
let colors_png = ["black.png", "blue.png", "brown.png", "gray.png", "green.png", "orange.png", "purple.png", "red.png", "yellow.png"];

let colors = ["black", "blue", "green", "pink", "purple", "red", "white", "yellow", "colors"];
// let colors = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];

let animals = ["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey", "tiger", "animals"];

let colors_hmong = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];


let cardElements = document.getElementsByClassName("card-custom");

let elemments2 = document.querySelectorAll(".card-custom");
console.log(elemments2);

let colorElements = document.querySelector(".colors");
console.log(colorElements);

create_button_generator(colors);
create_button_generator(animals);

// This makes button generate card's given the category list with according sound mp3
function create_button_generator(category_list){
  let category_name = category_list[category_list.length -1]
  document.querySelector("." + category_name).addEventListener("click", function() {
    document.querySelector(".category_div h1").innerText = "Category: "+ category_name;

    const div_tag4 = create_str2(category_list);

    if (document.querySelector(".new_category")) {
      console.log('category already exist');
      remove_category();
      document.querySelector(".category_div h1").insertAdjacentHTML('afterend', div_tag4);
    } else {
      console.log('category does not exist')
      document.querySelector(".category_div h1").insertAdjacentHTML('afterend', div_tag4);
    }
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
  });
}


document.querySelector('.remove').addEventListener("click", function() {
  document.querySelector(".category_div h1").innerText = "Category: None";
  remove_category();
});

function remove_category() {
  let myobj = document.querySelector(".new_category");
  myobj.remove();
}



function create_str2(category_list) {
  const category_string1 = '<div class="new_category">';
  let running_str = "";
  let counter = 3;

  // i did this wrong, i got to change the rows every 4 number's!

  for (let i = 0; i < category_list.length - 1; i++) {
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
