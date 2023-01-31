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

  let questionDetails = useSelector(store => store.flagCapitalQuizReducer.questionDetails);
  let results = useSelector(store => store.flagCapitalQuizReducer.results);
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
  let correctAnswer = answerArray[questionDetails.randNum].capital;
  
  setTimeout(() => {
    document.querySelectorAll(".fla-cap-answer").forEach(item => {if (item.classList.contains("hidden")){item.classList.remove("hidden")}})  
  }, 2000);

  if(questionNum > 10){
    console.log(document.querySelector('.fla-cap-question-title'));
    document.querySelector('.fla-cap-question-title').style.flexDirection = "column";
    document.querySelector('.fla-cap-question-title').innerHTML = "Thank you for playing the quiz. Results are ready. <a href='/multiple-choice-quiz-flag-capital'>Start new game</a> <a href='/multiple-choice-quiz-flag-capital/results'>See Results</a>";
  }

  function handleStartClick(e) {
    e.target.parentElement.nextElementSibling.classList.remove("hidden");
    setTimeStarted(true);
    e.target.innerText = "Game Started"
    e.target.classList.add('fla-cap-animation-for-start');
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
      document.querySelectorAll(".fla-cap-answer").forEach((item, index) => {
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
      document.querySelectorAll(".fla-cap-answer").forEach((answer) => {
        answer.classList.add("not-clickable");
        if (answer.innerText == correctAnswer) {
          answer.style.backgroundColor = "#1AEB15";
          setTimeStarted(false);

          setTimeout(() => {
            answer.style.backgroundColor = "#407391";
            dispatch(ifWrong(answerArray[randNum].flag, "", correctAnswer, rnfs, answerArray[randNum].country));
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
            dispatch(ifCorrect(answerArray[randNum].flag, e.target.innerText, correctAnswer, rnfs, answerArray[randNum].country));
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
            dispatch(ifWrong(answerArray[randNum].flag, e.target.innerText, correctAnswer, rnfs, answerArray[randNum].country));
            setquestionNum(preNum => preNum + 1);
            setTimeStarted(true);

            e.target.parentElement.childNodes.forEach((item) => {
              item.classList.add("fla-cap-answer-hover");
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
      <div className="fla-cap-multiple-choice-container">
        <div className="fla-cap-horizontal-center">
          <div className="fla-cap-start-btn" onClick={(e) => {handleStartClick(e)}}>
            Start
          </div>
        </div>
        <div className="fla-cap-game-wrapper hidden">
          <div className="fla-cap-question-wrapper">
            <div className="fla-cap-question-container">
              <div className="fla-cap-question-title">
                {questionNum}. Find the capital city according to the flag: <img src={answerArray[randNum].flag} />
              </div>
              <div className="fla-cap-choice-wrapper">
                <div className="fla-cap-choice-container">
                  {answerArray.map((item, index) => {
                    return (
                      <div key={index} className={questionNum > 10 ? "hidden" : "fla-cap-answer fla-cap-answer-hover"} onClick={(e) => handleAnswerClick(e)}>
                        {item.capital}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <aside className="fla-cap-aside">
            <div className="fla-cap-aside-left">
              <div className="fla-cap-aside-item-wrapper">
                <div
                  className={helpNumInTotal < 3
                      ? "fla-cap-aside-item-container fla-cap-aside-left-margin-top"
                      : "fla-cap-aside-item-container fla-cap-aside-left-margin-top not-clickable"
                  }
                  onClick={(e) => handleHelpClick()}
                >
                  <Help />
                </div>
              </div>
              <div className="fla-cap-aside-item-wrapper">
                <div className="fla-cap-aside-item-container fla-cap-aside-left-margin-top" onClick={(e) => handleShowClick()}>
                  <ShowAnswer />
                </div>
              </div>
            </div>
            <div className="fla-cap-aside-right">
              <div className="fla-cap-aside-item-wrapper">
                <div className="fla-cap-aside-item-container">
                  <Timer timeStarted={timeStarted} questionNum={questionNum} showAnswer={handleShowClick}
                  />
                </div>
              </div>
              <div className="fla-cap-aside-item-wrapper">
                <div className="fla-cap-aside-item-container">
                  <CorrectAnsCount correctAnswerCount={correctAnswerCount} />
                </div>
              </div>
              <div className="fla-cap-aside-item-wrapper">
                <div className={questionNum > 10 ? "fla-cap-aside-item-container" : "hidden"} onClick={handleResult()}>
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
