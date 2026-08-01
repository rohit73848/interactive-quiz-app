let questions = [
  {
    question:
      "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2,
  },
  {
    question: "What does the DOM stand for?",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Display Object Management",
      "Document Oriented Markup",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which method is used to select an element by its class name?",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "document.createElement()",
      "document.getAttribute()",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which array method creates a new array with only elements that pass a condition?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    correctAnswer: 2,
  },
  {
    question:
      "What will 'toggle-box' && 'checked' produce when used as a template literal class binding for a completed task?",
    options: [
      "toggle-box checked",
      "checked toggle-box",
      "toggle-boxchecked",
      "None of the above",
    ],
    correctAnswer: 0,
  },
];

let currentQuestionIndex = 0;
let selectedAnswer = null;

let questionText = document.getElementById("question-text");
let optionsList = document.getElementById("options-list");
let progressText = document.getElementById("progress-text");
let progressBarFill = document.getElementById("progress-bar-fill");

function render() {
  let currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  let optionsHTML = currentQuestion.options
    .map((option, index) => {
      return `<div class="option" data-index="${index}">${option}</div>`;
    })
    .join("");

  optionsList.innerHTML = optionsHTML;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  progressBarFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
}
optionsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("option")) {
    let allOptions = document.querySelectorAll(".option");
    allOptions.forEach((opt) => {
      opt.classList.remove("selected");
    });

    e.target.classList.add("selected");
  }
});
render();
