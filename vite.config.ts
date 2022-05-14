import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
		},
	},

	plugins: [vue(), dts({ outputDir: 'dist/types', exclude: 'src/env.d.ts' })],

	build: {
		target: 'esnext',
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'CreatorSiSoDesign',
			formats: ['es'],
		},
		outDir: 'dist',
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
