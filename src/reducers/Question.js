import {
	FETCH_QUESTION_CONTENTS_SUCCESS,
} from '../actions/Question'

import {
	START_LOAD_FIREBASE,
	END_LOAD_FIREBASE,
	GET_LOAD_FIREBASE_ERROR
} from '../actions/App'

const initialState = {
	items: [],
	length: 0,
	isLoading: true,
	hasError: false,
}

const Question = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_QUESTION_CONTENTS_SUCCESS:
			return Object.assign({}, state, {
				items: action.items,
				length: action.length
			})
		case START_LOAD_FIREBASE:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})
		case END_LOAD_FIREBASE:
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
