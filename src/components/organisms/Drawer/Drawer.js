import React from 'react'
import { map } from 'lodash'
import { Wrapper, Header, List, ListItem, ListItemLink } from './Drawer.styled'
import { ROUTES } from '../../../modules/routing/routes.config'

const LINKS = {
	main: { id: 0, path: ROUTES.main, label: 'My data' },
	budget: { id: 1, path: ROUTES.budget, label: 'Budget' },
	contacts: { id: 2, path: ROUTES.contacts, label: 'Contacts' },
	invoices: { id: 3, path: ROUTES.invoices, label: 'Invoices / Estimates' },
	contracts: { id: 4, path: ROUTES.contracts, label: 'Contracts' },
	tasks: { id: 5, path: ROUTES.tasks, label: 'Tasks' },
}

export const Drawer = () => {
	return (
		<Wrapper>
			<Header>Freelance Administrator</Header>
			<List>
				{map(LINKS, link => {
					const { id, path, label } = link || {}

					return (
						<ListItem key={id}>
							<ListItemLink to={path}>{label}</ListItemLink>
						</ListItem>
					)
				})}
			</List>
		</Wrapper>
	)
}
