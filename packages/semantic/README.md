# @bahutara/semantic

## Overview

- ✨️ Conventional Commit CLI ([`@bahutara/git-cz`](https://github.com/bahutara/git-cz))
- 🎋️ Branch Name Generator ([`@bahutara/git-cz`](https://github.com/bahutara/git-cz))
- 🤖️ Semantic Versioning ([`semantic-release`](https://github.com/semantic-release/semantic-release))

## Installation

```bash
yarn add @bahutara/semantic --dev
```

This extends [`@bahutara/git-cz`](../git-cz).

### Semantic Release

`./release.config.cjs`

Custom values:

- `enableGit?: boolean`
- `enableGithub?: boolean`
- `enableNpm?: boolean`
- `enableReleaseNotes?: boolean`
- `enableReleaseNotesCustom?: boolean`

And then the rest of the traditional configuration values for `semantic-release` and `conventional-changelog`.

#### Example

You can look at this monorepo as it re-uses a lot of code ethroughout via `release.config`

```js
const { getConfig } = require('@bahutara/semantic')

const { name } = require('./package.json')

const configPassed = {
  tagFormat: `${name}@\${version}`,
}

const config = getConfig(configPassed)

module.exports = config
```

## Scripts

### Branch Names

Add a script in `package.json`:

```json
  "scripts": {
    "branch": "git-cz --branch --allow-empty"
  }
```

Running `yarn branch` will then trigger the CLI to create branch for you based on

### CI/CD

Add a script in `package.json` as this extends [`semantic-release`](https://github.com/semantic-release/semantic-release):

```json
  "scripts": {
    "semantic-release": "semantic-release"
  }
```

Be sure to allow for Git + GitHub access so [`semantic-release`](https://github.com/semantic-release/semantic-release) can create commits and more actions on your repo.

Configured in this repo via `./github/workflows/semantic-release.yml`.
