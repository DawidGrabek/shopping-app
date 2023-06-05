import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100vh - 70px - 75px);
  margin: 40px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 30px;

  & > button {
    width: 200px;
    font-size: ${({ theme }) => theme.fontSize.xl};
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
