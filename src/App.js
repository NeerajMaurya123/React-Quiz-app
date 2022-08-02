import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "The acronym ANSI stands for?",
      answerOption: [
        {
          answerText: "American National Software Incorporation",
          isCorrect: false
        },
        {
          answerText: "American National Standards International",
          isCorrect: false
        },
        {
          answerText: "American National Standards Institute",
          isCorrect: true
        },
        {
          answerText: " American National Standards Instructions",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "Which of the following is not a valid data type in C Language?",
      answerOption: [
        { answerText: "Char", isCorrect: true },
        { answerText: "Double", isCorrect: false },
        { answerText: "Long", isCorrect: false },
        { answerText: " Float", isCorrect: false }
      ]
    },
    {
      questionText: "Who developed C language?",
      answerOption: [
        { answerText: "Ken Thomson", isCorrect: false },
        { answerText: "Peter Norton", isCorrect: false },
        { answerText: "Von Neuman", isCorrect: false },
        { answerText: "Dennis Ritchie", isCorrect: true }
      ]
    },
    {
      questionText:
        "Which of the following are used to enclose the body of a function?",
      answerOption: [
        { answerText: "{}", isCorrect: true },
        { answerText: "[]", isCorrect: false },
        { answerText: "()", isCorrect: false },
        { answerText: "None of above", isCorrect: false }
      ]
    },
    {
      questionText: "The C language is a ____ language?",
      answerOption: [
        { answerText: " Low", isCorrect: false },
        { answerText: "Middle", isCorrect: true },
        { answerText: "High", isCorrect: false },
        { answerText: "None of above", isCorrect: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);

  function refreshPage() {
    window.location.reload(true);
  }

  const answerQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="App">
      {start ? (
        showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <div>
              <button onClick={() => setStart(false)}>Reboot!</button>
            </div>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOption.map((answerOption) => (
                <button onClick={() => answerQuestion(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )
      ) : (
        <>
          <div className="app">
            <h1>Quiz App</h1>
            <h2>Click to start</h2>
            <button onClick={() => setStart(true)}>Start</button>
          </div>
        </>
      )}
    </div>
  );
}
