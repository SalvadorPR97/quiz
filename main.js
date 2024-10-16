import './style.css'

const body = document.querySelector("body");
const tittle = "Quiz Question";
const quizElements = [{"question": "What is the capital of France?", "answers": ["London", "Berlín", "Paris", "Madrid"]},
  {"question": "What is the longest river in the world?", "answers": ["Amazonas", "Nilo", "Yangtsé", "Miño"] },
  {"question": "Who wrote Romeo and Juliet?", "answers": ["Jane Austen", "Cervantes", "William Shakerpeare", "Charles Dickens"] },
  {"question" : "How many planets are there in our solar system?" , "answers" : ["7", "8", "9", "10"]}];

let questionCounter = 0;

const controllersText = ["Preview", "Next"];
//Función para marcar respuestas
function marcarRespuesta(btn) { 
  ul1.childNodes.forEach((li) => {
    li.firstChild.style.backgroundColor = "#f8f8f8";
  });
  btn.style.backgroundColor = "#3CB371"; 
}
// Función para generar las respuestas 
function generarRespuestas (indice){
  while (ul1.firstChild){
    ul1.removeChild(ul1.firstChild);
  };
  quizElements[indice]["answers"].forEach(answer => {
    let btn = document.createElement("button");
    let li = document.createElement("li");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.addEventListener("click", () => { 
      marcarRespuesta(btn);
    });
    li.append(btn);
    ul1.append(li);
  });
}

const div1 = document.createElement("div");
div1.className = "container";

const h2_1 = document.createElement("h2");
h2_1.textContent = tittle;

const p1 = document.createElement("p");
p1.textContent = quizElements[questionCounter]["question"];

const ul1 = document.createElement("ul");
ul1.className = "container-answers"

generarRespuestas(questionCounter);

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

//Funcionalidad botones

let footerBtns = document.querySelectorAll(".footer-btn");
let btnPreview = footerBtns[0];
let btnNext = footerBtns[1];
// Primer inicio de quiz
if (p1.textContent == quizElements[0]["question"]){
  btnPreview.disabled = true;
}
//Evento de botón preview
btnPreview.addEventListener("click", () =>{
  if (questionCounter == quizElements.length -1){
    btnNext.disabled = false;
  }
  questionCounter--;
  p1.textContent = quizElements[questionCounter]["question"];
  generarRespuestas(questionCounter);
  if (p1.textContent == quizElements[0]["question"]){
    btnPreview.disabled = true;
  }
})
//Evento de botón Next
btnNext.addEventListener("click", () =>{
  if (questionCounter == 0){
    btnPreview.disabled = false;
  }
  questionCounter++;
  p1.textContent = quizElements[questionCounter]["question"];
  
  generarRespuestas(questionCounter);
  if (p1.textContent == quizElements.at(-1)["question"]){
    btnNext.disabled = true;
  }
  
})
