import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  max-height: 70px;
  padding: ${({ isBig }) => (isBig ? '12px 20px' : '5px 10px')};
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  border-radius: 20px;
  border: none;
`
