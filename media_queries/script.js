const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector('.navbar2');


menuIcon.addEventListener("click", () =>{
  navbar.classList.toggle('change')
});


// document.querySelectorAll('.category-container')[0].addEventListener("click", function() {
//   // alert('yeehoo');
//   var tom1 = new Audio("elephant.mp3");
//   tom1.play();
// });


var cardElements = document.getElementsByClassName("category-container");
// console.log(elements)
for (var i = 0; i < cardElements.length; i++) {
  cardElements[i].addEventListener('click', myFunction);
}

function myFunction() {
  var tom1 = new Audio("elephant.mp3");
  tom1.play();
}
