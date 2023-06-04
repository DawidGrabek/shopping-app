import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 70px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;

  & > div {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    justify-content: ${({ isUnauthorizedApp }) => (isUnauthorizedApp ? '' : 'space-between')};
    padding: 0 2rem;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      & > svg {
        margin: 0 1rem;
      }
    }
  }
`
