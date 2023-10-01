import { Button } from '@material-tailwind/react'
import React from 'react'

const BillingDetails = () => {
  return (
    <section className='my-10 px-5 md:px-10'>
      <form>
        <div className='grid grid-cols-12 py-3'>
          <div className='grid col-span-12 md:col-span-8 w-full'>
            <h2 className='text-xl md:text-3xl font-libre font-bold'>
              Billing Details
            </h2>
            <div className='py-5'>
              {/* first name  */}
              <div className='w-full flex flex-col gap-2 pr-5'>
                <label htmlFor='f_name'>
                  First name <span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* last name  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='l_name'>
                  Last name <span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>

              {/* company name  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='company_name'>Company name (optional)</label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* Country name  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='country_name'>
                  Country / Region <span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* Street address  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='street_address'>
                  Street address <span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* Town  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='town'>
                  Town / City <span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* District */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='district'>
                  District<span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* Postcode / Zip  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='post_code'>Postcode / ZIP (optional)</label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* Phone  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='phone'>
                  Phone <span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
              {/* Email Address  */}
              <div className='w-full flex flex-col gap-2 pr-5 mt-5'>
                <label htmlFor='email'>
                  Email address<span className='text-red-500'>*</span>
                </label>
                <input
                  className='border-b-4 pb-2 border-gray border-opacity-20'
                  type='text'
                  placeholder=''
                />
              </div>
            </div>
          </div>
          <div className='grid col-span-12 md:col-span-4 p-5 border w-full'>
            <div>
              <h2 className='text-xl md:text-3xl font-libre font-medium'>
                Product
              </h2>
              <div className='py-3 mt-3'>
                <div className='w-full flex justify-between border-b border-gray border-opacity-20 pb-4'>
                  <div className='flex'>
                    <img
                      className='w-16 h-24'
                      src='https://wpbingosite.com/wordpress/bookio/wp-content/uploads/2018/05/Image-7-480x693.jpg'
                      alt='book/img'
                    />
                    <div className='pl-3'>
                      <h4>HEALED NEW LIFE</h4>
                      <h5 className='font-bold'>QTY : 1</h5>
                    </div>
                  </div>
                  <div>$980</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default BillingDetails
