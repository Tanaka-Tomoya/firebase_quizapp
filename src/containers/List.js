import { connect } from 'react-redux'
import List from '../components/List/List'
import { fetchListItems } from '../actions/List'

function mapStateToProps(state) {
	return {
		items: state.items,
		isLoading: state.loadListItems,
		hasError: state.loadListItems
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchListItems: (tag) => dispatch(fetchListItems(tag))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List)
