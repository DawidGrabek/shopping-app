import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 90px;
  position: fixed;
  bottom: -20px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 35px 35px 0 0;
  padding: 1rem 2rem;
`
