import React from "react";
import "../../../App.css";
import "./Results.css";

const Results = () => {  
  return (
    <div className="page-center">
      <table className="cou-cap-table">
        <thead>
          <tr className="cou-cap-tr">
            <th className="cou-cap-th cou-cap-first-column">Question</th>
            <th className="cou-cap-th cou-cap-second-column">Your answer</th>
            <th className="cou-cap-th cou-cap-third-column">Correct answer</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("test")).map((item, index) => {
            return (
              <tr key={index} className="cou-cap-tr">
                <td className="cou-cap-td cou-cap-first-column cou-cap-first-column-item">{index+1}. The capital of {item.country}:</td>
                <td className="cou-cap-td cou-cap-second-column">{item.givenAnswer}</td>
                <td className="cou-cap-td cou-cap-third-column">{item.correctAnswer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
