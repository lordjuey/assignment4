//start with timer in the quiz
let time = 100;
let counter = document.getElementById("timeCounter");
let question = document.querySelector("#theQuestion");
let ans1 = document.querySelector("#answerBox1");
let ans2 = document.querySelector("#answerBox2");
let ans3 = document.querySelector("#answerBox3");
let ans4 = document.querySelector("#answerBox4");
const choices = Array.from(document.getElementsByClassName("choice-text"));

console.log(choices);

let questionCount = 0;
let currentQuestion = {};
let remainingQuestion = [];
let isAnswer = false;

//start the timer on top

function countdown() {
  time--;
  counter.innerHTML = time;
  if (time == 0) {
    alert("times up!");
    alert("go see your score");
    localStorage.setItem("userTime", 0);
    location.href = "highScores.html";
  }
  //add a line that stops the quiz when timer hits 0
  time = time < 0 ? 0 : time;
}

function penalty() {
  time = time - 10;
}

let allQuestions = [
  {
    q: "Inside which HTML element do we put the JavaScript?",

    a1: "<script>",
    a2: "<js>",
    a3: "<nike>",
    a4: "<robertBaratheon>",
    answer: 1,
  },
  {
    q: "Where is the correct place to insert a JavaScript?",

    a1: "the <head> section",
    a2: "the <body> section",
    a3: "uptheBum",
    a4: "the <where> section",
    answer: 2,
  },
  {
    q:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a1: "<script name ='xxx.js'>",
    a2: "<robertBaratheon='xxx.java'>",
    a3: "<script src='xxx.js'>",
    a4: "<nike jordan 'xxx.js'>",
    answer: 3,
  },
  {
    q: "How do you write 'Hello World' in an alert box?",

    a1: "msg('hello world')",
    a2: "alertBox('hello world')",
    a3: "bentoBox('hello world')",
    a4: "alert('hello world')",
    answer: 4,
  },
];

loadQ1 = () => {
  setInterval(countdown, 1000);
  questionCount = 0; //don't need questionCount anymore
  remainingQuestion = [...allQuestions];
  //   console.log(remainingQuestion);

  nextQuestion();

  //   question.textContent = allQuestions[0].q;
  //   ans1.textContent = allQuestions[0].answers[0].a1;
  //   ans2.textContent = allQuestions[0].answers[1].a2;
  //   ans3.textContent = allQuestions[0].answers[2].a3;
  //   ans4.textContent = allQuestions[0].answers[3].a4;

  //   /*add a function that gets right answer from wrong answers
  //         function that starts next question after incrementing questionCounter*/
  //   ans1.addEventListener("click", function (ev) {
  //     ev.preventDefault();
  //     loadQ2();
  //   });
  //   ans2.addEventListener("click", function (ev) {
  //     ev.preventDefault();
  //   });
  //   ans3.addEventListener("click", function (ev) {
  //     ev.preventDefault();
  //   });
  //   ans4.addEventListener("click", function (ev) {
  //     ev.preventDefault();
  //   });
};

function nextQuestion() {
  if (questionCount === 4) {
    alert("you finished the quiz, lets look at the score");
    localStorage.setItem("userTime", time); // localStorage
    return (location.href = "highScores.html");
  }
  questionCount++;
  let qIndex = Math.floor(Math.random() * remainingQuestion.length);
  currentQuestion = remainingQuestion[qIndex];
  question.innerHTML = currentQuestion.q;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.textContent = currentQuestion["a" + number];
  });
  remainingQuestion.splice(qIndex, 1);
  isAnswer = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    //console.log(e.target);
    if (!isAnswer) return;
    isAnswer = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let answerClass = "notAnswer";
    if (selectedAnswer == currentQuestion.answer) {
      answerClass = "answer";
    } else {
      penalty();
    }
    // console.log(answerClass);
    selectedChoice.parentElement.classList.add(answerClass);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(answerClass);
      nextQuestion();
    }, 1000);
  });
});
// loadQ2 = () => {
//   console.log("Q2");
//   question.textContent = allQuestions[1].q;
//   ans1.textContent = allQuestions[1].answers[0].a1;
//   ans2.textContent = allQuestions[1].answers[1].a2;
//   ans3.textContent = allQuestions[1].answers[2].a3;
//   ans4.textContent = allQuestions[1].answers[3].a4;
//   ans1.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
//   ans2.addEventListener("click", function (ev) {
//     ev.preventDefault();
//     loadQ3();
//   });
//   ans3.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
//   ans4.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
// };

// loadQ3 = () => {
//   console.log("q3");
//   question.textContent = allQuestions[2].q;
//   ans1.textContent = allQuestions[2].answers[0].a1;
//   ans2.textContent = allQuestions[2].answers[1].a2;
//   ans3.textContent = allQuestions[2].answers[2].a3;
//   ans4.textContent = allQuestions[2].answers[3].a4;
//   ans1.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
//   ans2.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
//   ans3.addEventListener("click", function (ev) {
//     ev.preventDefault();
//     loadQ4();
//   });
//   ans4.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
// };
// loadQ4 = () => {
//   console.log("q4");
//   question.textContent = allQuestions[3].q;
//   ans1.textContent = allQuestions[3].answers[0].a1;
//   ans2.textContent = allQuestions[3].answers[1].a2;
//   ans3.textContent = allQuestions[3].answers[2].a3;
//   ans4.textContent = allQuestions[3].answers[3].a4;
//   ans1.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
//   ans2.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
//   ans3.addEventListener("click", function (ev) {
//     ev.preventDefault();
//   });
//   ans4.addEventListener("click", function (ev) {
//     ev.preventDefault();
//     console.log("done");
//   });
// };

loadQ1();
