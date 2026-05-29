/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
	test: {
		globals: true,
    environment: 'jsdom',
    include: ['./test/**/*.test.{js,ts,tsx}', './src/**/*.test.{js,ts,tsx}'],
    exclude: ['node_modules', 'dist'],
		setupFiles: './setupTests.ts',
	},
});
