import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: calc(50%);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 75vh;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
