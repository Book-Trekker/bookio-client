import React, { useState } from 'react'
import { Checkbox } from '@material-tailwind/react'
import { useFormik } from 'formik'
import { signUpSchema } from '../../../schemas'

const initialValues = {
  name: '',
  lname: '',
  shop: '',
  phone: '',
  email: '',
  password: '',
  // confirmPassword: '',
}

const SignUp = () => {
  const [checkedBox, setCheckedBox] = useState(null)
  console.log(checkedBox)

  const handleCheckboxClick = (event) => {
    if (event.target.value === checkedBox) {
      // Uncheck the box if it's already checked
      setCheckedBox(null)
    } else {
      // Check the box and uncheck the other one
      setCheckedBox(event.target.value)
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values)
        action.resetForm()
      },
    })

  return (
    <section className='login border-2 border-[#eaeaea] rounded pt-12 pb-4'>
      <div className='login_title'>
        <h2 className='custom_border relative flex items-center justify-center text-center text-2xl font-bold text-black font-libre pb-2'>
          <span>
            <i className='ri-logout-box-line pr-2'></i>
          </span>{' '}
          Register
        </h2>
      </div>
      <form onSubmit={handleSubmit} className='input_field px-5 md:px-12 py-5'>
        {/* input email  */}
        <div className='input_email flex flex-col mb-2'>
          <label htmlFor='email' className='input-label pb-2 text-[#767a79]'>
            Email address <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='email'
            autoComplete='off'
            name='email'
            id='email'
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className='text-red-500'>{errors.email}</p>
          ) : null}
        </div>
        {/* input password  */}
        <div className='input_email flex flex-col mb-2'>
          <label htmlFor='password' className='input-label pb-2 text-[#767a79]'>
            Password <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='password'
            autoComplete='off'
            name='password'
            id='password'
            values={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className='text-red-500'>{errors.password}</p>
          ) : null}
        </div>

        {/* conditional input field  */}

        {/* input First Name  */}
        {checkedBox === "checkbox2" && <div className='input_email flex flex-col mb-2'>
          <label htmlFor='name' className='input-label pb-2 text-[#767a79]'>
            First Name <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='text'
            autoComplete='off'
            name='name'
            id='name'
            values={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className='text-red-500'>{errors.name}</p>
          ) : null}
        </div>}

        {/* input Last Name  */}
        {checkedBox === "checkbox2" && <div className='input_email flex flex-col mb-2'>
          <label htmlFor='lname' className='input-label pb-2 text-[#767a79]'>
            Last Name <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='text'
            autoComplete='off'
            name='lname'
            id='lname'
            values={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lname && touched.lname ? (
            <p className='text-red-500'>{errors.lname}</p>
          ) : null}
        </div>}

        {/* input Last Name  */}
        {checkedBox === "checkbox2" && <div className='input_email flex flex-col mb-2'>
          <label htmlFor='lname' className='input-label pb-2 text-[#767a79]'>
            Last Name <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='text'
            autoComplete='off'
            name='lname'
            id='lname'
            values={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lname && touched.lname ? (
            <p className='text-red-500'>{errors.lname}</p>
          ) : null}
        </div>}

        {/* input shop Name  */}
        {checkedBox === "checkbox2" && <div className='input_email flex flex-col mb-2'>
          <label htmlFor='shop' className='input-label pb-2 text-[#767a79]'>
            Shop Name <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='text'
            autoComplete='off'
            name='shop'
            id='shop'
            values={values.shop}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.shop && touched.shop ? (
            <p className='text-red-500'>{errors.shop}</p>
          ) : null}
        </div>}

        {/* input phone number  */}
        {checkedBox === "checkbox2" && <div className='input_email flex flex-col mb-2'>
          <label htmlFor='phone' className='input-label pb-2 text-[#767a79]'>
            Phone Number <span className='text-red-500'>*</span>
          </label>
          <input
            className='border-2 px-2 py-4 border-[#eaeaea]'
            type='number'
            autoComplete='off'
            name='phone'
            id='phone'
            values={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? (
            <p className='text-red-500'>{errors.phone}</p>
          ) : null}
        </div>}

        {/* I am a vendor */}
        <div className='flex justify-between py-2'>
          <label className='inline-flex items-center'>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 rounded-full text-gray-600'
              value='checkbox1'
              checked={checkedBox === 'checkbox1'}
              onChange={handleCheckboxClick}
            />
            <span className='ml-2 text-gray-700'>I am a customer</span>
          </label>

          <label className='inline-flex items-center ml-6'>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 rounded-full text-gray-600'
              value='checkbox2'
              checked={checkedBox === 'checkbox2'}
              onChange={handleCheckboxClick}
            />
            <span className='ml-2 text-gray-700'>I am a vendor</span>
          </label>
        </div>

        {/* login button  */}
        <div className='login_btn my-3'>
          <button className='text-center bg-[#B9B9B9] w-full text-white py-4 text-sm hover:bg-primary'>
            LOGIN
          </button>
        </div>
      </form>
    </section>
  )
}

export default SignUp
