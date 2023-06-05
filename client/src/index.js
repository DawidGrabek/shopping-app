import React from 'react'
import ReactDOM from 'react-dom/client'

import AppProviders from 'providers/AppProviders'
import Root from 'views/Root.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>
)
