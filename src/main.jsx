import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Componentes
import './index.css'

// Styles
import App from './App'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
