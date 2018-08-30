export const ARCH = 'ARCH'
export const ARROW = 'ARROW'
export const DASH = 'DASH'
export const LINE = 'LINE'
export const TEXT = 'TEXT'
export const CIRCLE = 'CIRCLE'

export const TYPES = [
  ARCH,
  ARROW,
  DASH,
  LINE,
  TEXT,
  CIRCLE
]

TYPES.without = function (typesToExclude) {
  return this.filter(type => !typesToExclude.includes(type))
}

TYPES.with = function (typesToInclude) {
  return this.concat(typesToInclude)
}

export const NO_ARROWS = TYPES.without([ ARROW ])
export const NO_DASHES = TYPES.without([ DASH ])
export const NO_ARCHES = TYPES.without([ ARCH ])
export const NO_TEXTS = TYPES.without([ TEXT ])
export const NO_LINES = TYPES.without([ LINE ])

export const DEFAULT_PER_ROW_LIMITS = {
  [ARCH]: Infinity,
  [ARROW]: Infinity,
  [DASH]: Infinity,
  [LINE]: Infinity,
  [TEXT]: 1,
  [CIRCLE]: 1
}

export const DURATION = 1000
export const BARB_DURATION_COEFF = 0.8
export const EASING = 'easeInQuad'
export const DEFAULT_OPTIONS = {
  duration: DURATION,
  easing: EASING
}
export const REVERSE_DEFAULT_OPTIONS = {
  ...DEFAULT_OPTIONS,
  direction: 'reverse'
}
