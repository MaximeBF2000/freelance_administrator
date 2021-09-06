import styled from 'styled-components'
import { Link } from '../../atoms'
import { fromTheme } from '../../../modules/style/fromTheme'
import { rgba } from 'polished'

export const Wrapper = styled.div`
	width: ${fromTheme('dom.drawer.width')[0]}px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	border-right: solid 1px;
`

export const Header = styled.div`
	padding: 2rem 1rem;
	border-bottom: solid 1px;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
	text-align: center;
`

export const List = styled.ul``

export const ListItem = styled.li`
	&:hover,
	&:focus {
		background-color: ${fromTheme('colors.grey_0')};
	}
`

export const ListItemLink = styled(Link)`
	width: 100%;
	height: 100%;
	padding: 1rem;
`
