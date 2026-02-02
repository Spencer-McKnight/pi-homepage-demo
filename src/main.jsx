import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Restore path when GitHub Pages 404 redirect lands on index (e.g. refresh on /pi-homepage-demo/v1)
const redirect = sessionStorage.redirect
if (redirect) {
  sessionStorage.removeItem('redirect')
  const path = new URL(redirect).pathname.replace(/^\/pi-homepage-demo/, '') || '/'
  window.history.replaceState(null, '', '/pi-homepage-demo' + path)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
