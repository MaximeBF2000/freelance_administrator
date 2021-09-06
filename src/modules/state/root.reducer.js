import { combineReducers } from 'redux'

const initialState = {}

const baseRootReducer = (state = initialState, action = {}) => {
	const { type, ...payload } = action

	switch (type) {
		default:
			return state
	}
}

export const rootReducer = combineReducers({ root: baseRootReducer })
