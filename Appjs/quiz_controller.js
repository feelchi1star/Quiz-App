// Creating a functionality for the Quiz
function Quiz(questions) {
  // Get the scores from a user
  this.score = 0;
  // sets the question
  this.questions = questions;
  // gets the index of a from the user
  this.questionsIndex = 0;
}
//  Check if the Question has ended by Index number?
Quiz.prototype.getQuestionIndex = function () {
  //Getthe index of the question
  return this.questions[this.questionsIndex];
};
// Check if the questions has ended or not
Quiz.prototype.isEnd = function () {
  return this.questions.length === this.questionsIndex;
};
// Check if the Answer is correct or not
Quiz.prototype.guess = function (answer) {
  // Increment question index whether guess is correct or wrong

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
  this.questionsIndex++;
};
