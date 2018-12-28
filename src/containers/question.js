import { connect } from 'react-redux'
import { question } from '../components/question/question'

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProp(dispatch) {
	return dispatch;
}

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(question)
