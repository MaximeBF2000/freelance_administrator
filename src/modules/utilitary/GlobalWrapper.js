import React from 'react'
import { StateProvider } from '../state'
import { RoutingWrapper } from '../routing'
import { GlobalStyle } from '../style'

export const GlobalWrapper = ({ children }) => {
	return (
		<StateProvider>
			<RoutingWrapper>
				<GlobalStyle />
				{children}
			</RoutingWrapper>
		</StateProvider>
	)
}
