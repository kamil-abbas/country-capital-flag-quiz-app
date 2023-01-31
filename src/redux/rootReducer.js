import { combineReducers } from "redux";
import { countryCapitalQuizReducer } from "./reducers/countryCapitalQuizReducer";
import { capitalCountryQuizReducer } from "./reducers/capitalCountryQuizReducer";
import { flagCountryQuizReducer } from "./reducers/flagCountryQuizReducer";
import { countryFlagQuizReducer } from "./reducers/countryFlagQuizReducer";
import { capitalFlagQuizReducer } from "./reducers/capitalFlagQuizReducer";
import { flagCapitalQuizReducer } from "./reducers/flagCapitalQuizReducer";

const rootReducer = combineReducers({
    countryCapitalQuizReducer: countryCapitalQuizReducer,
    capitalCountryQuizReducer: capitalCountryQuizReducer,
    flagCountryQuizReducer: flagCountryQuizReducer,
    countryFlagQuizReducer: countryFlagQuizReducer,
    capitalFlagQuizReducer: capitalFlagQuizReducer,
    flagCapitalQuizReducer: flagCapitalQuizReducer
})

export default rootReducer;