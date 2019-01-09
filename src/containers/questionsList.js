import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import questionsList from '../components/questionsList/questionsList'
import { getQuestionsItem } from '../actions/questionsList'

function mapStateToProps(state) {
	return {
		questions: getQuestionsItem(state.firebase.data)
	}
}

function mapDispatchToProps(dispatch) {
	return {dispatch}
}

const firebaseQueries = ['questions'];

const QuestionsList = compose(
	firebaseConnect(firebaseQueries),
	connect(
		mapStateToProps,
    mapDispatchToProps
	))(questionsList)

export default QuestionsList;
