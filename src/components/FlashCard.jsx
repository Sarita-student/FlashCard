import React, { useState } from "react";
import "./FlashCard.css";

const cards = [
  { question: "What is React?", answer: "React is a JavaScript library for UI." },
  { question: "What is useState?", answer: "It manages component state." },
  { question: "Difference between var, let, const?", answer: "let & const are block scoped; var is function scoped." },
  { question: "What is a component in React?", answer: "A component is a reusable piece of UI." },
  { question: "What are props?", answer: "Props are data passed from parent to child components." },
  { question: "What is JSX?", answer: "JSX lets you write HTML-like code inside JavaScript." },
  { question: "What is virtual DOM?", answer: "A lightweight copy of the real DOM used for fast updates." },
  { question: "What is a hook?", answer: "A special function to use React features in functional components." },
  { question: "What is state in React?", answer: "State stores data that can change in a component." },
  { question: "What is React Router?", answer: "A library used for navigation between pages in React apps." }
];

function FlashCard() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const total = cards.length;
  const progress = ((index + 1) / total) * 100;

  const nextCard = () => {
    setIndex((index + 1) % total);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setIndex((index - 1 + total) % total);
    setShowAnswer(false);
  };

  return (
    <div className="container">
      <h2>Flash Cards</h2>

      <div className="cardContainer">
        <div className="progressBox">
          <div className="progressBar">
            <div
              className="progressFill"
              style={{ width: `${progress}%` }}
            >
              {Math.round(progress)}%
            </div>
          </div>
          <span className="progressText">
            {index + 1} of {total}
          </span>
        </div>

        {/* Flip card area */}
        <div className="cardWrapper">
          <div className={`cardInner ${showAnswer ? "flip" : ""}`}>
            <div className="cardFace front">
              {cards[index].question}
            </div>

            <div className="cardFace back">
              {cards[index].answer}
            </div>
          </div>
        </div>

        {/* Buttons outside card */}
        <div className="buttons">
          <button onClick={prevCard}>Previous</button>

          <button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "Show Question" : "Show Answer"}
          </button>

          <button onClick={nextCard}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
