import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import Root from 'views/Root.js'

import { store } from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
)
