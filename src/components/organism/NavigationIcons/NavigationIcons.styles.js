import styled from 'styled-components'

import { ReactComponent as BasketIcon } from 'assets/icons/basket-icon.svg'

export const BasketWrapper = styled.div`
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

export const StyledBasketIcon = styled(BasketIcon)`
  margin-top: 4px;
`
