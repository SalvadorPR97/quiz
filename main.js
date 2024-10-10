import './style.css'

const body = document.querySelector("body");
const tittle = "Quiz Question";
const question = "What is the capital of France?"

const answers = ["London","Berlin","Paris","Madrid"]

const controllersText = ["Preview", "Next"];

const div1 = document.createElement("div");
div1.className = "container";

const h2_1 = document.createElement("h2");
h2_1.textContent = tittle;

const p1 = document.createElement("p");
p1.textContent = question;

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


