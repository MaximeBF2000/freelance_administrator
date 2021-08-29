export const throwError = (...args) => {
	const stringifiedArgs = args.map(arg =>
		typeof arg !== 'string' ? `\n${JSON.stringify(arg, null, 2)}\n` : arg
	)
	const errorString = stringifiedArgs.reduce((acc, string) => `${acc} ${string}`, '')

	throw new Error(errorString)
}
