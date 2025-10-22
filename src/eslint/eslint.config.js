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
 *
 * @remarks
 * The module intentionally sets `languageOptions.globals` to the union of
 * browser and node globals so that configs are safe for mixed environments.
 * The `parserOptions.tsconfigRootDir` is set to the module directory to
 * assist tools that resolve tsconfig relative paths.
 *
 * @example
 * ```js
 * // eslint.config.js
 * import config from "@mewisland/configs/eslint";
 *
 * export default config;
 * ```
 *
 * @since 0.1.0
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
