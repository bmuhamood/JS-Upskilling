const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "Geography",
    question: "Which continent is the largest by area?",
    choices: ["Africa", "Asia", "Europe"],
    answer: "Asia",
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington",
  },
  {
    category: "Math",
    question: "What is the square root of 64?",
    choices: ["6", "8", "10"],
    answer: "8",
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare",
  }
];

// 2. Function to get a random question
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// 3. Function to get a random computer choice from available choices
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// 4. Function to get results of the computer's choice
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
console.log("Question:", randomQuestion.question);

const computerAnswer = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's Choice:", computerAnswer);

const result = getResults(randomQuestion, computerAnswer);
console.log(result);
