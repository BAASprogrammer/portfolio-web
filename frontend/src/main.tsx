import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Importar las fuentes para que Vite las procese y pueda servirlas
import './assets/fonts/Inter-Regular.woff2'
import './assets/fonts/Inter-Medium.woff2'
import './assets/fonts/Inter-SemiBold.woff2'
import './assets/fonts/Inter-Bold.woff2'

// Importar estilos globales
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
