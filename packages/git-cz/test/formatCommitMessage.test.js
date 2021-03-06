/* eslint-disable sort-keys */
import { expect } from 'chai'

import { formatCommitMessage } from '../lib/formatCommitMessage'

const originalConfig = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  breakingChangePrefix: 'π§¨ ',
  closedIssuePrefix: 'β ',
  closedIssueMessage: 'Closes: ',
  commitMessageFormat: '<type><(scope)>: <emoji><subject>',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  theme: 'original',
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: 'π€',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      emoji: 'π‘',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: 'βοΈ',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      emoji: 'πΈ',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: 'π',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: 'β‘οΈ',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: 'π‘',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: 'πΉ',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: 'π',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests',
      emoji: 'π',
      value: 'test',
    },
  },
}

const themeTypes = {
  default: {
    chore: {
      code: ':computer_disk:',
      description: 'Changes that donβt modify src or test files',
      emoji: 'π½οΈ',
      entity: '&#x1f4bd;',
      hidden: false,
      name: 'computer-disk',
      release: null,
      semver: null,
      value: 'chore',
    },
    rip: {
      code: ':coffin:',
      description: 'Remove dead code.',
      emoji: 'β°οΈ',
      entity: '&#x26B0;',
      hidden: false,
      name: 'coffin',
      release: null,
      semver: null,
      value: 'rip',
    },
  },
}

const defaultState = {
  answers: {
    body: '',
    breaking: '',
    issues: '',
    lerna: '',
    scope: '',
    subject: 'First commit',
    type: 'feat',
  },
  config: originalConfig,
}

describe('formatCommitMessage()', () => {
  it('does not include emoji, if emojis disabled in config (no scope)', () => {
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('feat: First commit')
  })

  it('does not include emoji, if emojis disabled in config (with scope)', () => {
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        scope: 'init',
      },
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('feat(init): First commit')
  })

  it('does not include emoji, if emojis disabled in config (custom)', () => {
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        scope: 'init',
      },
      config: {
        ...originalConfig,
        format: '{subject} :{scope}{type}',
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('First commit :(init)feat')
  })

  it('does not include emoji, if emojis disabled in config (dynamic custom)', () => {
    const isDynamic = true
    const theme = 'original'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        scope: 'init',
      },
      config: {
        ...originalConfig,
        format: `{subject} :{scope}{type}${isDynamic && ' '}`,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('First commit :(init)feat ')
  })

  it('theme => default (no difference with feat)', () => {
    const theme = 'default'
    const message = formatCommitMessage({
      ...defaultState,
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
      },
    })

    expect(message).equal('feat: First commit')
  })

  it('theme => default (unique type)', () => {
    const theme = 'default'
    const message = formatCommitMessage({
      ...defaultState,
      answers: {
        ...defaultState.answers,
        subject: 'Last commit',
        type: 'rip',
      },
      config: {
        ...originalConfig,
        disableEmoji: true,
        theme,
        types: themeTypes[theme],
      },
    })

    expect(message).equal('rip: Last commit')
  })
})
