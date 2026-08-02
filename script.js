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

let questionText = document.getElementById("question-text");
let optionsList = document.getElementById("options-list");
let progressText = document.getElementById("progress-text");
let progressBarFill = document.getElementById("progress-bar-fill");
let errorMsg = document.getElementById("error-msg");

let quizBox = document.getElementById("quiz-box");
let resultBox = document.getElementById("result-box");
let resultScore = document.getElementById("result-score");
let retakeBtn = document.getElementById("retake-btn");

let prevBtn = document.getElementById("prev-btn");
let dots = document.getElementById("dots");

function render() {
  let currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  let isAnswered = userAnswers[currentQuestionIndex] !== null;

  let optionsHTML = currentQuestion.options
    .map((option, index) => {
      let optionClass = "";

      if (isAnswered) {
        if (index === currentQuestion.correctAnswer) {
          optionClass = "correct";
        } else if (index === userAnswers[currentQuestionIndex]) {
          optionClass = "incorrect";
        }
      }

      let letter = String.fromCharCode(65 + index);

      return `
        <div class="option ${optionClass}" data-index="${index}">
          <span class="option-letter">${letter}</span>
          ${option}
        </div>
      `;
    })
    .join("");

  optionsList.innerHTML = optionsHTML;

  if (isAnswered) {
    optionsList.classList.add("locked");
  } else {
    optionsList.classList.remove("locked");
  }

  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  progressBarFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  nextBtn.textContent =
    currentQuestionIndex === questions.length - 1 ? "Submit" : "Next";

  let dotsHTML = questions
    .map((q, index) => {
      let classes = "dot";
      if (userAnswers[index] !== null) {
        classes += " answered";
      }
      if (index === currentQuestionIndex) {
        classes += " active";
      }
      return `<span class="${classes}" data-index="${index}"></span>`;
    })
    .join("");

  dots.innerHTML = dotsHTML;
}

let userAnswers = new Array(questions.length).fill(null);

optionsList.addEventListener("click", (e) => {
  if (userAnswers[currentQuestionIndex] !== null) {
    return;
  }

  if (e.target.classList.contains("option")) {
    let clickedIndex = Number(e.target.dataset.index);
    userAnswers[currentQuestionIndex] = clickedIndex;
    errorMsg.style.display = "none";
    render();
  }
});

let nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  if (userAnswers[currentQuestionIndex] === null) {
    errorMsg.style.display = "block";
    return;
  }
  errorMsg.style.display = "none";
  if (currentQuestionIndex === questions.length - 1) {
    let score = questions.filter((question, index) => {
      return userAnswers[index] === question.correctAnswer;
    }).length;

    quizBox.style.display = "none";
    resultBox.style.display = "block";
    resultScore.textContent = `${score} / ${questions.length}`;
  } else {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      render();
    }
  }
});
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    render();
  }
});
retakeBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  userAnswers.fill(null);
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  render();
});

render();
