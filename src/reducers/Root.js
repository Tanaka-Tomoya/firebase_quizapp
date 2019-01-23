import {
	LOGIN_CONFIRM_SUCCESS,
} from '../actions/Root'

import {
	START_LOAD_FIREBASE,
	END_LOAD_FIREBASE,
	GET_LOAD_FIREBASE_ERROR
} from '../actions/App'

const initialState = {
	uid: null,
	isLoading: true,
	hasError: false
}

const Root = (state = initialState, action) => {
	switch(action.type) {
		case LOGIN_CONFIRM_SUCCESS:
			return Object.assign({}, state, {
				uid: action.uid
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
			return state
	}
}

export default Root
