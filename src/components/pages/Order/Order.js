import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import orderSchema from 'assets/schemas/orderSchema'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'

import { Wrapper } from './Order.styles'

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(orderSchema) })

  const onSubmit = (data) => {
    console.log(data)
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
      />
      <FormField
        id="postalCode"
        labelText="Postal Code"
        type={'text'}
        placeholder={'11-111'}
        {...register('postalCode')}
        error={errors?.postalCode?.message}
      />
      <FormField
        id="street"
        labelText="Street"
        type={'text'}
        placeholder={'Lipowa'}
        {...register('street')}
        error={errors?.street?.message}
      />
      <FormField
        id="homeNumber"
        labelText="Home Number"
        type={'number'}
        placeholder={'5'}
        {...register('homeNumber')}
        error={errors?.homeNumber?.message}
      />
      <FormField
        id="mobileNumber"
        labelText="Mobile Number"
        type={'number'}
        placeholder={'123456789'}
        {...register('mobileNumber')}
        error={errors?.mobileNumber?.message}
      />
      <Button type="submit" isBig>
        Next
      </Button>
    </Wrapper>
  )
}

export default Order
