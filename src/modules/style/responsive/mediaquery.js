export const mq = {
	min: (breakpointValue, style) =>
		`@media (min-width: ${breakpointValue}px) { ${style} }`,
	max: (breakpointValue, style) =>
		`@media (max-width: ${breakpointValue}px) { ${style} }`,
}
