import styled from 'styled-components'

import { ReactComponent as ShoppingCartIcon } from 'assets/icons/shopping-cart-icon.svg'

export const StyledFragranceList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;
`

export const ShoppingCartWrapper = styled.div`
  position: relative;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    margin-top: 12px;
  }
`

export const StyledCircle = styled.div`
  position: absolute;
  right: -10px;
  top: -5px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: bold;
`

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  margin-top: 4px;
`
