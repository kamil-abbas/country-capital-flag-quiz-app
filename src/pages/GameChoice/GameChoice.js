import React from "react";
import "./GameChoice.css";
import "../../App.css";
import SelectGame from "../../components/SelectGame/SelectGame";

const GameChoice = () => {
  return (
    <div className="game-choice">
      <div className="select-question-title">Which quiz do you want to play?</div>
      <div className="select-game-container">
        <SelectGame name='Country-Flag Quiz' game1='Find Flag by Country' game2='Find Country by Flag' link1='/multiple-choice-quiz-country-flag' link2='/multiple-choice-quiz-flag-country'/>
        <SelectGame name='Country-Capital Quiz' game1='Find Capital by Country' game2='Find Country by Capital' link1='/multiple-choice-quiz-country-capital' link2='/multiple-choice-quiz-capital-country'/>
        <SelectGame name='Capital-Flag Quiz' game1='Find Flag by Capital' game2='Find Capital by Flag' link1='/multiple-choice-quiz-capital-flag' link2='/multiple-choice-quiz-flag-capital'/>
      </div>
    </div>
  );
};

export default GameChoice;
