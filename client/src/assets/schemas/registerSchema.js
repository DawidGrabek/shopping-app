import * as yup from 'yup'

const registerSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email format'),
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[A-Za-z]+$/, 'First name must contain only letters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[A-Za-z]+$/, 'Last name must contain only letters'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  repeatPassword: yup
    .string()
    .required('Repeat password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export default registerSchema
