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

  const handleOpenFragranceDetails = (fragrance) => {
    setCurrentFragrance(fragrance)
    handleOpenModal()
  }

  const handleClick = (fragrance) => {
    setCurrentFragrance(fragrance)
  }

  return (
    <Wrapper>
      {data.map((item) => (
        <FragranceItem
          addToBasket={addToBasket}
          key={item.name}
          {...item}
          handleOpenFragranceDetails={handleOpenFragranceDetails}
          onClick={handleClick}
          fragrance={item}
        />
      ))}
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <FragranceItem
            isInModal
            addToBasket={addToBasket}
            name={currentFragrance.name}
            capacity={currentFragrance.capacity}
            price={currentFragrance.price}
            src={currentFragrance.src}
          />
        </Modal>
      ) : null}
    </Wrapper>
  )
}

export default FragranceList
