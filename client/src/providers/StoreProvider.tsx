import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from 'app/store'
import PropTypes from 'prop-types'

interface Props {
  children: ReactNode
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node,
}

export default StoreProvider
