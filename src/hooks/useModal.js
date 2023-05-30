import { useState } from 'react'

import Modal from 'components/organism/Modal/Modal'

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  return {
    Modal,
    isOpen,
    handleCloseModal,
    handleOpenModal,
  }
}

export default useModal
