import { connect } from 'react-redux'
import { questionResult } from '../components/question/questionResult'

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProp(dispatch) {
	return {dispatch};
}

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(questionResult)
