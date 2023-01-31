import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../App.css"
import "../AsideDesign.css";
import "./Timer.css";

const Timer = (props) => {
  const [time, setTime] = useState(10);
  let questionNum = useSelector((store) => store.countryCapitalQuizReducer.questionNum);

  useEffect(() => {
    const start = setInterval(() => {
      if (props.timeStarted == true && time > 0) {
        if (questionNum < 11) {
          setTime((preTime) => preTime - 1);
        }
      } else {
        setTime(10);
      }

      if (time == 0) {
        props.showAnswer();
      }
    }, 1000);

    return () => {
      clearInterval(start);
    };
  });

  return (
    <div className="shape-wrapper timer-wrapper not-clickable">
      <div
        className="rounded-shape timer-container"
        style={{ fontSize: (15 - time) / 2 + "vw" }}
      >
        {time}
      </div>
    </div>
  );
};

export default Timer;
