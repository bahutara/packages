// /* eslint-disable import/order */
// const isCI = require('is-ci')
// !isCI && require('dotenv').config({ path: './.env' })
// const { getConfig } = require('@bahutara/semantic')
const _map = require('lodash/map.js')

const { getConfig } = require('./packages/semantic/dist/index.cjs')
const releaseBranchTypes = require('./scripts/release-branch-types/index.cjs')

const branchTypes = _map(
  releaseBranchTypes,
  (releaseBranchType, releaseBranchTypeIndex) => {
    return _map(releaseBranchType, (branchType) => {
      return (
        !!branchType && {
          name: `${releaseBranchTypeIndex}/${branchType}`,
          prerelease: branchType,
        }
      )
    })[0]
  }
).filter((branchType) => !!branchType)

const branches = [
  { name: 'main' },
  { name: 'canary', prerelease: 'canary' },
  ...branchTypes,
]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['BotJerome', 'bahutara'],
  },
}

// const _config = getConfig(config)

module.exports.config = config
module.exports.getConfig = getConfig
