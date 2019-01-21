import {
	FETCH_QUESTION_CONTENTS_SUCCESS,
	LOAD_QUESTION_CONTENTS,
	GET_QUESTION_CONTENTS_ERROR
} from '../actions/Question'

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
		case LOAD_QUESTION_CONTENTS:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})
		case GET_QUESTION_CONTENTS_ERROR:
			return Object.assign({}, state, {
				hasError: action.hasError
			})
		default:
			return state;
	}
}

export default Question
