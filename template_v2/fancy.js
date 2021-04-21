// document.querySelectorAll('')


// colors
var colors_png = ["black.png", "blue.png", "brown.png", "gray.png", "green.png", "orange.png", "purple.png", "red.png", "yellow.png"];

var colors = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];

var colors_hmong = ["black", "blue", "brown", "gray", "green", "orange", "purple", "red", "yellow", "colors"];


var cardElements = document.getElementsByClassName("card-custom");

var elemments2 = document.querySelectorAll(".card-custom");
console.log(elemments2);

var colorElements = document.querySelector(".colors");
console.log(colorElements);

// how to change the text with a button press
document.querySelector(".colors").addEventListener("click", function() {
  document.querySelector(".category_div h1").innerText = "Category: Colors";
  // document.querySelector(".category_div h1").before(document.createElement("div"));
  // document.querySelector(".category_div h1").after(document.createElement("img"));
  for (var i = 0; i < colors.length - 1; i++) {
    if (colors[i] == "brown" || colors[i] == "gray" || colors[i] == "orange") {
      console.log(colors[i] + " skip")
      continue;
    }
    var image_html = "images/" + colors[colors.length - 1] + "/" + colors[i] + ".png"
    // console.log(image_html)
    var english_text = colors[i];
    var hmong_text = colors_hmong[i];
    var sound_category = colors[colors.length - 1];
    var sound_name = english_text;
    var audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
    // console.log(audio_link);
    // document.querySelector(".category_div h1").after(generate_card3(image_html, english_text, hmong_text, audio_link));
    // cardElements[i].addEventListener('click', playSound(audio_link));
  }
  const div_tag = ' <div class="image-custom"> </div>';
  const div_tag2 = '<div class="card-custom"><div class="image-custom"><img src="images/colors/blue.png"> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div>';
  console.log(div_tag);

  const div_tag3 = ' <div class = "new_category"><div class="row"> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> </div> <div class="row"> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> </div> <div class="row"> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card2"> <div class="image-custom"> <img class="image-size" src="https://source.unsplash.com/random" alt=""> </div> <div class="text-custom"> <p>English Translation</p> <p>Hmong Translation</p> </div> </div> </div> </div> </div>';

  if (document.querySelector(".new_category")) {
    console.log('category already exist');
  } else {
    console.log('category does not exist')
    document.querySelector(".category_div h1").insertAdjacentHTML('afterend', div_tag3);
  }
  // document.querySelector(".category_div h1").insertAdjacentHTML('afterend', div_tag3);
  // generate_color_cards()
  // document.querySelector(".category_div h1").after(generate_color_cards());
  // document.querySelector(".category_div h1").after(generate_color_cards());
});

document.querySelector('.remove').addEventListener("click", function(){
  document.querySelector(".category_div h1").innerText = "Category: None";
  remove_category();
});

function remove_category() {
  var myobj = document.querySelector(".new_category");
  myobj.remove();
}


function generate_color_cards() {
  for (var i = 0; i < colors.length - 1; i++) {
    if (colors[i] == "brown" || colors[i] == "gray" || colors[i] == "orange") {
      console.log(colors[i] + " skip")
      continue;
    }
    var image_html = "images/" + colors[colors.length - 1] + "/" + colors[i] + ".png"
    // console.log(image_html)
    var english_text = colors[i];
    var hmong_text = colors_hmong[i];
    var sound_category = colors[colors.length - 1];
    var sound_name = english_text;
    var audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
    // console.log(audio_link);
    generate_card2(image_html, english_text, hmong_text, audio_link);
    // cardElements[i].addEventListener('click', playSound(audio_link));
  }
}


// for (var i = 0; i < cardElements.length; i++) {
//   console.log(colors[i])
//   cardElements[i].addEventListener('click', function() {
//     var sound_category = colors[colors.length - 1];
//     var sound_name = colors[i];
//     var audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
//     console.log(audio_link)
//     var tom1 = new Audio(audio_link);
//     tom1.play();
//   });
// }


function playSound(audio_link) {
  // var sound_category = sound_list[sound_list.length-1];
  // var sound_name = sound_name;
  // var audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
  // console.log(audio_link);
  var tom1 = new Audio(audio_link);
  tom1.play();
}

function playSound2(sound_list, sound_name) {
  var sound_category = sound_list[sound_list.length - 1];
  var sound_name = sound_name;
  var audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";
  // console.log(audio_link)
  var tom1 = new Audio(audio_link);
  tom1.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  // this is how you add a class to tag/etc
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

// generate_card();
// generate_card();



// console.log(elements)
// for (var i = 0; i < cardElements.length; i++) {
//   cardElements[i].addEventListener('click', myFunction);
// }

function myFunction() {
  var tom1 = new Audio("sounds/colors/yellow.mp3");
  tom1.play();
}



// for (var i=0; i<document.querySelectorAll('.listen').length; i++){
//   document.querySelectorAll(".listen")[i].addEventListener("click", function(){
//     // this.style.color="white";
//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);
//   });
// }

random_pic = "https://source.unsplash.com/random";

// from an exel or text file, have all the names of the listed? and then convert that
// into a list so that it isn't entirely hard coded?

// for now lets hard code and then probably change it to sql data


// generate card with inputs
// generate_card2(random_pic,"hmong", "english");


function generate_card2(image_url, hmong_text, english_text, sound_url) {
  let bodyElement = document.createElement('div');
  // The document.createElement() method creates html element specified by tagName
  let cardElement = document.createElement('div');
  let imageContainer = document.createElement('div');
  let infoContainer = document.createElement('div');
  let imageElement = document.createElement('img');
  let paragraphElement = document.createElement('p');
  let paragraphElement2 = document.createElement('p');

  // The className property gets and sets the value of the class attribute of The
  // speicifed element
  // we initalized the "let" variables, now we need to give them classes
  // cardElement.className = "card-custom";
  cardElement.className = "card-custom";
  imageContainer.className = "image-container";
  infoContainer.className = "text-custom";
  imageElement.className = "image-custom";
  paragraphElement.className = "paragraph-custom";
  paragraphElement2.className = "paragraph-custom";

  // Works the same way as the className property except it sets the source
  // attribute of the imageElement
  imageElement.src = image_url;

  // This sets the value of an attribute specified by an elemnt if exist then will update, otherwise the new attribute is added with the specified name and value

  // imageElement.setAttribute("alt", "Im");

  // headingElement.innerText = "Unsplash API";
  paragraphElement.innerText = english_text;
  paragraphElement2.innerText = hmong_text;

  // btnElement.innerText = "Learn more";

  // ADDing sound to the generateHTML
  cardElement.addEventListener("click", function() {
    let voice_recording = new Audio(sound_url);
    voice_recording.play();
  });


  bodyElement.appendChild(cardElement);
  cardElement.append(imageContainer, infoContainer);
  imageContainer.appendChild(imageElement);
  infoContainer.append(paragraphElement, paragraphElement2);
}


function generate_card3(image_url, hmong_text, english_text, sound_url) {
  // let bodyElement = document.body;
  // The document.createElement() method creates html element specified by tagName
  let cardElement = document.createElement('div');
  let imageContainer = document.createElement('div');
  let infoContainer = document.createElement('div');
  let imageElement = document.createElement('img');
  let paragraphElement = document.createElement('p');
  let paragraphElement2 = document.createElement('p');

  // The className property gets and sets the value of the class attribute of The
  // speicifed element
  // we initalized the "let" variables, now we need to give them classes
  // cardElement.className = "card-custom";
  cardElement.className = "card-custom";
  imageContainer.className = "image-container";
  infoContainer.className = "text-custom";
  imageElement.className = "image-custom";
  paragraphElement.className = "paragraph-custom";
  paragraphElement2.className = "paragraph-custom";

  // Works the same way as the className property except it sets the source
  // attribute of the imageElement
  imageElement.src = image_url;

  // This sets the value of an attribute specified by an elemnt if exist then will update, otherwise the new attribute is added with the specified name and value

  // imageElement.setAttribute("alt", "Im");

  // headingElement.innerText = "Unsplash API";
  paragraphElement.innerText = english_text;
  paragraphElement2.innerText = hmong_text;

  // btnElement.innerText = "Learn more";

  // ADDing sound to the generateHTML
  cardElement.addEventListener("click", function() {
    let voice_recording = new Audio(sound_url);
    voice_recording.play();
  })


  // bodyElement.appendChild(cardElement);
  cardElement.append(imageContainer, infoContainer);
  imageContainer.appendChild(imageElement);
  infoContainer.append(paragraphElement, paragraphElement2);
}
