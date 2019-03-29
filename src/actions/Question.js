import { database } from "../firebase/config";
import {
  startLoadFirebase,
  endLoadFirebase,
  getErrorLoadFirebase
} from "./App";

const questionContentRef = database.ref("question_content");

export const FETCH_QUESTION_CONTENTS_SUCCESS = "FETCH_QUESTION_CONTENT_SUCCESS";
export const END_FETCH_QUESTION = "END_FETCH_QUESTION";
export const START_FETCH_QUESTION = "START_FETCH_QUESTION";

export const fetchQuestionContentsSuccess = (items, length) => ({
  type: FETCH_QUESTION_CONTENTS_SUCCESS,
  items,
  length
});

export const startFetchQuestion = () => ({
  type: START_FETCH_QUESTION,
  isLoading: true
});

export const endFetchQuestion = () => ({
  type: END_FETCH_QUESTION,
  isLoading: false
});

export const fetchQuestionContents = questionId => {
  return dispatch => {
    dispatch(startFetchQuestion());
    questionContentRef
      .orderByChild("question_id")
      .startAt(questionId)
      .endAt(questionId)
      .once("value", function(snapshot) {
        console.log(`snapshot: ${snapshot.val()}`);
        const questionChildren = Object.values(snapshot.val());
        console.log(`questionChildren: ${questionChildren}`);
        const questionLength = questionChildren.length;
        dispatch(
          fetchQuestionContentsSuccess(questionChildren, questionLength)
        );
        dispatch(endFetchQuestion());
      });
  };
};
