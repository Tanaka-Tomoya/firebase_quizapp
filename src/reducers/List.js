import { GET_QUESTIONS_ITEM } from '../actions/List'

const initialState = {
	items: []
}

export default function questionList(state = initialState, action) {
	switch(action.type) {
		case GET_QUESTIONS_ITEM:
      return Object.assign({}, state, {
				items: action.item
			});
		default:
			return state;
	}
}
