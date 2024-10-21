import "./style.css";

const body = document.querySelector("body");
const tittle = "Quiz Question";
const quizElements = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Berlín", "Paris", "Madrid"],
        correctAnswer: "Paris",
    },
    {
        question: "What is the longest river in the world?",
        answers: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
        correctAnswer: "Nilo",
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers: [
            "Jane Austen",
            "Cervantes",
            "William Shakerpeare",
            "Charles Dickens",
        ],
        correctAnswer: "William Shakerpeare",
    },
    {
        question: "How many planets are there in our solar system?",
        answers: ["7", "8", "9", "10"],
        correctAnswer: "8",
    },
];

let questionCounter = 0;
let todosTienenRespuesta = false;
const controllersText = ["Preview", "Next", "Check"];

//Función para marcar respuestas
function marcarRespuesta(btn) {
    quizElements[questionCounter]["respuesta"] = btn.textContent;
    ul1.childNodes.forEach((li) => {
        li.firstChild.style.backgroundColor = "#f8f8f8";
        li.firstChild.choosed = "false";
    });
    btn.style.backgroundColor = "#3CB371";
    btn.choosed = "true";
}
// Marca la respuesta correcta seleccionada anteriormente
function marcarCorrecta() {
    ul1.childNodes.forEach((li) => {
        if (
            li.firstChild.textContent ==
            quizElements[questionCounter]["respuesta"]
        ) {
            li.firstChild.style.backgroundColor = "#3CB371";
        }
    });
}

// Función para generar las respuestas
function generarRespuestas(indice) {
    while (ul1.firstChild) {
        ul1.removeChild(ul1.firstChild);
    }
    let counter = 0;
    quizElements[indice]["answers"].forEach((answer) => {
        let btn = document.createElement("button");
        let li = document.createElement("li");
        btn.className = "answer-btn";
        btn.textContent = answer;
        btn.addEventListener("click", () => {
            marcarRespuesta(btn);
            //Comprueba si se han respondido todas y modifica el boolean
            if (!todosTienenRespuesta) {
                todosTienenRespuesta = quizElements.every((elemento) =>
                    elemento.hasOwnProperty("respuesta")
                );
            }
            //Si la variable booleana es true, activamos el botón de check
            if (todosTienenRespuesta) {
                btnCheck.disabled = false;
            }
        });
        counter++;
        li.append(btn);
        ul1.append(li);
    });
}
//Construcción del quiz
const div1 = document.createElement("div");
div1.className = "container";
const h2_1 = document.createElement("h2");
h2_1.textContent = tittle;
const p1 = document.createElement("p");
p1.textContent = quizElements[questionCounter]["question"];
const ul1 = document.createElement("ul");
ul1.className = "container-answers";
generarRespuestas(questionCounter);
const div2 = document.createElement("div");
div2.className = "container-footer";

controllersText.forEach((controllerText) => {
    let btn = document.createElement("button");
    btn.className = "footer-btn";
    btn.textContent = controllerText;
    div2.append(btn);
});

body.append(div1);
div1.append(h2_1, p1, ul1, div2);

//Construcción del Modal
const divModalExt = document.createElement("div");
divModalExt.className = "modal";
const divModalInt = document.createElement("div");
divModalInt.className = "modal-content";
const pModalX = document.createElement("p");
pModalX.className = "modal-close";
pModalX.textContent = "X";
pModalX.addEventListener("click", () => {
    divModalExt.style.visibility = "hidden";
    divModalExt.style.opacity = 0;
});

//Funcionalidad botones
let footerBtns = document.querySelectorAll(".footer-btn");
let btnPreview = footerBtns[0];
let btnNext = footerBtns[1];
const btnCheck = footerBtns[2];

// Primer inicio de quiz
if (p1.textContent == quizElements[0]["question"]) {
    btnPreview.disabled = true;
    btnCheck.disabled = true;
}

//Evento de botón preview
btnPreview.addEventListener("click", () => {
    if (questionCounter == quizElements.length - 1) {
        btnNext.disabled = false;
    }
    questionCounter--;
    p1.textContent = quizElements[questionCounter]["question"];
    generarRespuestas(questionCounter);
    marcarCorrecta();
    if (p1.textContent == quizElements[0]["question"]) {
        btnPreview.disabled = true;
    }
});

//Evento de botón Next
btnNext.addEventListener("click", () => {
    if (questionCounter == 0) {
        btnPreview.disabled = false;
    }
    questionCounter++;
    p1.textContent = quizElements[questionCounter]["question"];

    generarRespuestas(questionCounter);
    marcarCorrecta();
    if (p1.textContent == quizElements.at(-1)["question"]) {
        btnNext.disabled = true;
    }
});

//Evento del boton Check
btnCheck.addEventListener("click", () => {
    let respuestasCorrectas = 0;
    quizElements.forEach((elemento) => {
        if (elemento["correctAnswer"] == elemento["respuesta"]) {
            respuestasCorrectas++;
        }
    });
    mostrarModal(respuestasCorrectas);
});

//Añade el resultado al modal y lo muestra
function mostrarModal(respuestasCorrectas) {
    pModalText.textContent =
        respuestasCorrectas + " correct answers from " + quizElements.length;
    divModalExt.style.visibility = "visible";
    divModalExt.style.opacity = 1;
}

//Oculta el modal si hacemos click fuera de él
window.addEventListener("click", function (event) {
    if (event.target == divModalExt) {
        divModalExt.style.visibility = "hidden";
        divModalExt.style.opacity = 0;
    }
});
