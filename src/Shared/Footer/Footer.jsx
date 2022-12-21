import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='w-full h-40 flex justify-center items-center'>
      <p className='text-center text-black text-xl'>
        Copyright{' '}
        <span className='underline cursor-pointer custom-hover '>©nazmul</span>-{' '}
        <span className='underline cursor-pointer custom-hover '>©sohag</span> .
        2022
      </p>
      <div className='pt-16'></div>
    </footer>
  )
}

export default Footer
