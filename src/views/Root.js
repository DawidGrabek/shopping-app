import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Footer from 'components/molecules/Footer/Footer'
import Header from 'components/molecules/Header/Header'
import BasketList from 'components/organism/BasketList/BasketList'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

const Root = () => {
  const [basketIsOpen, setBasketIsOpen] = useState(false)

  console.log(basketIsOpen)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>Your Fragnaces</Header>
      <BasketList basketIsOpen={basketIsOpen} setBasketIsOpen={setBasketIsOpen} />
      <FragranceList />
      <Footer setBasketIsOpen={setBasketIsOpen} />
    </ThemeProvider>
  )
}

export default Root
