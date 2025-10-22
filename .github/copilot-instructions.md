# Copilot instructions — @mewisland/configs

Purpose: help an AI coding agent be productive in this small mono-package that
provides shared `ESLint` and `Biome` presets.

- Project type: ESM npm package (see `package.json` with "type": "module").
- Primary artifacts under `src/`:
  - `src/eslint/eslint.config.js` — base ESLint flat config (imports `@eslint/js` and `typescript-eslint`).
  - `src/eslint/react.js` — React-specific ESLint flat config (imports `eslint-plugin-react`, `eslint-plugin-react-hooks`).
  - `src/biome/biome.json` — Biome formatter/linter preset.

Key rules for edits
- Preserve ESM style: use `export default` and `import` (do not convert to CommonJS).
- Keep `exports` mapping in `package.json` in sync with files under `src/`.

Build / lint / publish
- Lint locally with the repo's ESLint config:

  ```bash
  pnpm lint
  ```

- Publishing helpers (maintainer workflows):
  - `pnpm run publish:jsr` — lints then runs `npx jsr publish` (project uses jsr for releases).
  - `pnpm run publish:npm` — lints then `npm publish --access public`.

Patterns & conventions
- Files exported to consumers are in `src/` and referenced by `exports` in `package.json`.
  When adding new consumer-facing files, add corresponding entries under `exports` and update `deno.json` if needed.
- ESLint configs are written using the new flat config API via `defineConfig`.
  Example: `src/eslint/eslint.config.js` composes `@eslint/js` and `typescript-eslint`.
- Biome preset is a JSON file and intended to be `extends`-able by downstream projects (see root `biome.json`).

Testing and CI
- This repo has no tests or CI config checked in. Before adding CI, prefer minimal CI that runs `pnpm lint`.

Files to reference when modifying or extending
- `package.json` — scripts, devDependencies, exports.
- `src/eslint/eslint.config.js` — base ESLint composition.
- `src/eslint/react.js` — adds React plugin rules.
- `src/biome/biome.json` — Biome settings.

When to ask a human
- Any change that modifies package exports, publishing scripts, or versioning strategy.
- Adding new peerDependencies or bumping major versions of ESLint/tooling.

If you make changes, run `pnpm lint` and ensure you don't change public API file paths.

---
Please review and tell me if you'd like this file to be longer, include CI steps, or reference release processes in more detail.
