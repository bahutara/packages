import { releaseRules as releaseRulesDefault } from '@bahutara/conventional-gitmoji'
import type { IReleaseRule } from '@bahutara/conventional-gitmoji'
import type { PluginSpec } from 'semantic-release'

const commitAnalyzer = (releaseRulesPassed: IReleaseRule[] = []): PluginSpec => {
  const releaseRules = [...releaseRulesDefault, ...releaseRulesPassed]

  return [
    '@semantic-release/commit-analyzer',
    {
      config: '@bahutara/conventional-gitmoji',
      releaseRules,
    },
  ]
}

export { commitAnalyzer }
