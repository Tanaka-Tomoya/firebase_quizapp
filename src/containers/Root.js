import { connect } from 'react-redux'
import Root from '../components/Root'
import { loginConfirm } from '../actions/Root'
import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
	return {
		root: state.root
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loginConfirm: () => dispatch(loginConfirm())
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Root))
