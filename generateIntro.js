import randomString from 'random-string'
import {
  DASH,
  LINE,
  TEXT,
  ARROW,
  ARCH,
  // CIRCLE,
  DEFAULT_PER_ROW_LIMITS
} from './components/consts'

export const random = num => Math.floor(Math.random() * num)
export const randomArrayItemIndex = array => random(array.length)
export const randomArrayItem = array => array[randomArrayItemIndex(array)]
const range = length => Array.from(Array(length).keys())

const colors = [ { fg: 'white' }, { fg: 'black' } ]
const flips = [ { flipX: true }, {} ]
const margins = [ { mgr: 1 }, { mgl: 1 }, { mgx: 1 }, {} ]

const topLeftArch = {
  align: 'flex-end'
}

const bottomLeftArch = {
  t: '-100%',
  align: 'flex-start'
}

const topRightArch = {
  l: '-100%',
  align: 'flex-end'
}

const bottomRightArch = {
  l: '-100%',
  t: '-100%',
  align: 'flex-start'
}

const arches = [
  topLeftArch,
  bottomLeftArch,
  topRightArch,
  bottomRightArch
]

// const circles = [ { bdc: 'white' }, { bdc: 'black' } ]

const randomItemProps = (type, maxWordLength) => {
  switch (type) {
    case TEXT: return {
      ...randomArrayItem(colors),
      children: [ randomString({ length: 1 + random(maxWordLength) }) ]
    }
    case ARROW: return randomArrayItem(flips)
    case DASH: return randomArrayItem(margins)
    case LINE: return randomArrayItem(margins)
    case ARCH: return randomArrayItem(arches)
    // case CIRCLE: return randomArrayItem(circles)
  }
}

const randomItem = (types, maxWordLength) => {
  const type = randomArrayItem(types)
  const props = randomItemProps(type, maxWordLength)
  return {
    type,
    ...props
  }
}

export default (
  rowCount,
  itemPerRowCount,
  types,
  maxWordLength = 5,
  limits = DEFAULT_PER_ROW_LIMITS
) => (
  range(rowCount)
    .map(() => {
      const rowCounter = Object.create(null)
      return range(itemPerRowCount).map(() => {
        let item = randomItem(types, maxWordLength)
        if (rowCounter[item.type] === limits[item.type]) {
          // cowardly replacing the disagreeable item with a neutral dash
          item = { type: DASH }
        } else {
          rowCounter[item.type] = (rowCounter[item.type] || 0) + 1
        }
        return item
      })
    })
)
