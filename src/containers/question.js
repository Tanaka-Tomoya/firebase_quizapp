import { connect } from 'react-redux'
import Question  from '../components/question/question'
import { fetchQuestionContents } from '../actions/Question'

function mapStateToProps(state) {
	return {
		question: state.question
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchQuestionContents: (questionId) => dispatch(fetchQuestionContents(questionId))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Question)
