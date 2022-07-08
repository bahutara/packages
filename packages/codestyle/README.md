# @bahutara/codestyle

## Deprecated

Last working version is `@bahutara/codestyle@8.0.28`

It still will work, and you can move to the new package system as the continuation to more focused packages for improved opt-in performance takes place.

## Now What?

Instead of one larger wrapper for:

- `eslint`
- `lint-staged`
- `prettier`
- `tsconfig`

They have been broken down into individual packages for plug-n-play:

- [`@bahutara/eslint-config`](../../config/tsconfig)
  - Note: For ESLint purposes this handles: `jest|next|prettier|...`
- [`@bahutara/lint-staged`](../../config/tsconfig)
- [`@bahutara/prettier-config`](../../config/tsconfig)
- [`@bahutara/tsconfig`](../../config/tsconfig)
  - Note: Creates Base TSConfig and Multipe Variations
