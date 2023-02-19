import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Footer from 'components/molecules/Footer/Footer'
import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import Header from 'components/molecules/Header/Header'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import { ThemeProvider } from 'styled-components'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>Your Fragnaces</Header>
      <FragranceList>
        <FragranceItem />
        <FragranceItem />
        <FragranceItem />
        <FragranceItem />
        <FragranceItem />
        <FragranceItem />
      </FragranceList>
      <Footer>footer</Footer>
    </ThemeProvider>
  )
}

export default Root
