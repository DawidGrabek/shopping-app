import AuthorizedApp from 'components/templates/AuthorizedApp/AuthorizedApp'
import UnauthorizedApp from 'components/templates/UnauthorizedApp/UnauthorizedApp'
import useAuth from 'hooks/useAuth'

const Root = () => {
  const { user } = useAuth()

  return user ? <AuthorizedApp /> : <UnauthorizedApp />
}

export default Root
