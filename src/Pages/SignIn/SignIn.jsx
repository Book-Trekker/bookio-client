import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import loginImage from '../../assets/gif/login.gif'
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import Cookies from 'js-cookie'
import {
  useGetProfileQuery,
  useLoginMutation,
} from '../../redux/features/users/userApiSlice'
import { toast } from 'react-toastify'

export default function SignIp() {
  const location = useLocation()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 50,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleNavigate = (path) => {
    navigate(path)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const onSubmit = async (data) => {
    await login(data)
      .unwrap()
      .then((data) => {
        const token = data?.data?.accessToken
        if (token) {
          Cookies.set('accessToken', token)
        }
        toast.success('Welcome 👋👋👋 ', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
        navigate('/')
      })
      .catch((error) => {
        // Handle login error
        console.error('Login Error:', error)
      })
  }

  const termsAndConditionsChecked = watch('termsAndConditions', false)

  return (
    <>
      {/* breadCumb  */}
      <BreadCumb
        first={'Home'}
        second={'Login'}
        route={'/sing_in'}
        MyAccount={'Login Your Account'}
      />
      <div className='px-10 mb-12'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12 md:col-span-7'>
            <div className='img'>
              <img src={loginImage} alt='' />
              <div className='svg_img hidden md:block absolute top-[75%] left-[40%] transform rotate-90'>
                <svg
                  className='absolute left-[55%] -bottom-[20%] hidden h-[150px] w-[580px] -translate-x-1/2 -translate-y-1/2 transform lg:block'
                  fill='none'
                  data-reveal='in-fade'
                >
                  <path
                    d='M1 1c7.255 23.316 12.132 49.428 31.848 67.45 11.32 10.349 16.684 18.72 32.52 24.395 13.96 5.003 51.325 18.606 66.469 5.364 7.463-6.526 16.624-20.318 3.781-26.82-6.446-3.262-17.016-2.214-24.201-1.616-5.314.443-6.954 5.964-8.739 9.258-5.374 9.922-2.814 24.311 4.874 32.256 17.363 17.942 41.593 32.2 69.242 35.71 22.248 2.823 45.197 1.977 67.561 4.041 34.213 3.157 70.887 7.217 104.031 15.577 18.72 4.721 37.381 9.547 56.133 14.18 10.798 2.669 27.801 6.337 37.726 11.137C463.073 201.574 473.557 214.827 479 218'
                    stroke='#AAD1B6'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeDasharray='4 8 4 8'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-5'>
            <h3
              // onClick={() =>
              //   Cookies.set(
              //     'accessToken',
              //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGhvbmVOdW1iZXIiOjQxNjQ2NDY1NDY1NDUsInJvbGUiOiJzZWxsZXIiLCJpYXQiOjE2OTI5NzYxNTAsImV4cCI6MTY5Mzg0MDE1MH0.n0RIdTzSzsRAZzi1urgI67E5eieTeejiQFh1N7mq7AI'
              //   )
              // }
              className='accountTitle'
            >
              Login
            </h3>
            <div className='mt-3'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-4'>
                  <Input
                    type='text'
                    label='Phone Number'
                    className=''
                    icon={<i className='ri-phone-line'></i>}
                    {...register('phoneNumber', {
                      required: 'Phone Number is required',
                    })}
                    error={errors.phoneNumber?.message}
                  />
                  {errors.phoneNumber && (
                    <span className='text-red-500'>
                      {errors.phoneNumber.message}
                    </span>
                  )}

                  <Input
                    type='password'
                    label='Password'
                    className=''
                    icon={<i className='ri-lock-unlock-line'></i>}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters',
                      },
                    })}
                    error={errors.password?.message}
                  />
                  {errors.password && (
                    <span className='text-red-500'>
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className='mt-3 flex items-center'>
                  <Checkbox
                    label={
                      <Typography
                        variant='small'
                        color='gray'
                        className='flex items-center font-normal'
                      >
                        Remember me
                      </Typography>
                    }
                    containerProps={{ className: '-ml-2.5' }}
                    {...register('termsAndConditions', { required: false })}
                  />
                </div>
                <Button type='submit' className='bg-secondary mt-3'>
                  Login
                </Button>
              </form>
            </div>
            <p className='text-[rgba(75,85,99,1)] text-[.875rem] mt-[.5rem] font-Fira'>
              Do not have an account yet?
              <Link
                to='/sign_up'
                className='text-[rgba(79,70,229,1)] font-[600] ml-2 text-[1.2rem] '
              >
                Sign Up 🚀
              </Link>
            </p>
            <div className=''>
              <div className='flex items-center mt-5 mb-6'>
                <hr className='flex-grow border-[rgba(209,213,219,1)] border-t' />
                <p className='mx-3 text-[rgba(55,65,81,1)]'>Or continue with</p>
                <hr className='flex-grow border-[rgba(209,213,219,1)] border-t' />
              </div>
            </div>
            <div className='mt-5'>
              <div className='flex flex-col  '>
                <button className='socialLogin flex items-center justify-center'>
                  <i className='ri-google-line text-xl mr-2'></i>
                  Google
                </button>
                <button className='socialLogin flex items-center justify-center'>
                  <i className='ri-github-fill text-xl mr-2'></i>
                  Github
                </button>
                <button className='socialLogin flex items-center justify-center'>
                  <i className='ri-facebook-line text-xl mr-2'></i>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
