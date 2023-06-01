import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import registerSchema from 'assets/schemas/registerSchema'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'

import { Wrapper } from './Register.styles'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })

  const onSubmit = (data) => {
    console.log(data, errors)
  }

  return (
    <Wrapper action="post" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>
      <FormField
        id="email"
        labelText="E-mail"
        type={'email'}
        placeholder={'Email'}
        {...register('email')}
        error={errors?.email?.message}
        required
      />
      <FormField
        id="firstName"
        labelText="First name"
        type={'firstName'}
        placeholder={'First name'}
        {...register('firstName')}
        error={errors?.firstName?.message}
        required
      />
      <FormField
        id="lastName"
        labelText="Last name"
        type={'lastName'}
        placeholder={'Last name'}
        {...register('lastName')}
        error={errors?.lastName?.message}
        required
      />
      <FormField
        id="password"
        labelText="Password"
        type={'password'}
        {...register('password')}
        placeholder={'Password'}
        error={errors?.password?.message}
        required
      />
      <FormField
        id="repeatPassword"
        labelText="Repeat password"
        type={'password'}
        {...register('repeatPassword')}
        placeholder={'Repeat password'}
        error={errors?.repeatPassword?.message}
        required
      />
      <Button isBig type="submit">
        Sign up
      </Button>
      <span>You have an account?</span>
      <Link to="/login">
        <b>Log in</b>
      </Link>
    </Wrapper>
  )
}

export default Register
