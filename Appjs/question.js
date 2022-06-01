// Creating a function that takes three parameter: The Question, Chioces and Answer
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

//Creating a function for our function constructor
Question.prototype.correctAnswer = function (choice) {
  //   Returns true if the choice selected is equal to the answer given by the user
  return choice === this.answer;
};
