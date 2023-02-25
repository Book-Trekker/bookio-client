import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import '../../style/Global.css'
import home from '../../assets/images/logo/home-animate.gif'

const MobileMenu = () => {
  const [openSearch, setOpenSearch] = useState(false)
  // mobile menu
  const navigate = useNavigate()
  const handleCloseSearch = () => {
    setOpenSearch(false)
    navigate(-1)
  }

  return (
    <>
      <section className='mobile_menu fixed bottom-0 w-full block md:hidden z-40 bg-white'>
        <div className='menu bg-white h-14 text-black grid grid-cols-5 items-center justify-evenly relative'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-full h-full menu_link flex justify-center items-center active_ custom_link_'
                : 'w-full h-full menu_link flex justify-center items-center custom_link_'
            }
            to='/shop'
          >
            <i class='ri-shopping-basket-line text-2xl'></i>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-full h-full menu_link flex justify-center items-center active_ custom_link_'
                : 'w-full h-full menu_link flex justify-center items-center custom_link_'
            }
            to='/account'
          >
            <i class='ri-user-line text-2xl'></i>
          </NavLink>
          {/* mobile home button  */}
          {/* <NavLink
            className='w-full h-full menu_link flex justify-center items-center'
            to='/'
          >
            <img className='w-16' src={home} alt='home/img' />
          </NavLink> */}
          <div></div>
          <div onClick={()=> navigate("/")} className='cursor-pointer absolute w-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img className='w-full' src={home} alt='home/img' />
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-full h-full menu_link flex justify-center items-center active_ custom_link_'
                : 'w-full h-full menu_link flex justify-center items-center custom_link_'
            }
            onClick={() => setOpenSearch(true)}
            to='/search'
          >
            <i class='ri-search-line text-2xl'></i>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-full h-full menu_link flex justify-center items-center active_ custom_link_'
                : 'w-full h-full menu_link flex justify-center items-center custom_link_'
            }
            to='/wishlist'
          >
            <i class='ri-heart-line text-2xl'></i>
          </NavLink>
        </div>
      </section>
      {/* mobile search option  */}
      {openSearch && (
        <div className='search_menu_ w-full h-screen fixed top-0 left-0 bg-white z-50 flex items-center'>
          <div className='w-full'>
            <div className='flex justify-between items-center w-full px-5'>
              <h3 className='text-[17px] font-libre font-bold'>
                What are you looking for
              </h3>
              <h3
                onClick={handleCloseSearch}
                className='flex items-center font-libre cursor-pointer'
              >
                CLOSE{' '}
                <span className='flex items-center pl-1'>
                  <i class='ri-close-line'></i>
                </span>
              </h3>
            </div>
            {/* search input field  */}
            <div className='w-full px-5 my-3'>
              <Input
                variant='standard'
                label='Search...'
                icon={<i class='ri-search-line text-xl' />}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
