import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 75px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 35px 35px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 8px;

  /* @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    display: none;

    & > div,
    & > svg {
      display: none;
    }
  } */
`
