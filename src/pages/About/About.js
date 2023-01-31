import React from "react";
import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <div>
          <h1>About the Game</h1>
        </div>
        <div>
          <p>
            Quiz App game is built for learning world countries, their flags and
            capital through more interactive way.
          </p>
          <p>
            In each game you have to answer 10 consecutive questions. You have
            10 seconds to answer each question. All questions have 4 options.
            When you choose one of them, answer color will change from light orange
            to dark. If you answered correctly your choice will be colored green,
            else it will be colored red and the correct option will be shown with green color.
          </p>
          <p>
            If you don't answer during 10 seconds, the correct answer will be
            shown and you will not earn point. Also you can see correct answer
            without waiting 10 seconds through clicking "Show Answer" button.
          </p>
          <p>
            In each question you can select "50/50" button to eliminate half of
            options. It will increase the probability to choose right option.
            But you can use it 3 times maximally.
          </p>
          <p>
            At the end of the game you can see the list of questions, your answers
            and correct answers on the table through clicking "See Results"
            button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
