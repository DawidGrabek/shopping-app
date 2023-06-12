import React, { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Button from 'components/atoms/Button/Button'

import { ModalBackground, ModalWrapper } from './Modal.styles'

const modalContainer = document.getElementById('modal-container')

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
      <ModalWrapper>
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
