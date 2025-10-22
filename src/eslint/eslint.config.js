import { defineConfig } from "eslint/config";

import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * Base ESLint flat configuration used across the monorepo and by downstream
 * projects.
 *
 * Composes the recommended configurations from `@eslint/js` and
 * `typescript-eslint` and provides common language options for browser and
 * Node environments. The export is a flat config array produced by
 * `defineConfig` and is intended to be extended or re-used by consuming
 * projects.
 *
 * Files matched: JavaScript, TypeScript, JSX and TSX files.
 */

/**
 * Combined ESLint flat configuration (public export).
 *
 * @example
 * ```js
 * // eslint.config.js
 * import config from "@mewisland/configs/eslint";
 * 
 * export default config;
 * ```
 *
 * @public
 */
export default defineConfig([
	{
		files: [
			"**/*.{js,ts,jsx,tsx}",
		],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	js.configs.recommended,
	tseslint.configs.recommended,
]);
