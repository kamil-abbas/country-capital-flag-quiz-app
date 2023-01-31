import React from "react";
import "../../App.css"
import "../AsideDesign.css";
import "./CorrectAnsCount.css";

const CorrectAnsCount = (props) => {
  return (
    <div className="shape-wrapper correct-answer-wrapper not-clickable">
      <div className="rounded-shape correct-answer-container"><span> <b>{props.correctAnswerCount} ✔</b> <br/> out of 10</span></div>
    </div>
  );
};

export default CorrectAnsCount;
