import styled from 'styled-components'

export const Wrapper = styled.div`
  height: ${({ height }) => height || '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: ${({ isBasketList }) => isBasketList && '0 15px'};
`

export const AmountSelect = styled.select`
  height: 40px;
  width: 45px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  border-radius: 5px;
  padding-left: 5px;
  border: none;
`

export const ButtonAndInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
