import React from "react";
import { Link } from "react-router-dom";
import "./SeeResults.css";

const SeeResults = (props) => {
  return (
    <div className="shape-wrapper see-results-wrapper">
      <div className="rounded-shape see-results-container">
        <Link to="results" className="rounded-shape see-results-container link">
          See Results
        </Link>
      </div>
    </div>
  );
};

export default SeeResults;
