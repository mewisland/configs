import { defineConfig } from "eslint/config";

import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * ESLint configuration
 * - @eslint/js
 * - typescript-eslint
 * - eslint-plugin-react
 * - eslint-plugin-react-hooks
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
