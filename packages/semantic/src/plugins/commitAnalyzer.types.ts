import type { ICommit } from '@bahutara/conventional-gitmoji'
import type { Release } from 'semantic-release'

interface ReleaseRule {
  type: ICommit
  release: Release['type']
}

export type { ReleaseRule }
