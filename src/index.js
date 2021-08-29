import React from 'react'
import { render } from 'react-dom'
import { fromTheme } from '@modules/style'

export const App = () => {
	console.log(fromTheme('colors.blue_0'))

	return <div>app</div>
}

render(<App />, document.querySelector('#root'))
