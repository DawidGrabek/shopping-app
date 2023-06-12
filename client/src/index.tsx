import React from 'react'
import { createRoot } from 'react-dom/client'

import AppProviders from 'providers/AppProviders'
import Root from 'views/Root'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>
)
