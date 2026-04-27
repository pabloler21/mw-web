import { CALENDLY_URL } from './constants'

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void }
    plausible?: (event: string) => void
  }
}

let scriptLoaded = false

function injectCSS() {
  if (document.querySelector('link[href*="calendly"]')) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://assets.calendly.com/assets/external/widget.css'
  document.head.appendChild(link)
}

function injectScript(): Promise<void> {
  return new Promise((resolve) => {
    if (scriptLoaded || window.Calendly) {
      scriptLoaded = true
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.onload = () => {
      scriptLoaded = true
      resolve()
    }
    document.head.appendChild(script)
  })
}

export async function openCalendly() {
  window.plausible?.('cta_calendly_click')
  injectCSS()
  await injectScript()
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
}
