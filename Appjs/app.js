// Populate Content into the DOM
function populate() {
  if (quiz.isEnd()) {
    // ShowScores
    ShowScores();
  } else {
    // showquestion
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    //   Show Choices
    var choices = quiz.getQuestionIndex().choices;
    for (let x in choices) {
      var element = document.getElementById("choice" + x);
      element.innerHTML = choices[x];
      guess("btn" + x, choices[x]);
    }
    //   show progress
    showProgress();
  }
}

// Show scores
function ShowScores() {
  var gameOverhtml = `<H1> Result</h1>
  
    <p class="lead-red">You Failed: ${quiz.questions.length - quiz.score}</p>
    <p class="lead-green">Numbers of Question Attempted: ${
      quiz.questions.length
    }</p>
      <h2 id="span"> Total Score: ${quiz.score} </h2>`;
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverhtml;
}
// Button Functionality

function guess(id, guess) {
  var Button = document.getElementById(id);
  // add event listner the button element
  Button.onclick = function () {
    quiz.guess(guess);
    // after selecting an item populate with new question
    populate();
  };
}
// Track Progress in the Quiz
function showProgress() {
  var countQuestion = quiz.questionsIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = `Question ${countQuestion} of ${quiz.questions.length}`;
}

populate();
