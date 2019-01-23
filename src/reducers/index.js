import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import question from './Question'
import list from './List'
import userAuth from './UserAuth'
import root from './Root'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers ({
	list,
	question,
	userAuth,
	root,
	form: reduxFormReducer,
	routing: routerReducer
})

export default rootReducer;
