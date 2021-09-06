import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RoutingWrapper = ({ children }) => {
	return <BrowserRouter>{children}</BrowserRouter>
}
