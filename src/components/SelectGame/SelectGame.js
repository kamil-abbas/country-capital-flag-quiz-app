import React from "react";
import "./SelectGame.css";
import "../AsideDesign.css";
import "../../App.css";
import { Link } from "react-router-dom";

const SelectGame = (props) => {
  const { name, game1, game2, link1, link2 } = props;
  return (
    <div className="quiz-name-container">
      <div className="quiz-name">{name}</div>
      <div className="quiz-name-2 multiple-choice-1"><Link to={link1} className="link">{game1}</Link></div>
      <div className="quiz-name-2 multiple-choice-2"><Link to={link2} className="link">{game2}</Link></div>
    </div>
  );
};

export default SelectGame;
