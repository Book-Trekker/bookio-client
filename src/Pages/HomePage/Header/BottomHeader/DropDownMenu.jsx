import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const DropDownMenu = ({ m }) => {
  return (
    <div className='relative z-50 group inline-block py-3'>
      <div className='hover:text-light_green flex items-center text-[16px] text-[#064532] font-semibold'>
        {m.menu} <BiChevronDown />
      </div>
      <motion.div className='absolute text-light_black top-12  left-0 w-[200px] p-[20px]  transform  opacity-0 shadow-lg bg-[#fff]  translate-y-[30px] group-hover:translate-y-0 bg-light_white flex flex-col    group-hover:visible  transition-all ease-linear delay-200 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100  border-t-[2px] border-[#064532]'>
        <span className='absolute top-[-22px] left-2'>
          <i className='ri-arrow-up-s-fill text-[1.5rem] text-[#064532]'></i>
        </span>
        {m.subMenu?.map((sub, index) => (
          <div
            className=' text-[14px]  bg-[#fff] font-medium text-[#767a79] hover:text-[#064532] mb-2'
            key={index}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? 'custom_link active' : 'custom_link'
              }
              to={sub.subMenuPath}
            >
              {sub.subMenuName}
            </NavLink>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default DropDownMenu
