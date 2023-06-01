import styled from 'styled-components'

export const Wrapper = styled.form`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px auto 120px auto;

  & > h1 {
    font-size: 42px;
  }

  & > a,
  & > button {
    margin: 30px auto 0 auto;
    max-width: 150px;
    padding: 16px 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    max-width: 70%;
  }
`

export const ProductsWrapper = styled.div`
  margin: 25px auto 0px 15px;
  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: 28px;
  }

  & > span {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    padding: 5px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    margin-left: 3vw;
  }
`

export const TotalPrice = styled.div`
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.grey}; */
  padding: 20px 0;
  text-align: start;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`
