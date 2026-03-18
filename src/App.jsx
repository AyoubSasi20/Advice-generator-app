import React from "react";
import { useState, useEffect } from "react";
import dice from "./assets/images/icon-dice.svg";
import pDD from "./assets/images/pattern-divider-desktop.svg";
import pDM from "./assets/images/pattern-divider-mobile.svg";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState({
    id: " ",
    text: "CLick the dice to get an advice...",
  });
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice({ id: data.slip.id, text: data.slip.advice });
    } catch (error) {
      console.error("Error fetching advice", error);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <main className="container" aria-label="">
      <article className="card">
        <h1>ADVICE #{advice.id} </h1>
        <p>"{advice.text}"</p>
        <picture className="divider">
          <source media="(min-width: 768px)" srcSet={pDD} />
          <img src={pDM} alt="Pattern divider" />
        </picture>
        <button
          className="dice-btn"
          aria-label="Generate new advice"
          onClick={fetchAdvice}
        >
          <img src={dice} alt="Dice icon" />
        </button>
      </article>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AyoubSasi20">Ayoub</a>.
        </p>
      </footer>
    </main>
  );
};
export default App;
