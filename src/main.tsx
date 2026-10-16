import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Icon fonts (bundled from npm instead of CDN)
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Template's customized Bootstrap v5.0.0 theme, then template styles, then React-specific overrides
import './styles/bootstrap.min.css'
import './styles/style.css'
import './styles/app.css'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
