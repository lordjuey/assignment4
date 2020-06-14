//start with timer in the quiz
let time = 100;
let counter = document.getElementById("timeCounter");
let question = document.querySelector("#theQuestion");
let ans1 = document.querySelector("#answer1");
let ans2 = document.querySelector("#answer2");
let ans3 = document.querySelector("#answer3");
let ans4 = document.querySelector("#answer4");

//start the timer on top

function countdown() {
  time--;
  counter.innerHTML = time;
  if (time == 0) {
    alert("times up!");
    alert("go see your score");
    location.href = "highScores.html";
  }
  //add a line that stops the quiz when timer hits 0
  time = time < 0 ? 0 : time;
}

let isAnswer = true; // come back to it
let questionCount = 0;

let allQuestions = [
  {
    q: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { a1: "<script>", answer: true },
      { a2: "<js>", answer: false },
      { a3: "<nike>", answer: false },
      { a4: "<robertBaratheon>", answer: false },
    ],
  },
  {
    q: "Where is the correct place to insert a JavaScript?",

    answers: [
      { a1: "the <head> section", answer: false },
      { a2: "the <body> section", answer: true },
      { a3: "uptheBum", answer: false },
      { a4: "the <where> section", answer: false },
    ],
  },
  {
    q:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",

    answers: [
      { a1: "<script name ='xxx.js'>", answer: false },
      { a2: "<robertBaratheon='xxx.java'>", answer: false },
      { a3: "<script src='xxx.js'>", answer: true },
      { a4: "<nike jordan 'xxx.js'>", answer: false },
    ],
  },
  {
    q: "How do you write 'Hello World' in an alert box?",

    answers: [
      { a1: "msg('hello world')", answer: false },
      { a2: "alertBox('hello world')", answer: false },
      { a3: "bentoBox('hello world')", answer: false },
      { a4: "alert('hello world')", answer: true },
    ],
  },
];

//test if the array is working correctly
console.log(allQuestions[0].q);
console.log(allQuestions[2].q);
console.log(allQuestions[0].answers[0].a1.answer);

function startQuiz() {
  question.textContent = allQuestions[0].q;
  ans1.textContent = allQuestions[0].answers[0].a1;
  ans2.textContent = allQuestions[0].answers[1].a2;
  ans3.textContent = allQuestions[0].answers[2].a3;
  ans4.textContent = allQuestions[0].answers[3].a4;
}

startQuiz();
setInterval(countdown, 1000);
