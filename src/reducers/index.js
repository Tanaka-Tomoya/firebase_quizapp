import { combineReducers } from 'redux';
import question from './Question'
import list from './List'

const rootReducer = combineReducers ({
	list,
	question
})

export default rootReducer;
