import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import AppRoutes from './routes/Routex'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
