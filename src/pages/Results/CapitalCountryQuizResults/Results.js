import React from "react";
import "../../../App.css";
import "./Results.css";

const Results = () => {  
  return (
    <div className="page-center">
      <table className="cap-cou-table">
        <thead>
          <tr className="cap-cou-tr">
            <th className="cap-cou-th cap-cou-first-column">Question</th>
            <th className="cap-cou-th cap-cou-second-column">Your answer</th>
            <th className="cap-cou-th cap-cou-third-column">Correct answer</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("test")).map((item, index) => {
            return (
              <tr key={index} className="cap-cou-tr">
                <td className="cap-cou-td cap-cou-first-column cap-cou-first-column-item">{index+1}. {item.capital} is the capital of ...</td>
                <td className="cap-cou-td cap-cou-second-column">{item.givenAnswer}</td>
                <td className="cap-cou-td cap-cou-third-column">{item.correctAnswer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
