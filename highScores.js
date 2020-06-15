let saveBtn = document.getElementById("saveTimeBtn");
let userTime = localStorage.getItem("userTime");
let userScore = document.getElementById("score");

userScore.innerHTML = userTime;

//declared get localStorage value for userTime in quiz.js file

function addScore() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "newDiv");
  document.getElementById("scoreList").appendChild(newDiv);
  newDiv.innerHTML = userTime;

  localStorage.setItem("userTime", userTime);
}

saveBtn.addEventListener("click", function () {
  addScore();
  localStorage.setItem("userTime", userTime);
});
