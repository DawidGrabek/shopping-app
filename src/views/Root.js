import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Footer from 'components/molecules/Footer/Footer'
import Header from 'components/molecules/Header/Header'
import BasketList from 'components/organism/BasketList/BasketList'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import { ThemeProvider } from 'styled-components'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>Your Fragnaces</Header>
      <BasketList />
      <FragranceList />
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default Root
