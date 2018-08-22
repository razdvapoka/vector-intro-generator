import { createPropStyles } from 'pss'

export const flips = createPropStyles({
  flipX: { transform: 'scale(-1, 1)' },
  flipY: { transform: 'scale(-1, 1)' },
  flipXY: { transform: 'scale(-1, -1)' }
})

export const rotation = createPropStyles({
  rotate: (deg) => ({ transform: `rotate(${deg}deg)` })
})
