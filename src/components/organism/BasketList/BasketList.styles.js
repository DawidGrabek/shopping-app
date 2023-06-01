import { Wrapper as FragranceItemWrapper } from 'components/molecules/FragranceItem/FragranceItem.styles'
import styled from 'styled-components'

import { Wrapper as FragranceListWrapper } from '../FragranceList/FragranceList.styles'

export const Wrapper = styled.div`
  width: 100%;
  /* min-height: 300px; */
  /* max-height: 30vh; */
  overflow-y: scroll;
  /* top: 0; */
  display: flex;
  justify-content: center;
  /* left: 0; */
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
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 20px 0;
  text-align: center;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`
