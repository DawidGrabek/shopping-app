import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { render, RenderOptions } from '@testing-library/react'
import { ApiProvider } from 'hooks/useApi'
import StoreProvider from 'providers/StoreProvider'
import ThemeAndStylesProvider from 'providers/ThemeAndStylesProvider'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ThemeAndStylesProvider>
          <ApiProvider>{children}</ApiProvider>
        </ThemeAndStylesProvider>
      </BrowserRouter>
    </StoreProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
