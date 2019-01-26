import { connect } from 'react-redux'
import { Home } from '../components/Home/Home'

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProp(dispatch) {
	return dispatch;
}

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(Home)
