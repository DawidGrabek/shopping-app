import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  padding: 5px 10px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    margin-left: 10px;
  }

  svg {
    width: 60px;
  }
`
