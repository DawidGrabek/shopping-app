import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.breakPoints.l}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
