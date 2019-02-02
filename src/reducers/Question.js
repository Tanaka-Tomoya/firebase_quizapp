import {
	FETCH_QUESTION_CONTENTS_SUCCESS,
	START_FETCH_QUESTION,
	END_FETCH_QUESTION
} from '../actions/Question'

import {
	START_LOAD_FIREBASE,
	GET_LOAD_FIREBASE_ERROR
} from '../actions/App'

const initialState = {
	items: [],
	questionLength: 0,
	isLoading: true,
	hasError: false,
}

const Question = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_QUESTION_CONTENTS_SUCCESS:
			return Object.assign({}, state, {
				items: action.items,
				questionLength: action.length
			})
		case START_FETCH_QUESTION:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})
		case END_FETCH_QUESTION:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})
		case GET_LOAD_FIREBASE_ERROR:
			return Object.assign({}, state, {
				hasError: action.hasError
			})
		default:
			return state;
	}
}

export default Question
