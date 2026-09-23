import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import ErrorBoundary from './components/fx/ErrorBoundary.jsx'
import './index.css'

// Si algo rompe el render, se muestra el motivo en lugar de una pantalla negra.
const CrashScreen = (error) => (
  <div style={{ minHeight: '100vh', padding: '2rem', color: '#fff', display: 'grid', placeContent: 'center', gap: '1rem', textAlign: 'center' }}>
    <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>Algo ha fallado al cargar la web.</p>
    <button type="button" onClick={() => window.location.reload()} style={{ justifySelf: 'center', padding: '0.6rem 1.4rem', borderRadius: '0.5rem', background: '#915eff' }}>
      Recargar
    </button>
    <code style={{ fontSize: '0.75rem', color: '#aaa6c3', wordBreak: 'break-word' }}>{String(error?.message || error)}</code>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={CrashScreen}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
