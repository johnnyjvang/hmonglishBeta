document.querySelectorAll('img')[1].addEventListener("click", function() {
  alert('yeehoo');
});

document.querySelectorAll('h2')[0].addEventListener("click", function() {
  // alert('yeehoo');
  var tom1 = new Audio("sounds/color_mp3/yellow.mp3");
  tom1.play();
});

// document.querySelectorAll('')

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  // this is how you add a class to tag/etc
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

generate_card();
generate_card();


var cardElements = document.getElementsByClassName("card-custom");
// console.log(elements)
for (var i = 0; i < cardElements.length; i++) {
  cardElements[i].addEventListener('click', myFunction);
}

function myFunction() {
  var tom1 = new Audio("sounds/color_mp3/yellow.mp3");
  tom1.play();
}

var elemments2 = document.querySelectorAll(".card-custom");
console.log(elemments2);

// for (var i=0; i<document.querySelectorAll('.listen').length; i++){
//   document.querySelectorAll(".listen")[i].addEventListener("click", function(){
//     // this.style.color="white";
//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);
//   });
// }

function generate_card() {
  let bodyElement = document.body;
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
  cardElement.className = "card-custom";
  imageContainer.className = "image-container";
  infoContainer.className = "text-custom";
  imageElement.className = "image-custom";
  paragraphElement.className = "paragraph-custom";
  paragraphElement2.className = "paragraph-custom";

  // Works the same way as the className property except it sets the source
  // attribute of the imageElement
  imageElement.src = "https://source.unsplash.com/random";

  // This sets the value of an attribute specified by an elemnt if exist then will update, otherwise the new attribute is added with the specified name and value

  imageElement.setAttribute("alt", "Image from Unsplash");

  // headingElement.innerText = "Unsplash API";
  paragraphElement.innerText = "English Translation";
  paragraphElement2.innerText = "Hmong Translation";

  // btnElement.innerText = "Learn more";

  bodyElement.appendChild(cardElement);
  cardElement.append(imageContainer, infoContainer);
  imageContainer.appendChild(imageElement);
  infoContainer.append(paragraphElement, paragraphElement2);
}
