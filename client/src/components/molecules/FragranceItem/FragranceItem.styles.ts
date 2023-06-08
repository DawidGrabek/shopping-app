import { FragranceImage } from 'components/atoms/FragranceImage/FragranceImage.styles'
import styled from 'styled-components'

interface Props {
  height?: string
  isInModal?: boolean // add a few options
  isBasketList?: boolean
}

export const Wrapper = styled.div<Props>`
  height: ${({ height }) => height || '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isInModal }) => isInModal && 'center'};

  text-align: center;
  margin: ${({ isBasketList }) => isBasketList && '0 15px'};

  ${FragranceImage} {
    pointer-events: ${({ isInModal }) => isInModal && 'none'};
  }
`

export const AmountSelect = styled.select`
  height: 40px;
  width: 45px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  border-radius: 5px;
  padding-left: 5px;
  border: none;
`

export const ButtonAndSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
