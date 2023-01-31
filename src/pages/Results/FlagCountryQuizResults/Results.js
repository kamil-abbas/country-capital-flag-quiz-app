import React from "react";
import "../../../App.css";
import "./Results.css";

const Results = () => {  
  return (
    <div className="page-center">
      <table className="fla-cou-table">
        <thead>
          <tr className="fla-cou-tr">
            <th className="fla-cou-th fla-cou-first-column">Question</th>
            <th className="fla-cou-th fla-cou-second-column">Your answer</th>
            <th className="fla-cou-th fla-cou-third-column">Correct answer</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("test")).map((item, index) => {
            return (
              <tr key={index} className="fla-cou-tr">
                <td className="fla-cou-td fla-cou-first-column fla-cou-first-column-item">{index+1}. <img src={item.flag}/></td>
                <td className="fla-cou-td fla-cou-second-column">{item.givenAnswer}</td>
                <td className="fla-cou-td fla-cou-third-column">{item.correctAnswer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
