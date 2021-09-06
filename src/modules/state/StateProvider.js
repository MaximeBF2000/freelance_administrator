import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { rootReducer } from './root.reducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export const StateProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}
