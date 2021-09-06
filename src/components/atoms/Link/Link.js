import React from 'react'
import { StyledLink } from './Link.styled'

export const Link = ({ children, className, ...props }) => {
	return (
		<StyledLink className={className} {...props}>
			{children}
		</StyledLink>
	)
}
