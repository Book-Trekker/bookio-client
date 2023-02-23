import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: 'afterChildren' },
  },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
    },
  },
}

const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: '-100%',
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
}

const SidebarMenu = ({ m, showAnimation, isOpenSidebar, setIsOpenSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
    setIsOpenSidebar(true)
    // console.log("clieddd", isMenuOpen);
  }

  useEffect(() => {
    if (!isOpenSidebar) {
      setIsMenuOpen(false)
    }
  }, [isOpenSidebar])
  return (
    <>
      <div
        className='border-b-[1px] border-[hsla(0,0%,90%,.5)] pt-[8px] pb-[6px] flex items-center justify-between cursor-pointer'
        onClick={toggleMenu}
      >
        <div className='menu_item '>
          <div className='icon'>{m.icon}</div>
          <AnimatePresence>
            {isOpenSidebar && (
              <motion.div
                variants={showAnimation}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='link_text text-[#000]'
              >
                {m.menu}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpenSidebar && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <i className='ri-arrow-down-s-line text-[#777] text-[22px]'></i>
          </motion.div>
        )}
      </div>{' '}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='menu_container'
          >
            {m.subMenu.map((subm, i) => (
              <motion.div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink to={subm.subMenuPath} className='link'>
                  <div className='icon'>{subm.icon}</div>
                  <motion.div className='link_text'>
                    <li
                      onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                      className='border-b border-b-[#e6e6e6] mb-1 list-none py-5  m_icon relative'
                    >
                      {subm.subMenuName}
                    </li>
                  </motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}{' '}
      </AnimatePresence>
    </>
  )
}

export default SidebarMenu
