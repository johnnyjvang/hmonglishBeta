const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.getElementsByClassName("create-card")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

function showCreateCardBox(){
  createCard.style.display = "block";
}

function hideCreateCardBox(){
  createCard.style.display = "none";
}

function saveFlashcard(){
  var div = document.createElement("div");
  var h2_question = document.createElement("h2");
  var h2_answer = document.createElement("h2");

  div.className = "flashcard";

  h2_question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
  h2_question.innerHTML = question.value;

  h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
  h2_answer.innerHTML = answer.value;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener("click", function(){
    if(h2_answer.style.display == "none"){
      h2_answer.style.display = "block";
    }
    else{
      h2_answer.style.display = "none";
    }
  })

  div.addEventListener("dblclick", function(){
    div.remove();
  })

  flashcards.insertAdjacentElement("beforeend", div);

  question.value = '';
  answer.value = '';
}