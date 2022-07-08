import { avoidRateLimit, isUndefined } from '@bahutara/utils'

// @todo(types)
const getBlocksByIdChildren = async ({ getBlocksChildrenList, block_id }) => {
  if (isUndefined(block_id)) return []
  await avoidRateLimit(0)
  return await getBlocksChildrenList({
    block_id,
  })
}

export default getBlocksByIdChildren
