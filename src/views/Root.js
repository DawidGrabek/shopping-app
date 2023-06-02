import AuthorizedApp from 'components/templates/AuthorizedApp/AuthorizedApp'
import UnauthorizedApp from 'components/templates/UnauthorizedApp/UnauthorizedApp'

const Root = () => {
  const user = false

  return user ? <AuthorizedApp /> : <UnauthorizedApp />
}

export default Root
