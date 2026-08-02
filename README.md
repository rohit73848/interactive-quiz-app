# 🧠 Interactive Quiz App

A clean, professional multiple-choice quiz app built with vanilla JavaScript, HTML, and CSS — featuring instant answer feedback, progress tracking, and a full answer review mode.

🔗 **Live Demo:** [https://rohit73848.github.io/interactive-quiz-app/](https://rohit73848.github.io/interactive-quiz-app/)

## Features

- ✅ 15 multiple-choice JavaScript questions
- ✅ Instant color feedback (correct/incorrect) with answer locking
- ✅ Next/Previous navigation with input validation
- ✅ Answered-question indicator dots — color-coded and clickable for quick navigation
- ✅ Live progress bar and question counter
- ✅ Score calculation with percentage-based result message
- ✅ Full review mode — see every question, your answer, and the correct answer
- ✅ Retake quiz option
- ✅ Responsive, animated UI with Remix Icons

## Built With

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, keyframe animations, responsive layout
- **JavaScript (Vanilla)** — DOM manipulation, event delegation, array methods (`map`, `filter`, `find`), dynamic state-driven rendering

## Key Concepts Practiced

- Data-driven rendering — the entire UI (questions, options, dots, colors) is generated from a single `questions` array and re-rendered on every state change
- Event delegation for dynamically created options and dots
- State management across multiple linked variables (`currentQuestionIndex`, `userAnswers`)
- Conditional UI logic (locking answered questions, showing correct/incorrect states, enabling review navigation only for answered questions)

## How to Run Locally

1. Clone the repository:
```bash
   git clone https://github.com/rohit73848/interactive-quiz-app.git
```
2. Open `index.html` in your browser — no build steps or dependencies required.

## Note

The core logic (JavaScript — question rendering, answer tracking, scoring, review mode) was written manually. The visual styling (CSS) and icon integration were refined with AI assistance to achieve a polished, professional look; I understand the underlying concepts used (Flexbox, animations, event delegation).

## Author

**Rahit Biswas**  
GitHub: [@rohit73848](https://github.com/rohit73848)