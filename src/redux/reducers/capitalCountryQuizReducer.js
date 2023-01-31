import { IFCORRECT, IFWRONG, IFTIMEOVER } from "../action-type";
import allCountries from "../../files/all-countries.json";

let initialState;

let a = (initialState = {
  count: 0,
  questionNum: 1,
  results: [],
  questionDetails: {
    ans1Details: allCountries[Math.floor(Math.random() * 196)],
    ans2Details: allCountries[Math.floor(Math.random() * 196)],
    ans3Details: allCountries[Math.floor(Math.random() * 196)],
    ans4Details: allCountries[Math.floor(Math.random() * 196)],
    randNum: Math.floor(Math.random() * 4),
  },
});

export const capitalCountryQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case IFCORRECT:
      return {
        ...state,
        count: state.count + 1,
        questionNum: state.questionNum + 1,
        results: [
          ...state.results,
          {
            capital: action.payload[0],
            givenAnswer: action.payload[1],
            correctAnswer: action.payload[2],
          },
        ],
        questionDetails: {
          ans1Details: allCountries[Math.floor(action.payload[3][0] * 196)],
          ans2Details: allCountries[Math.floor(action.payload[3][1] * 196)],
          ans3Details: allCountries[Math.floor(action.payload[3][2] * 196)],
          ans4Details: allCountries[Math.floor(action.payload[3][3] * 196)],
          randNum: Math.floor(action.payload[3][0] * 4),
        },
      };
    case IFWRONG:
      return {
        ...state,
        count: state.count,
        questionNum: state.questionNum + 1,
        results: [
          ...state.results,
          {
            capital: action.payload[0],
            givenAnswer: action.payload[1],
            correctAnswer: action.payload[2],
          },
        ],
        questionDetails: {
          ans1Details: allCountries[Math.floor(action.payload[3][0] * 196)],
          ans2Details: allCountries[Math.floor(action.payload[3][1] * 196)],
          ans3Details: allCountries[Math.floor(action.payload[3][2] * 196)],
          ans4Details: allCountries[Math.floor(action.payload[3][3] * 196)],
          randNum: Math.floor(action.payload[3][0] * 4),
        },
      };
    default:
      return state;
  }
};
