import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import orderSchema from 'assets/schemas/orderSchema'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'
import { OrderDetails } from 'helpers/types'

import { Wrapper } from './Order.styles'

interface Props {
  onSubmit: SubmitHandler<OrderDetails>
}

const Order: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderDetails>({ resolver: yupResolver(orderSchema) })
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
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
      <Button isBig type="submit">
        Next
      </Button>
      <Button isBig isNegative onClick={handleGoBack}>
        Back
      </Button>
    </Wrapper>
  )
}

export default Order
