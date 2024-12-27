import { scrollShot } from './scroll-shot'

// Instagram widget
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

// Maintain GA4 key events
// contact_click
document.addEventListener('click', e => {
  const b = e.target.closest(
    '.callnow__phone,' +
    '.callnow__whatsapp,' +
    '.contact__phone,' +
    '.contact__whatsapp,' +
    '.contact__email-option-copy,' +
    '.contact__email-option-send,' +
    '.contact__address,' +
    '.ga4'
  )
  // eslint-disable-next-line
  // if (b) gtag('event', 'contact_click')
  if (b) console.log('event', 'contact_click')
})
// contact_form_submit
document.addEventListener('submited-form-contacto', e => {
  // eslint-disable-next-line
  // gtag('event', 'contact_form_submit')
  console.log('event', 'contact_form_submit')
})
