import styled from 'styled-components'

export const Wrapper = styled.form`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px auto 120px auto;

  & > a,
  & > button {
    margin: 30px auto 0 auto;
    max-width: 150px;
    padding: 16px 32px;
  }
`
