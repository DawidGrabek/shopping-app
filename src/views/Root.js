import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Footer from 'components/molecules/Footer/Footer'
import Header from 'components/molecules/Header/Header'
import BasketList from 'components/organism/BasketList/BasketList'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import { ThemeProvider } from 'styled-components'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchBar from 'components/molecules/SearchBar/SearchBar'
import { useSelector } from 'react-redux'

const Root = () => {
  const { isShowingSearchBar } = useSelector((state) => state.searchBarSlice)

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isShowingSearchBar ? <SearchBar /> : <Header>Your Fragnaces</Header>}

        <Routes>
          <Route path="/basket" element={<BasketList />} />
          <Route path="/" element={<FragranceList />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default Root
