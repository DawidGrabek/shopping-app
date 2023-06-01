import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import loginSchema from 'assets/schemas/loginSchema'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'

import { Wrapper } from './Login.styles'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  const onSubmit = (data) => {
    console.log(data, errors)
  }

  return (
    <Wrapper action="post" onSubmit={handleSubmit(onSubmit)}>
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
