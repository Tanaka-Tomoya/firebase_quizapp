import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import  questionList  from './questionList'


const rootReducer = combineReducers ({
	firebase: firebaseReducer,
	questionList
})

export default rootReducer;
