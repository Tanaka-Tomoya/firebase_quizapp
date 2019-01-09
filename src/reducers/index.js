import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import  questionList  from './questionList'


const rootReducer = combineReducers ({
	firebase: firebaseReducer,
	questionList: questionList

})

export default rootReducer;
