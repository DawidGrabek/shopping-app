import { Wrapper as FragranceItemWrapper } from 'components/molecules/FragranceItem/FragranceItem.styles'
import styled from 'styled-components'

import { Wrapper as FragranceListWrapper } from '../FragranceList/FragranceList.styles'

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`

export const NewFragranceList = styled(FragranceListWrapper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  ${FragranceItemWrapper} {
    flex-direction: row;
    justify-content: center;
  }

  & > h1 {
    margin: 20px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  gap: 15px;

  a {
    color: inherit;
  }
`

export const TotalPrice = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 20px 0;
  text-align: center;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`
