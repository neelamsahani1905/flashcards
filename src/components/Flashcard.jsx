import { useState } from "react";

function Flashcard({ card, updateStatus }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-wrapper">
      <div
        className={`card ${isFlipped ? "flipped" : ""} ${card.status}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-front">
          {card.question}
        </div>

        <div className="card-back">
          <div className="code-container">
            <pre>
              <code>{card.answer}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button
          className="review-btn"
          onClick={(e) => {
            e.stopPropagation();
            updateStatus(card.id, "review");
          }}
        >
          To Review
        </button>

        <button
          className="complete-btn"
          onClick={(e) => {
            e.stopPropagation();
            updateStatus(card.id, "learned");
          }}
        >
          Learned
        </button>
      </div>
    </div>
  );
}

export default Flashcard;
