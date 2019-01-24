import { GET_USER_PROFILE } from '../actions/Appbar'
import {
	START_LOAD_FIREBASE,
	END_LOAD_FIREBASE,
	GET_LOAD_FIREBASE_ERROR
} from '../actions/App'

const initialState = {
	isLoading: true,
	hasError: false,
	userName: null,
}

const appbar = (state = initialState, action) => {
	switch(action.type) {
		case GET_USER_PROFILE:
			return Object.assign({}, state, {
				userName: action.name
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

export default appbar
