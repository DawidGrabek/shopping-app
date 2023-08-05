import React, { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Button from 'components/atoms/Button/Button'

import { ModalBackground, ModalWrapper } from './Modal.styles'

let modalContainer = document.getElementById('modal-container')

// for testing purposes
if (!modalContainer) {
  modalContainer = document.createElement('div')
  modalContainer.setAttribute('id', 'modal-container')
  document.body.appendChild(modalContainer)
}

interface Props {
  handleClose: () => void
  children: ReactNode
}

const Modal: React.FC<Props> = ({ handleClose, children }) => {
  const modalNode = document.createElement('div')

  useEffect(() => {
    if (modalContainer) {
      modalContainer.appendChild(modalNode)
    }

    return () => {
      if (modalContainer) {
        modalContainer.removeChild(modalNode)
      }
    }
  }, [modalNode])

  return ReactDOM.createPortal(
    <>
      <ModalBackground onClick={handleClose} />
      <ModalWrapper data-testid="modal">
        {children}
        <Button isNegative isBig onClick={handleClose}>
          Close
        </Button>
      </ModalWrapper>
    </>,
    modalNode
  )
}

export default Modal
