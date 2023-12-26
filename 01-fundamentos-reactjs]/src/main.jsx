import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Document Object Model (representação do html com javascript)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
