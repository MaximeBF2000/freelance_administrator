import { DictionaryPicker } from '../utilitary'
import { theme } from './theme'

const themeDictionaryPicker = new DictionaryPicker(theme)

export const fromTheme = (path, transform) => {
	const styleValue = themeDictionaryPicker(path)

	if (transform && typeof transform === 'function') return transform(styleValue)

	return styleValue
}
