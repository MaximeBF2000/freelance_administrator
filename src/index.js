import React from 'react'
import { render } from 'react-dom'
import { GlobalWrapper } from './modules/utilitary'
import { Drawer } from './components/organisms'

export const App = () => {
	return (
		<GlobalWrapper>
			<Drawer />
			<main>app</main>
		</GlobalWrapper>
	)
}

render(<App />, document.querySelector('#root'))
