import styled from 'styled-components'
import { Wrapper as FragranceItemWrapper } from 'components/molecules/FragranceItem/FragranceItem.styles'
import { Wrapper as FragranceListWrapper } from '../FragranceList/FragranceList.styles'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 390px;
  max-height: 30vh;
  overflow-y: scroll;
  top: 0;
  display: flex;
  justify-content: center;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 3px solid ${({ theme }) => theme.colors.darkGrey};
`

export const NewFragranceList = styled(FragranceListWrapper)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  ${FragranceItemWrapper} {
    flex-direction: row;
    justify-content: center;
  }
`
