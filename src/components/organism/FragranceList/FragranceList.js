import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import React, { useState } from 'react'
import useModal from 'hooks/useModal'
import { Wrapper } from './FragranceList.styles'
import data from 'data'
import { useDispatch } from 'react-redux'
import { add } from 'features/basketSlice'

const FragranceList = () => {
  const [currentFragrance, setCurrentFragrance] = useState(null)
  const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal()
  const dispatch = useDispatch()
  const addToBasket = (fragrance) => dispatch(add(fragrance))

  const handleOpenFragranceDetails = (name) => {
    setCurrentFragrance(name)
    handleOpenModal()
  }

  return (
    <Wrapper>
      {data.map((props) => (
        <FragranceItem
          addToBasket={addToBasket}
          key={props.name}
          {...props}
          handleOpenFragranceDetails={handleOpenFragranceDetails}
        />
      ))}
      {isOpen ? <Modal handleClose={handleCloseModal}>{currentFragrance}</Modal> : null}
    </Wrapper>
  )
}

export default FragranceList
