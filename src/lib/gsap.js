import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

// Defers ScrollTrigger setup until the window has fully loaded AND web
// fonts (Gotham via Typekit) have applied. Font swaps reflow heading/text
// heights after `load`, which otherwise shifts section positions out from
// under trigger start/end math computed too early.
export function whenLayoutReady(callback) {
  let cancelled = false

  function afterLoad() {
    if (cancelled) return
    if (document.readyState === 'complete') {
      callback()
    } else {
      window.addEventListener('load', callback, { once: true })
    }
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(afterLoad)
  } else {
    afterLoad()
  }

  return () => {
    cancelled = true
    window.removeEventListener('load', callback)
  }
}
