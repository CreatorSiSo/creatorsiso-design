import StyleDictionary from 'style-dictionary';

const tokenFilter = (cat) => (token) => {
	const { category, type } = token.attributes;
	return ['core', 'semantic'].includes(category)
		? type === cat
		: category === cat;
};

const generateFilesArr = (tokensCategories, ext, format) => {
	return tokensCategories.map((cat) => {
		return {
			filter: tokenFilter(cat),
			destination: `dist/${cat}.tokens.${ext}`,
			format,
		};
	});
};
const coreAndSemanticTokens = ['color'];
const componentTokens = ['button'];

const tokenPrefix = 'cs';

const styleDictionary = StyleDictionary.extend({
	source: ['tokens/**/*.tokens.json'],
	format: {
		/**
		 * Add your custom formats here and
		 * use them in the platforms below, e.g.
		 *
		 * exampleFormat: (opts) => {
		 *   const { dictionary, file } = opts;
		 *   let output = '';
		 *   // do something with the dictionary, file
		 *   // and output and return it
		 *   return output;
		 * }
		 */
	},
	platforms: {
		css: {
			transformGroup: 'css',
			prefix: tokenPrefix,
			files: generateFilesArr(
				[...coreAndSemanticTokens, ...componentTokens],
				'css',
				'css/variables'
			),
		},
		scss: {
			transformGroup: 'css',
			prefix: tokenPrefix,
			files: generateFilesArr(coreAndSemanticTokens, 'scss', 'scss/variables'),
		},
		js: {
			transformGroup: 'js',
			prefix: tokenPrefix,
			files: generateFilesArr(coreAndSemanticTokens, 'js', 'javascript/es6'),
		},
	},
});

styleDictionary.buildAllPlatforms();
