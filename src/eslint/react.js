import { defineConfig } from "eslint/config";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

import baseConfig from "./eslint.config.js";

/**
 * React-specific ESLint flat configuration.
 *
 * This file composes the base configuration with recommended rules from
 * `eslint-plugin-react` and `eslint-plugin-react-hooks`. It also enforces
 * the `react-hooks/exhaustive-deps` rule as an error to catch missing hook
 * dependencies during development.
 *
 * @example
 * ```ts
 * // eslint.config.js
 * import config from "@mewisland/configs/eslint/react";
 * 
 * export default config;
 * ```
 * 
 * @since 0.2.0
 * 
 * @public
 */
export default defineConfig([
	baseConfig,
	react.configs.flat.recommended,
	reactHooks.configs.flat.recommended,
	{
		rules: {
			"react-hooks/exhaustive-deps": "error",
		},
	},
]);
