import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import GameChoice from "./pages/GameChoice/GameChoice";
import Game1 from "./pages/MultipleChoiceQuiz/CountryCapital/MultipleChoiceQuiz";
import Results1 from "./pages/Results/CountryCapitalQuizResults/Results";
import Game2 from "./pages/MultipleChoiceQuiz/CapitalCountry/MultipleChoiceQuiz";
import Results2 from "./pages/Results/CapitalCountryQuizResults/Results";
import Game3 from "./pages/MultipleChoiceQuiz/CountryFlag/MultipleChoiceQuiz";
import Results3 from "./pages/Results/CountryFlagQuizResults/Results";
import Game4 from "./pages/MultipleChoiceQuiz/FlagCountry/MultipleChoiceQuiz";
import Results4 from "./pages/Results/FlagCountryQuizResults/Results";
import Game5 from "./pages/MultipleChoiceQuiz/CapitalFlag/MultipleChoiceQuiz";
import Results5 from "./pages/Results/CapitalFlagQuizResults/Results";
import Game6 from "./pages/MultipleChoiceQuiz/FlagCapital/MultipleChoiceQuiz";
import Results6 from "./pages/Results/FlagCapitalQuizResults/Results";
import LOGOUT from "./images/logout.svg";
import USER from "./images/user-icon.png";
import LINKEDIN from "./images/linkedin-icon.png";
import GITHUB from "./images/github-icon.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header
          className={
            window.location.href == "http://localhost:3000/"
              ? "display-none"
              : ""
          }
        >
          <nav>
            <div className="nav-left">
              <div className="nav-first-item">
                <Link to="/game-choice" className="link nav-third-item">
                  Home
                </Link>
              </div>
              <div className="nav-second-item">
                <Link to="/about" className="link nav-third-item">
                  About
                </Link>
              </div>
              <div className="nav-third-item">
                <Link to="/game-choice" className="link nav-third-item">
                  Change Game
                </Link>
              </div>
            </div>
            <div className="nav-right">
              <img src={USER} alt="user-icon" className="user-icon" />
              <div className="nav-right-item">
                  kamilabbas
              </div>
              <div className="nav-right-item">
                <Link to="/" className="link" onClick={window.location.reload}>
                  Logout
                </Link>
              </div>
              <img src={LOGOUT} alt="logout-icon" className="logout-icon" />
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="about" element={<About />} />
            <Route path="game-choice" element={<GameChoice />} />
            <Route path="multiple-choice-quiz-country-capital" element={<Game1 />} />
            <Route path="multiple-choice-quiz-country-capital/results" element={<Results1 />} />
            <Route path="multiple-choice-quiz-capital-country" element={<Game2 />} />
            <Route path="multiple-choice-quiz-capital-country/results" element={<Results2 />} />
            <Route path="multiple-choice-quiz-country-flag" element={<Game3 />} />
            <Route path="multiple-choice-quiz-country-flag/results" element={<Results3 />} />
            <Route path="multiple-choice-quiz-flag-country" element={<Game4 />} />
            <Route path="multiple-choice-quiz-flag-country/results" element={<Results4 />} />
            <Route path="multiple-choice-quiz-capital-flag" element={<Game5 />} />
            <Route path="multiple-choice-quiz-capital-flag/results" element={<Results5 />} />
            <Route path="multiple-choice-quiz-flag-capital" element={<Game6 />} />
            <Route path="multiple-choice-quiz-flag-capital/results" element={<Results6 />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-left">
            <div>Contacts:</div>
            <div className="links-wrapper">
              <div className="links">
                <div>
                  <a
                    href="https://www.linkedin.com/in/kamil-abbas-a698b8146/"
                    target="_blank"
                  >
                    <img src={LINKEDIN} />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/kamil-abbas" target="_blank">
                    <img src={GITHUB} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div>© All rights reserved</div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
