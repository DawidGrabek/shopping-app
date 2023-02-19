import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: bold;
  text-align: center;
  width: 110px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
`
