import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <section className='top_header py-5 px-10 customBorder hidden md:block'>
      <div className='flex justify-between items-center'>
        <div className='menu_link flex gap-3'>
          <li className='list-none text-[12px] font-lato font-bold text-gray hover:text-black'>
            <Link to='/'>
              MEMBERSHIP <span className='font-thin opacity-50 ml-2'>|</span>{' '}
            </Link>{' '}
          </li>
          <li className='list-none text-[12px] font-lato font-bold text-gray hover:text-black'>
            <Link to='/'>
              COUPONS & DEALS{' '}
              <span className='font-thin opacity-50 ml-2'>|</span>
            </Link>{' '}
          </li>
          <li className='list-none text-[12px] font-lato font-bold text-gray hover:text-black'>
            <Link to='/'>BESTSELLERS</Link>{' '}
          </li>
        </div>
        <div className='account_link'>
          <div className='flex justify-between items-center gap-3'>
            <li className='list-none text-[12px] font-lato font-bold text-gray hover:text-black'>
              <Link to='/account'>
                <span className='mx-2'>
                  <i class='fas fa-user'></i>
                </span>{' '}
                MY ACCOUNT <span className='font-thin opacity-50 ml-2'>|</span>
              </Link>{' '}
            </li>
            <li className='list-none text-[12px] font-lato font-bold text-gray hover:text-black'>
              <Link to='/wishlist'>
                <span className='mx-2'>
                  <i class='far fa-heart'></i>
                </span>{' '}
                WISHLIST
              </Link>{' '}
            </li>
            <li className='list-none text-[12px] font-lato font-bold text-gray hover:text-black'>
              <Link to='/sign_in'>
                <Button className='bg-primary hover:bg-secondary transition-all duration-300'>Login</Button>
              </Link>{' '}
            </li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopHeader
