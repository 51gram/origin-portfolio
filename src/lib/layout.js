const CANVAS_WIDTH = 1440

export function pxToVw(px) {
  return `${(px / CANVAS_WIDTH) * 100}vw`
}
