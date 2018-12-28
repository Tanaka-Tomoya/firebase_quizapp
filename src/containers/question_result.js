import { connect } from 'react-redux'
import { question_result } from '../components/question_result/question_result'

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProp(dispatch) {
	return dispatch;
}

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(question_result)
