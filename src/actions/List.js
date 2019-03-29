import { database } from "../firebase/config";
import {
  startLoadFirebase,
  endLoadFirebase,
  getErrorLoadFirebase
} from "./App";

const questionsRef = database.ref("questions");

export const FETCH_LIST_ITEMS_SUCCESS = "FETCH_LIST_ITEMS_SUCCESS";

export const fetchListItemsSuccess = items => ({
  type: FETCH_LIST_ITEMS_SUCCESS,
  items
});

export const fetchListItems = tag => {
  if (tag) {
    return dispatch => {
      dispatch(startLoadFirebase());

      questionsRef
        .orderByChild("tag")
        .startAt(tag)
        .endAt(tag)
        .once("value", function(snapshot) {
          dispatch(endLoadFirebase());
          dispatch(fetchListItemsSuccess(snapshot.val()));
        });
    };
  } else {
    return dispatch => {
      dispatch(startLoadFirebase());

      questionsRef.once("value", function(snapshot) {
        dispatch(endLoadFirebase());
        dispatch(fetchListItemsSuccess(snapshot.val()));
      });
    };
  }
};
