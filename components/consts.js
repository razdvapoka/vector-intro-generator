export const ARCH = 'ARCH'
export const ARROW = 'ARROW'
export const DASH = 'DASH'
export const LINE = 'LINE'
export const TEXT = 'TEXT'

export const TYPES = [
  ARCH,
  ARROW,
  DASH,
  LINE,
  TEXT
]

export const NO_ARROWS = TYPES.filter(type => type !== ARROW)
export const NO_DASHES = TYPES.filter(type => type !== DASH)
export const NO_ARCHES = TYPES.filter(type => type !== ARCH)
export const NO_TEXTS = TYPES.filter(type => type !== TEXT)
export const NO_LINES = TYPES.filter(type => type !== LINE)
