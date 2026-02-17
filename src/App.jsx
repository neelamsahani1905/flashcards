import { useState } from "react";
import flashcardsData from "./data";
import Flashcard from "./components/Flashcard";
import "./App.css";

function App() {
  const [cards, setCards] = useState(flashcardsData);
  const [filter, setFilter] = useState("all");

  const updateStatus = (id, newStatus) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, status: newStatus } : card
    );
    setCards(updatedCards);
  };

  const filteredCards =
    filter === "all"
      ? cards
      : cards.filter((card) => card.status === filter);

  return (
    <div className="app">
      <h1>🐍 Python Flashcards</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter"
      >
        <option value="all">All</option>
        <option value="review">To Review</option>
        <option value="learned">Learned</option>
      </select>

      <div className="card-container">
        {filteredCards.map((card) => (
          <Flashcard
            key={card.id}
            card={card}
            updateStatus={updateStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
