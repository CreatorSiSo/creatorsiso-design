import StyleDictionary from 'style-dictionary';

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
			buildPath: 'dist/css/',
			files: [{ destination: '_variables.css', format: 'css/variables' }],
		},
		scss: {
			transformGroup: 'scss',
			prefix: tokenPrefix,
			buildPath: 'dist/scss/',
			files: [{ destination: '_variables.scss', format: 'scss/variables' }],
		},
		js: {
			transformGroup: 'js',
			prefix: tokenPrefix,
			buildPath: 'dist/js/',
			files: [{ destination: 'variables.js', format: 'javascript/es6' }],
		},
	},
});

styleDictionary.buildAllPlatforms();
