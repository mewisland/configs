import { defineConfig } from "eslint/config";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactPerf from "eslint-plugin-react-perf";
import reactRefresh from "eslint-plugin-react-refresh";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";

import baseConfig from "./eslint.config.js";

/**
 * React-specific ESLint flat configuration.
 *
 * This file composes the base configuration with recommended rules from
 * `eslint-plugin-react`, `eslint-plugin-react-hooks`,
 * `eslint-plugin-react-perf`, `eslint-plugin-react-refresh`, and
 * `eslint-plugin-react-you-might-not-need-an-effect`. It also enforces the
 * `react-hooks/exhaustive-deps` rule as an error to catch missing hook
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
const reactPerfRecommended = reactPerf.configs?.["flat/recommended"];
const reactRefreshRecommended = reactRefresh.configs?.["flat/recommended"];
const reactYouMightNotNeedAnEffectRecommended =
        reactYouMightNotNeedAnEffect.configs?.["flat/recommended"];

export default defineConfig(
        [
                baseConfig,
                react.configs.flat.recommended,
                reactHooks.configs.flat.recommended,
                reactPerfRecommended,
                reactRefreshRecommended,
                reactYouMightNotNeedAnEffectRecommended,
                {
                        rules: {
                                "react-hooks/exhaustive-deps": "error",
                        },
                },
        ].filter(Boolean),
);
