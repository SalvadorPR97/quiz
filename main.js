import './style.css'

const body = document.querySelector("body");
const tittle = "Quiz Question";
const questions = ["What is the capital of France?","What is the longest river in the world?","Who wrote Romeo and Juliet?",
  "How many planets are there in our solar system?"];
let questionCounter = 0;
const answers = ["London","Berlin","Paris","Madrid"]

const controllersText = ["Preview", "Next"];

const div1 = document.createElement("div");
div1.className = "container";

const h2_1 = document.createElement("h2");
h2_1.textContent = tittle;

const p1 = document.createElement("p");
p1.textContent = questions[questionCounter];

const ul1 = document.createElement("ul");
ul1.className = "container-answers"

answers.forEach(answer => {
  let btn = document.createElement("button");
  let li = document.createElement("li");
  btn.className = "answer-btn";
  btn.textContent = answer;
  li.append(btn);
  ul1.append(li);
});

const div2 = document.createElement("div");
div2.className = "container-footer";

controllersText.forEach(controllerText => {
  let btn = document.createElement("button");
  btn.className = "footer-btn";
  btn.textContent = controllerText;
  div2.append(btn);
})

body.append(div1);
div1.append(h2_1, p1, ul1, div2);
//Funcionalidad

let footerBtns = document.querySelectorAll(".footer-btn");
let btnPreview = footerBtns[0];
let btnNext = footerBtns[1];
// Primer inicio de quiz
if (p1.textContent == questions[0]){
  btnPreview.disabled = true;
}
//Evento de botón Next
btnNext.addEventListener("click", () =>{
  if (questionCounter == 0){
    btnPreview.disabled = false;
  }
  questionCounter++;
  p1.textContent = questions[questionCounter];
  if (p1.textContent == questions.at(-1)){
    btnNext.disabled = true;
  }
})
//Evento de botón preview
btnPreview.addEventListener("click", () =>{
  if (questionCounter == questions.length -1){
    btnNext.disabled = false;
  }
  questionCounter--;
  p1.textContent = questions[questionCounter];
  if (p1.textContent == questions.at(0)){
    btnPreview.disabled = true;
  }
})
