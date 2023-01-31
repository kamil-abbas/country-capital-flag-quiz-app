import "../../../App.css";
import "./MultipleChoiceQuiz.css";
import { useDispatch, useSelector } from "react-redux";
import { ifCorrect, ifWrong } from "../../../redux/action-creator";
import { useState } from "react";
import { useSound } from "use-sound";
import Help from "../../../components/Help/Help";
import ShowAnswer from "../../../components/ShowAnswer/ShowAnswer";
import CorrectAnsCount from "../../../components/CorrectAnsCount/CorrectAnsCount";
import SeeResults from "../../../components/SeeResults/SeeResults";
import Timer from "../../../components/Timer/Timer";
import correctSound from "../../../sounds/sound-for-correct-answer.wav";
import wrongSound from "../../../sounds/sound-for-wrong-answer.wav";
import helpSound from "../../../sounds/sound-for-help.wav";
import gameOverSound from "../../../sounds/sound-for-game-over.wav";

const MultipleChoiceQuiz = () => {
  const [playCorrect] = useSound(correctSound);
  const [playWrong] = useSound(wrongSound);
  const [playHelp] = useSound(helpSound);
  const [playGameOver] = useSound(gameOverSound);

  let questionDetails = useSelector(store => store.capitalCountryQuizReducer.questionDetails);
  let results = useSelector(store => store.capitalCountryQuizReducer.results);
  let dispatch = useDispatch();

  let [correctAnswerCount, setcorrectAnswerCount] = useState(0);
  let [questionNum, setquestionNum] = useState(1);
  let [helpNumInTotal, setHelpNumInTotal] = useState(0);
  let [timeStarted, setTimeStarted] = useState(false);

  let helpNumInQuestion = 0;
  let answerClickNum = 0;

  let randNumsforStore = [Math.random(), Math.random(), Math.random(), Math.random()];
  let rnfs = randNumsforStore;

  let randNum = questionDetails.randNum;
  let answerArray = [questionDetails.ans1Details, questionDetails.ans2Details, questionDetails.ans3Details, questionDetails.ans4Details];
  let correctAnswer = answerArray[questionDetails.randNum].country;
  
  setTimeout(() => {
    document.querySelectorAll(".cap-cou-answer").forEach(item => {if (item.classList.contains("hidden")){item.classList.remove("hidden")}})  
  }, 2000);

  if(questionNum > 10){
    console.log(document.querySelector('.cap-cou-question-title'));
    document.querySelector('.cap-cou-question-title').style.flexDirection = "column";
    document.querySelector('.cap-cou-question-title').innerHTML = "Thank you for playing the quiz. Results are ready. <a href='/multiple-choice-quiz-capital-country'>Start new game</a> <a href='/multiple-choice-quiz-capital-country/results'>See Results</a>";
  }  

  function handleStartClick(e) {
    e.target.parentElement.nextElementSibling.classList.remove("hidden");
    setTimeStarted(true);
    e.target.innerText = "Game Started"
    e.target.classList.add('cap-cou-animation-for-start');
    e.target.style.backgroundColor = 'rgba(129, 215, 0, 0.87)'
    setTimeout(() => {
      e.target.style.top = "1vw";
    }, 300);

    setTimeout(() => {
      e.target.style.top = "-20vh";
      e.target.style.visibility = 'hidden';
    }, 900);
  }

  function handleHelpClick() {
    playHelp();
    let deletedAnswerIndexes = [];
    let randNum = Math.floor(Math.random() * 4);
    if (helpNumInQuestion == 0 && answerClickNum != 1 && helpNumInTotal < 3) {
      document.querySelectorAll(".cap-cou-answer").forEach((item, index) => {
        if (item.innerText !== correctAnswer) {
          if (randNum !== index && deletedAnswerIndexes.length < 2) {
            item.classList.add("hidden");
            deletedAnswerIndexes.push(index);
          }
        }
      });
    }

    helpNumInQuestion = 1;
  }

  function handleShowClick() {
    if (answerClickNum < 1) {
      playWrong();
      document.querySelectorAll(".cap-cou-answer").forEach((answer) => {
        answer.classList.add("not-clickable");
        if (answer.innerText == correctAnswer) {
          answer.style.backgroundColor = "#1AEB15";
          setTimeStarted(false);

          setTimeout(() => {
            answer.style.backgroundColor = "#407391";
            dispatch(ifWrong(answerArray[randNum].capital, "", correctAnswer, rnfs));
            setquestionNum(preNum => preNum + 1);
            setTimeStarted(true);
          }, 2000);
        }
        setTimeout(() => {
          answer.classList.remove("not-clickable");
        }, 1500);
      });
      if (helpNumInQuestion == 1) {
        setHelpNumInTotal(preHelpNum => preHelpNum + 1);
      }
    }
  }

  function handleAnswerClick(e) {
    answerClickNum++;
    if (answerClickNum == 1) {
      e.target.style.backgroundColor = "rgba(255, 132, 0, 0.936)";
      e.target.parentElement.childNodes.forEach((item) =>
        item.classList.add("not-clickable")
      );

      setTimeout(() => {
        if (e.target.innerText == correctAnswer) {
          playCorrect();
          e.target.style.backgroundColor = "#1AEB15";

          setTimeout(() => {
            dispatch(ifCorrect(answerArray[randNum].capital, e.target.innerText, correctAnswer, rnfs));
            setcorrectAnswerCount(preCount => preCount + 1);
            setquestionNum(preNum => preNum + 1);
            setTimeStarted(true);

            e.target.parentElement.childNodes.forEach((item) => {
              item.classList.remove("not-clickable");
              item.style.backgroundColor = "#407391";
            });

            if (helpNumInQuestion == 1) {
              setHelpNumInTotal(preHelpNum => preHelpNum + 1);
            }
          }, 2000);
        }
        else {
          playWrong();
          e.target.style.backgroundColor = "red";
          e.target.parentElement.childNodes.forEach((item) => {
            if (item.innerText == correctAnswer) {
              item.style.backgroundColor = "#1AEB15";
            }
          });

          setTimeout(() => {
            dispatch(ifWrong(answerArray[randNum].capital, e.target.innerText, correctAnswer, rnfs));
            setquestionNum(preNum => preNum + 1);
            setTimeStarted(true);

            e.target.parentElement.childNodes.forEach((item) => {
              item.classList.add("cap-cou-answer-hover");
              item.classList.remove("not-clickable");
              item.style.backgroundColor = "#407391";
            });

            if (helpNumInQuestion == 1) {
              setHelpNumInTotal(preHelpNum => preHelpNum + 1);
            }
          }, 2000);
        }
        setTimeStarted(false);
      }, 1500);
    }
  }

  function handleResult() {
    localStorage.setItem("test", JSON.stringify(results));
    if (questionNum > 10) {
      playGameOver();
    }
  }

  {
    return (
      <div className="cap-cou-multiple-choice-container">
        <div className="cap-cou-horizontal-center">
          <div className="cap-cou-start-btn" onClick={(e) => {handleStartClick(e)}}>
            Start
          </div>
        </div>
        <div className="cap-cou-game-wrapper hidden">
          <div className="cap-cou-question-wrapper">
            <div className="cap-cou-question-container">
              <div className="cap-cou-question-title">
                {questionNum}. Which country's capital is {answerArray[randNum].capital}?
              </div>
              <div className="cap-cou-choice-wrapper">
                <div className="cap-cou-choice-container">
                  {answerArray.map((item, index) => {
                    return (
                      <div key={index} className={questionNum > 10 ? "hidden" : "cap-cou-answer cap-cou-answer-hover"} onClick={(e) => handleAnswerClick(e)}>
                        {item.country}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <aside className="cap-cou-aside">
            <div className="cap-cou-aside-left">
              <div className="cap-cou-aside-item-wrapper">
                <div
                  className={helpNumInTotal < 3
                      ? "cap-cou-aside-item-container cap-cou-aside-left-margin-top"
                      : "cap-cou-aside-item-container cap-cou-aside-left-margin-top not-clickable"
                  }
                  onClick={(e) => handleHelpClick()}
                >
                  <Help />
                </div>
              </div>
              <div className="cap-cou-aside-item-wrapper">
                <div className="cap-cou-aside-item-container cap-cou-aside-left-margin-top" onClick={(e) => handleShowClick()}>
                  <ShowAnswer />
                </div>
              </div>
            </div>
            <div className="cap-cou-aside-right">
              <div className="cap-cou-aside-item-wrapper">
                <div className="cap-cou-aside-item-container">
                  <Timer timeStarted={timeStarted} questionNum={questionNum} showAnswer={handleShowClick}
                  />
                </div>
              </div>
              <div className="cap-cou-aside-item-wrapper">
                <div className="cap-cou-aside-item-container">
                  <CorrectAnsCount correctAnswerCount={correctAnswerCount} />
                </div>
              </div>
              <div className="cap-cou-aside-item-wrapper">
                <div className={questionNum > 10 ? "cap-cou-aside-item-container" : "hidden"} onClick={handleResult()}>
                  <SeeResults />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
};

export default MultipleChoiceQuiz;
