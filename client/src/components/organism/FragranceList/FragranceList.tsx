import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import FragranceItem from 'components/molecules/FragranceItem/FragranceItem'
import data from 'data'
import { Fragrance, add } from 'features/basketSlice'
import useModal from 'hooks/useModal'

import { Wrapper } from './FragranceList.styles'

const FragranceList = () => {
  const tempFragrance = {
    fragranceName: '',
    amount: 0,
    capacity: 0,
    price: 0,
    src: '',
  }

  const [currentFragrance, setCurrentFragrance] = useState<Fragrance>(tempFragrance)
  const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal()
  const dispatch = useDispatch()
  const addToBasket = (fragrance: Fragrance) => dispatch(add(fragrance))

  const handleOpenFragranceDetails = (fragrance: Fragrance) => {
    setCurrentFragrance(fragrance)
    handleOpenModal()
  }

  const handleSetCurrentFragrance = (fragrance: Fragrance) => {
    setCurrentFragrance(fragrance)
  }

  return (
    <Wrapper>
      {data.map((item) => (
        <FragranceItem
          addToBasket={addToBasket}
          key={item.name}
          openFragranceDetails={handleOpenFragranceDetails}
          setCurrentFragrance={handleSetCurrentFragrance}
          name={item.name} // TODO: check it
          capacity={item.capacity}
          price={item.price}
          src={item.src}
        />
      ))}
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <FragranceItem
            isInModal
            addToBasket={addToBasket}
            name={currentFragrance.fragranceName}
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
