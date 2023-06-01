import * as yup from 'yup'

const orderSchema = yup.object().shape({
  city: yup.string().required('City is required').matches(/^\D+$/, 'City cannot contain numbers'),
  postalCode: yup
    .string()
    .matches(/^\d{2}-\d{3}$/, 'Invalid postal code')
    .required('Postal code is required'),
  street: yup.string().required('Street is required'),
  homeNumber: yup.number().typeError('Home number is required').required('Home number is required'),
  mobileNumber: yup
    .number()
    // matches doesnt work with numbers, only with strings
    .required('Mobile number is required')
    .test('is-valid-mobile', 'Mobile number must be exactly 9 digits', (value) => {
      if (value) {
        const mobileNumberRegex = /^\d{9}$/
        return mobileNumberRegex.test(value.toString())
      }
      return false
    })
    .required('Mobile number number is required'),
})

export default orderSchema
