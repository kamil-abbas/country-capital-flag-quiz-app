import { IFCORRECT, IFTIMEOVER, IFWRONG } from "./action-type"


export const ifCorrect=(questionItem, givenAnswer, correctAnswer, randNumsforStore, countryforAddInfo)=>{
    return{
        type: IFCORRECT,
        payload: [questionItem, givenAnswer, correctAnswer, randNumsforStore, countryforAddInfo]
    }
}

export const ifWrong=(questionItem, givenAnswer, correctAnswer, randNumsforStore, countryforAddInfo)=>{
    return{
        type: IFWRONG,
        payload: [questionItem, givenAnswer, correctAnswer, randNumsforStore, countryforAddInfo]
    }
}

export const ifTimeOver=(time)=>{
    return{
        type: IFTIMEOVER,
        payload: time
    }
}