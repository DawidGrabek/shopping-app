import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import orderSchema from 'assets/schemas/orderSchema'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'
import { add } from 'features/orderSlice'

import { Wrapper } from './Order.styles'

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(orderSchema) })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(add(data))
    navigate('/order/final')
  }

  return (
    <Wrapper action="post" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        id="city"
        labelText="City"
        type={'text'}
        placeholder={'City'}
        {...register('city')}
        error={errors?.city?.message}
        required
      />
      <FormField
        id="postalCode"
        labelText="Postal Code"
        type={'text'}
        placeholder={'11-111'}
        {...register('postalCode')}
        error={errors?.postalCode?.message}
        required
      />
      <FormField
        id="street"
        labelText="Street"
        type={'text'}
        placeholder={'Lipowa'}
        {...register('street')}
        error={errors?.street?.message}
        required
      />
      <FormField
        id="homeNumber"
        labelText="Home Number"
        type={'number'}
        placeholder={'5'}
        {...register('homeNumber')}
        error={errors?.homeNumber?.message}
        required
      />
      <FormField
        id="mobileNumber"
        labelText="Mobile Number"
        type={'number'}
        placeholder={'123456789'}
        {...register('mobileNumber')}
        error={errors?.mobileNumber?.message}
        required
      />
      <Button type="submit">Next</Button>
    </Wrapper>
  )
}

export default Order
