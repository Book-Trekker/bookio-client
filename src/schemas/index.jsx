import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  email: Yup.string().email().required('Please enter username or email'),
  password: Yup.string().min(6).required('Please enter your password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Password mismatch'),
})
