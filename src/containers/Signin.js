import { connect } from 'react-redux'
import Signin from '../components/Signin/Signin'
import { createAccount } from '../actions/UserAuth'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'
import { login } from '../actions/UserAuth'

function mapStateToProps(state,props) {
	const { location } = props.history
	return {
		location: location,
	}
}

function mapDispatchToProp(dispatch) {
	return {
		login: (email, password) => dispatch(login(email, password))
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProp)(Signin))
