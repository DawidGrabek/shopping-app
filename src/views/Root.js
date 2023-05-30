import { useSelector } from 'react-redux'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Footer from 'components/molecules/Footer/Footer'
import Header from 'components/molecules/Header/Header'
import SearchBar from 'components/molecules/SearchBar/SearchBar'
import BasketList from 'components/organism/BasketList/BasketList'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import Order from 'components/pages/Order/Order'
import Profile from 'components/pages/Profile/Profile'
import { ThemeProvider } from 'styled-components'

const Root = () => {
  const { isShowingSearchBar } = useSelector((state) => state.searchBarSlice)

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isShowingSearchBar ? <SearchBar /> : <Header>Your Fragnaces</Header>}
        <Routes>
          <Route path="/basket" element={<BasketList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Order />} />
          <Route path="/" element={<FragranceList />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default Root
