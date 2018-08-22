import randomString from 'random-string'
import {
  DASH,
  LINE,
  TEXT,
  ARROW,
  ARCH
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

const tap = x => { console.log(x); return x }

const randomItemProps = type => {
  switch (type) {
    case TEXT: return {
      ...randomArrayItem(colors),
      children: [ tap(randomString(tap({ length: 1 + random(5) }))) ]
    }
    case ARROW: return randomArrayItem(flips)
    case DASH: return randomArrayItem(margins)
    case LINE: return randomArrayItem(margins)
    case ARCH: return randomArrayItem(arches)
  }
}

const randomItem = (types) => {
  const type = randomArrayItem(types)
  const props = randomItemProps(type)
  return {
    type,
    ...props
  }
}

export default (
  rowCount,
  itemPerRowCount,
  types
) => (
  range(rowCount)
    .map(() => {
      let textCount = 0
      return range(itemPerRowCount).map(() => {
        let item = randomItem(types)
        if (item.type === TEXT) {
          if (textCount === 1) {
            item = { type: DASH }
          } else {
            textCount++
          }
        }
        return item
      })
    })
)
