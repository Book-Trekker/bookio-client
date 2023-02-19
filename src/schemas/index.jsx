import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required('First name is required')
    .min(3, 'Name must be at least 3 characters long')
    .matches(/^[A-Z][a-z]*$/, 'First name must start with a capital letter')
    .matches(/^[a-zA-Z ]*$/, 'Name must contain only letters and spaces'),
  lname: Yup.string()
    .required('Last name is required')
    .min(3, 'Name must be at least 3 characters long')
    .matches(/^[a-zA-Z ]*$/, 'Name must contain only letters and spaces'),
  shop: Yup.string()
    .required('Shop name is required')
    .min(3, 'Name must be at least 3 characters long')
    .matches(/^[a-zA-Z ]*$/, 'Name must contain only letters and spaces'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^(?:\+88|88)?(01[3-9]\d{8})$/,
      'Input a valid phone number - Ex: +8801xxxxxxxx'
    ),
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(6).required('Please enter your password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Password mismatch'),
})
