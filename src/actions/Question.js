import { database } from '../firebase/config'
import { startLoadFirebase,
				 endLoadFirebase,
				 getErrorLoadFirebase
 } from './App'

const questionContentRef = database.ref("question_content")

export const FETCH_QUESTION_CONTENTS_SUCCESS = 'FETCH_QUESTION_CONTENT_SUCCESS'

export const fetchQuestionContentsSuccess = (items,length) => ({
	type: FETCH_QUESTION_CONTENTS_SUCCESS,
	items,
	length
})

export const fetchQuestionContents = (questionId, questionNumber) => {
	return (dispatch) =>{
		dispatch(startLoadFirebase());
		questionContentRef
		.orderByChild('question_id').startAt(questionId).endAt(questionId)
		.once('value', function(snapshot) {
				const questionChildren = snapshot.val()
				const questionLength = questionChildren.length - 1
				console.log(questionChildren)
				console.log(questionLength)
				const questionChild = questionChildren[questionNumber]
				dispatch(fetchQuestionContentsSuccess(questionChild, questionLength))
				dispatch(endLoadFirebase())
		})
	}
}
