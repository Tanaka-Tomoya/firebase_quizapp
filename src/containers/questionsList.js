import { connect } from 'react-redux'
import { questionsList } from '../components/questionsList/questionsList'

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProp(dispatch) {
	return dispatch;
}

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(questionsList)
