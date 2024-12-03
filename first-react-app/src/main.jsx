import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Extra from './Extra.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
    <Extra />
  </StrictMode>
)
