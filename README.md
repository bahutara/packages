# `@bahutara/packages`

Monorepo (via [📦 pnpm](https://github.com/pnpm/pnpm) and [🔺 turbo](https://github.com/vercel/turborepo)) for tools I use frequently in various projects, people, and companies I work with.

- [📦️ Packages](#%EF%B8%8F-packages)
- [👷️ CI/CD Overview](#%EF%B8%8F-cicd-overview)
- [:octocat: CI/CD Workflows](#octocat-cicd-workflows)

## 📦️ Packages

### 🔧 Configuration

Originally was all-in-one as `@bahutara/codestyle`, these have been broken out for separate maintainability and ala-carte implementation.

**Spoiler:** They are opinionated, but can be overriden, extended, or ignored. 🙈

- [`@bahutara/eslint-config`](https://github.com/bahutara/packages/tree/main/config/eslint-config)
- [`@bahutara/lint-staged`](https://github.com/bahutara/packages/tree/main/config/lint-staged)
- [`@bahutara/prettier-config`](https://github.com/bahutara/packages/tree/main/config/prettier-config)
- [`@bahutara/tsconfig`](https://github.com/bahutara/packages/tree/main/config/tsconfig)

### 🖼️ Design System

Built with [`radix-ui`](https://www.radix-ui.com) and [`stitches`](https://stitches.dev). A tree-shakeable design system that you can use as much of, or as little of, as you would like.

- [`@bahutara/design-system`](https://github.com/bahutara/packages/tree/main/packages/design-system)
  - 🏆 Major props to the [`@radix-ui`](https://github.com/radix-ui) team as this is 🍽️ of sorts.
  - 📘 [`Storybook`](https://storybook.js.org) is included but not all the way there. May
  - 🚀 Code Example: [`@bahutara/websites`](https://github.com/bahutara/websites)
  - 🚀️ Live Example: [`bahutaragerald.com`](https://jeromefitzgerald.com)

### ⚡ Release Management Tools

- [`@bahutara/conventional-gitmoji`](https://github.com/bahutara/packages/tree/main/packages/conventional-gitmoji)
  - Map [`gitmoji`](https://gitmoji.dev) to [`conventional-commits`](https://www.conventionalcommits.org)
    - `feat => ✨️`
    - `fix => 🐛️`
    - `ci => 👷️`
    - `fix-ci => 💚️`
    - `...`
  - Allows you to keep `semver` consistent by expanding both
  - You _most likely_ do not need to use this, unless you are using this for your separate tooling. This is more of a configuration stop-gap for ...
- [`@bahutara/git-cz`](https://github.com/bahutara/packages/tree/main/packages/git-cz)
  - cli prompt for (expanded) [**conventional commits**](https://www.conventionalcommits.org) and **conventional branches** as no one needs to remember all the different types
    - 📝 Formats your commit message for you
    - 🖲️ Integrate with your Issue Tracking System
    - 🔢 Customize which commit types get which semver
- [`@bahutara/semantic`](https://github.com/bahutara/packages/tree/main/packages/semantic)
  - Automatic Semantic Versioning through [`semantic-release`](https://github.com/semantic-release/semantic-release) with support for `gitmoji`.
- [`@bahutara/release-notes-generator`](https://github.com/bahutara/packages/tree/main/packages/release-notes-generator)
  - You guessed it, a custom release-notes-generator.
  - 📝 See the latest output at [the releases page](https://github.com/bahutara/packages/releases).

### 🎲 Misc

- [`@bahutara/notion`](https://github.com/bahutara/packages/tree/main/packages/notion)
  - 🗃️ API (hyper-customized `@notionhq/client`) for [`Notion`](https://www.notion.so)
  - 🚀️ Live Example: [`bahutaragerald.com`](https://jeromefitzgerald.com)
- :octocat: [`@bahutara/scripts`](https://github.com/bahutara/packages/tree/main/packages/scripts)
  - :octocat: scripts that are used to set up repos and for CI/CD
- [`@bahutara/spotify`](https://github.com/bahutara/packages/tree/main/packages/spotify)
  - 🧑‍🎤️ API to gather data on:
    - `now-playing|top-artists|top-tracks`
  - 🖼️ Plus imagery customizations via [plaiceholder](https://plaiceholder.co)
  - 🚀️ Live Example: [`bahutaragerald.com/music`](https://jeromefitzgerald.com/music)
- 🧰️ [`@bahutara/utils`](https://github.com/bahutara/packages/tree/main/packages/utils)
  - Scripts that are generically re-used throughout

### 🔜 Coming Soon(ish)

- `next-notion`
  - Next.js implementation for `@bahutara/notion`

### 🎁 Bonus

- [`@bahutara/dotfiles`](https://github.com/bahutara/dotfiles): Separate from this repository
  - zsh + homebrew computer setup

## 👷️ CI/CD Overview

- 📦 [`pnpm workspaces`](https://pnpm.io/pnpm-workspace_yaml)
- :octocat: [`GitHub Actions`](https://github.com/features/actions) for CI/CD
  - Plus release management through npm
- 🔺️ [`turbo`](https://github.com/vercel/turborepo) for monorepo management
  - [x] cache: local / remote & team development
  - [x] cache: github actions
- 👷️ [`tsup`](https://github.com/egoist/tsup) for typescript builds (w/ _some_ config)
- 🤖️ [`Renovate`](https://github.com/renovatebot/renovate) for Patch + Minor Package Management
- 🤖️ [`Kodiak`](https://kodiakhq.com) to “Automate (our) GitHub Pull Requests’
- 🤖️ Automatic [`Semantic Versioning`](https://semver.org) w/ [`Conventional Commits`](https://www.conventionalcommits.org)
  - 😜️ Commits & Versioning (Release Notes) made more fun by a few of the packages in this repo

## :octocat: CI/CD Workflows

- ⚗️ `**pull**`:
  - Branch(es):
    - `main|canary|develop`
  - Script(s):
    - `lint|test|build`
- 🔀️ `**push**`:
  - Branch(es):
    - `main|canary|develop`
    - `(ci|feature|fix|refactor|release)/**`
  - Script(s):
    - `lint|test|build|semantic-release`
  - Note(s):
    - `[b]` necessary for `semantic-release`
      - Pre-relase branches (aka `!main`):
        - Handled in root `release.config`
        - Can be overriden in any package
    - `[b]` necessary for `build` when not on `main`
- 🌃️ `**weekly**`:
  - Branch(es):
    - `main`
  - Script(s):
    - `lint|test|build|semantic-release`
  - Note(s):
    - `[b]` not necessary for `semantic-release`
