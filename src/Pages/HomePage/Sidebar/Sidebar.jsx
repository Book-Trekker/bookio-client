import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import DropDownMenu from '../Header/BottomHeader/BottomHeader'
import menuList from '../../../utilities/Menu'
import SidebarMenu from './SidebarMenu'
import '../../../style/Global.css'
import { useState } from 'react'

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: 'auto',
    transition: {
      duration: 0.5,
    },
  },
}
const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <motion.div
      animate={{
        width: isOpenSidebar ? '300px' : '0px',
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 10,
        },
      }}
      className='w-[300px] h-screen fixed top-0 overflow-x-hidden overflow-y-scroll left-0 bg-[#ffff] z-[9999] shadow-lg shadow-[0 1px 12px 2px hsl(0deg 0% 56% / 30%)]'
    >
      {/* <div className="w-full h-screen bg-[#e2070770] fixed top-0 left-0 z-50"></div> */}
      <div
        onClick={() => setIsOpenSidebar(false)}
        className=' px-5 py-3 cursor-pointer  flex items-center justify-between text-[#fff]'
      >
        <div>
          <Link to='/'>
            {' '}
            <img
              width='200px'
              src='https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/logo-1.png.webp'
              alt=''
            />
          </Link>
        </div>
        <i className='ri-close-line text-[20px] w-10 h-10 flex justify-center items-center border-gray border rounded-full text-black font-bold'></i>
      </div>
      <div className='mx-5'>
        {menuList.map((m, index) => {
          if (m.subMenu) {
            return (
              <SidebarMenu
                setIsOpenSidebar={setIsOpenSidebar}
                isOpenSidebar={isOpenSidebar}
                showAnimation={showAnimation}
                key={index}
                m={m}
              />
            )
          } else {
            return (
              <NavLink
              className=""
                to={m.path}
                key={index}
              >
                <div className='icon'>{m.icon}</div>
                <AnimatePresence>
                  {isOpenSidebar && (
                    <motion.div
                      variants={showAnimation}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                      className='link_text'
                    >
                      <li onClick={()=> setIsOpenSidebar(!isOpenSidebar)} className='border-b border-b-[#e6e6e6] mb-1 list-none py-5  m_icon relative'>{m.menu}</li>
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            )
          }
        })}
      </div>
    </motion.div>
  )
}

export default Sidebar
