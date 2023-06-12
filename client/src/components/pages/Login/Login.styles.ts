import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 120px auto;

  & > button {
    margin: 40px auto 20px;
    max-width: 150px;
    padding: 16px 32px;
  }

  & > span {
    color: ${({ theme }) => theme.colors.negative};
    margin-top: 10px;
    font-weight: 700;
  }
`
