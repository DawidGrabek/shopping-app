import React from 'react'

import AuthorizedApp from 'components/templates/AuthorizedApp/AuthorizedApp'
import UnauthorizedApp from 'components/templates/UnauthorizedApp/UnauthorizedApp'
import { useAuth } from 'hooks/useApi'

const Root: React.FC = () => {
  const { user } = useAuth()
  console.log(user)

  return <>{user ? <AuthorizedApp /> : <UnauthorizedApp />}</>
}

export default Root
