const { reduce, keys } = require('@laufire/utils/collection');
const { isIterable } = require('@laufire/utils/reflection');
const { properCase } = require('../../../src/lib/templateManager');

const iterableCount = (iterable) => keys(iterable).length;

const getImports = (content) => reduce(
	content, (acc, { name }) => [
		...acc,
		{
			modulePath: `./${ name }`,
			name: properCase(name),
		},
	], [],
);

const getData = ({ data: { child: { content, props, name }}}) => {
	const childCount = isIterable(content) ? iterableCount(content) : 0;
	const imports = childCount ? getImports(content) : [];

	return {
		childCount: childCount,
		propCount: iterableCount(props),
		usesContext: Boolean(childCount),
		imports: imports,
		componentName: properCase(name),
	};
};

module.exports = getData;