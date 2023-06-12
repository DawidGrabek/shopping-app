import styled from 'styled-components'

interface Props {
  hasBackgroundColor?: boolean
}

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  z-index: 101;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  & > button {
    margin-top: 20px;
    max-width: fit-content;
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const ModalBackground = styled.div<Props>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ hasBackgroundColor }) =>
    hasBackgroundColor ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
`
