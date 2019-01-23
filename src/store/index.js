
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()

const loggerMiddleware = createLogger();

const middlewares = routerMiddleware(history)


export function configureStore() {
	return createStore(
		rootReducer,
		applyMiddleware(
			thunk,
			loggerMiddleware,
			middlewares
		)
	)
}
