import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import loginSchema from 'assets/schemas/loginSchema'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'
import { useAuth } from 'hooks/useApi'

import { Wrapper } from './Login.styles'

const Login = () => {
  const { signIn, error } = useAuth()
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  const onSubmit = (data) => {
    signIn(data)
  }

  return (
    <Wrapper action="post" onSubmit={handleFormSubmit(onSubmit)}>
      <h1>Log in</h1>
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
        id="password"
        labelText="Password"
        type={'password'}
        placeholder={'Password'}
        {...register('password')}
        error={errors?.password?.message}
        required
      />
      {error && <span>{error}</span>}
      <Button isBig type="submit">
        Log in
      </Button>
      <span>You don't have an account?</span>
      <Link to="/register">
        <b>Sign up</b>
      </Link>
    </Wrapper>
  )
}

export default Login
