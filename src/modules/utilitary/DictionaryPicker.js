import { throwError } from './throwError'

export class DictionaryPicker {
	constructor(dictionary) {
		if (!dictionary)
			throwError(
				'You did not provided a dictionary to your dictionary picker, it is required'
			)

		return path => {
			if (!path)
				throwError(
					'You did not provided a path to your dictionary picker function, it is required'
				)

			const elements = path.split('.')

			return elements.reduce((acc, element) => acc[element], dictionary)
		}
	}
}
