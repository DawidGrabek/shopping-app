import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding: ${({ isBig }) => (isBig ? '16px 32px' : '8px 18px')};
  background-color: ${({ theme, isNegative }) =>
    isNegative ? theme.colors.negative : theme.colors.blue};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.l : theme.fontSize.m)};
  cursor: pointer;
`
