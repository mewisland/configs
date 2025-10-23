# @mewisland/configs

## Usage

### ESLint

```js
// eslint.config.js
import config from "@mewisland/configs/eslint";

export default config;
```

Or

```js
// eslint.config.js
import config from "@mewisland/configs/eslint/react";

export default config;
```

React projects must also install the peer dependencies used by the preset:

```
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-perf eslint-plugin-react-refresh eslint-plugin-react-you-might-not-need-an-effect
```

### Biome

```jsonc
// biome.json
{
	"$schema": "https://biomejs.dev/schemas/2.2.5/schema.json",
	"extends": ["node_modules/@mewisland/configs/src/biome/biome.json"],
	"root": true
}
```

## LICENSE

MIT