// let allows you to declare variables that are limited to the scope of a block statement
// or expression on which it is used, unlike the var keyword, which declares a variable globally,
// or locally to an entire function regardless of block scope
let bodyElement = document.body;
// The document.createElement() method creates html element specified by tagName
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');

// The className property gets and sets the value of the class attribute of The
// speicifed element
// we initalized the "let" variables, now we need to give them classes
cardElement.className = "card";
imageContainer.className = "image-container";
infoContainer.className = "info-container";
imageElement.className = "image";
headingElement.className = "heading";
paragraphElement.className = "paragraph";
btnElement.className = "btn";

// console.log(imageContainer);

// Works the same way as the className property except it sets the source
// attribute of the imageElement
imageElement.src = "https://source.unsplash.com/random";

// This sets the value of an attribute specified by an elemnt if exist then will update, otherwise the new attribute is added with the specified name and value
btnElement.setAttribute("href", "#");
// console.log(btnElement);
imageElement.setAttribute("alt", "Image from Unsplash");

headingElement.innerText = "Unsplash API";
paragraphElement.innerText = "This sets the value of an attribute specified by an elemnt if exist then will update";

btnElement.innerText = "Learn more";

bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);

imageContainer.appendChild(imageElement);
infoContainer.append(headingElement, paragraphElement, btnElement);
