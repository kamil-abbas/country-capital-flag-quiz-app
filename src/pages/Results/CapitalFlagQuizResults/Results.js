import React from "react";
import "../../../App.css";
import "./Results.css";

const Results = () => {  
  return (
    <div className="page-center">
      <table className="cap-fla-table">
        <thead>
          <tr className="cap-fla-tr">
            <th className="cap-fla-th cap-fla-first-column">Question</th>
            <th className="cap-fla-th cap-fla-second-column">Your answer</th>
            <th className="cap-fla-th cap-fla-third-column">Correct answer</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("test")).map((item, index) => {
            console.log(item.givenAnswer);
            return (
              <tr key={index} className="cap-fla-tr">
                <td className="cap-fla-td cap-fla-first-column cap-fla-first-column-item">{index+1}. The flag of {item.country} &#40;capital city: {item.capital}&#41;</td>
                <td className="cap-fla-td cap-fla-second-column"><img src={item.givenAnswer} /></td>
                <td className="cap-fla-td cap-fla-third-column"><img src={item.correctAnswer} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
