import { database } from '../firebase/config'

const questionContentRef = database.ref("question_content")

export const FETCH_QUESTION_CONTENTS_SUCCESS = 'FETCH_QUESTION_CONTENT_SUCCESS'
export const LOAD_QUESTION_CONTENTS = 'LOAD_QUESTION_CONTENT'
export const GET_QUESTION_CONTENTS_ERROR = 'GET_QUESTION_CONTENT_ERROR'

export const fetchQuestionContentsSuccess = items => ({
	type: FETCH_QUESTION_CONTENTS_SUCCESS,
	items
})

export const loadQuestionContents = status => ({
	type: LOAD_QUESTION_CONTENTS,
	isLoading: status
})

export const getQuestionContentsError = status => ({
	type: GET_QUESTION_CONTENTS_ERROR,
	hasError: status
})

export const fetchQuestionContents = (questionId) => {
	return (dispatch) =>{
		console.log(questionId)
		dispatch(loadQuestionContents(true));
		questionContentRef.orderByChild('question_id').startAt(questionId).endAt(questionId)
		.once('value', function(snapshot) {
			console.log(snapshot.val())
				dispatch(loadQuestionContents(false))
				dispatch(fetchQuestionContentsSuccess(snapshot.val()))
		})
	}
}
