import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 40px auto 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & > button {
    width: 200px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > li {
      list-style: none;
      margin-top: 3px;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`

export const Field = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xl};
  gap: 8px;
  margin-bottom: 10px;

  & > span {
    font-weight: 700;
  }
`
