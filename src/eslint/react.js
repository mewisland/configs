import { defineConfig } from "eslint/config";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

import baseConfig from "./eslint.config.js";

/**
 * ESLint configuration
 * - eslint-plugin-react
 * - eslint-plugin-react-hooks
 */
export default defineConfig([
	baseConfig,
	react.configs.flat.recommended,
	reactHooks.configs.flat.recommended,
	{
		rules: {
			"react-hooks/exhaustive-deps": "error",
		}
	}
]);
