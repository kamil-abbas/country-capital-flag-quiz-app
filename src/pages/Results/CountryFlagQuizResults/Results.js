import React from "react";
import "../../../App.css";
import "./Results.css";

const Results = () => {  
  return (
    <div className="page-center">
      <table className="cou-fla-table">
        <thead>
          <tr className="cou-fla-tr">
            <th className="cou-fla-th cou-fla-first-column">Question</th>
            <th className="cou-fla-th cou-fla-second-column">Your answer</th>
            <th className="cou-fla-th cou-fla-third-column">Correct answer</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("test")).map((item, index) => {
            return (
              <tr key={index} className="cou-fla-tr">
                <td className="cou-fla-td cou-fla-first-column cou-fla-first-column-item">{index+1}. The flag of {item.country}:</td>
                <td className="cou-fla-td cou-fla-second-column"><img src={item.givenAnswer} /></td>
                <td className="cou-fla-td cou-fla-third-column"><img src={item.correctAnswer} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
