import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <section className='mobile_menu fixed bottom-0 w-full block md:hidden'>
      <div className='menu bg-white h-14 text-black grid grid-cols-4 items-center justify-evenly'>
        <div className='menu_link text-center'>
          <Link to='/shop'>
            <i class='ri-shopping-basket-line text-2xl'></i>
          </Link>
        </div>
        <div className='menu_link text-center'>
          <Link to='/account'>
            <i class='ri-user-line text-2xl'></i>
          </Link>
        </div>
        <div className='menu_link text-center'>
          <Link to='/'>
            <i class='ri-search-line text-2xl'></i>
          </Link>
        </div>
        <div className='menu_link text-center'>
          <Link to='/wishlist'>
            <i class='ri-heart-line text-2xl'></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MobileMenu
