import { GET_QUESTIONS_ITEM } from '../actions/questionList'

const initialState = {
	questions: [

	]
}

export default function getQuestionListItem(state = initialState, action) {
	switch(action.type) {
		case GET_QUESTIONS_ITEM:
      return Object.assign({}, state, {
				questions: action.item
			});
		default:
			return state;
	}
}
