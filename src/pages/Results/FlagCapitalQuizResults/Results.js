import React from "react";
import "../../../App.css";
import "./Results.css";

const Results = () => {  
  return (
    <div className="page-center">
      <table className="fla-cap-table">
        <thead>
          <tr className="fla-cap-tr">
            <th className="fla-cap-th fla-cap-first-column">Question</th>
            <th className="fla-cap-th fla-cap-second-column">Your answer</th>
            <th className="fla-cap-th fla-cap-third-column">Correct answer</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("test")).map((item, index) => {
            return (
              <tr key={index} className="fla-cap-tr">
                <td className="fla-cap-td fla-cap-first-column fla-cap-first-column-item">{index+1}. <img src={item.flag}/></td>
                <td className="fla-cap-td fla-cap-second-column">{item.givenAnswer}</td>
                <td className="fla-cap-td fla-cap-third-column">{item.correctAnswer} &#40;the capital of {item.country}&#41;</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
