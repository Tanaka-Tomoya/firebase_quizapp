import { GET_QUESTIONS_ITEM } from '../actions/questionsList'

const initialState = {
	questions: [

	]
}

function questionList(state = initialState, action) {
	switch(action.type) {
		case GET_QUESTIONS_ITEM:
      return Object.assign({}, state, {
				questions: action.item
			});
		default:
			return state;
	}
}

export default questionList
