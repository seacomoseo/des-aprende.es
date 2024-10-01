import { scrollShot } from './scroll-shot'

scrollShot({
  rootMargin: '0%',
  query: '[data-behold-id]',
  doStart: gallery => {
    const s = document.createElement('script')
    s.type = 'module'
    s.src = 'https://w.behold.so/widget.js'
    document.head.append(s)
  }
})
