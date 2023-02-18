import React from 'react'
import subs from '../../assets/images/about/subs-bg.png'
import { Input } from '@material-tailwind/react'
import '../../style/Global.css'

const Subscribe = () => {
  return (
    <section
      style={{ backgroundImage: `url(${subs})` }}
      className='sub_sec w-full h-96 bg-no-repeat bg-center bg-cover'
    >
      <div className='text-center py-10'>
        <div className='icon'>
          <i class='ri-mail-send-line text-white text-5xl'></i>
          <h3 className='text-2xl text-white font-bold font-libre'>
            Our top books, exclusive content and competitions. <br></br>{' '}
            Straight to your inbox.
          </h3>
          {/* input field  */}
          <div className='w-1/3 mx-auto text-white flex sub-btn'>
            <Input className='focus:text-white' variant='your email address' label='your email address' />
            <button className='border-b ml-2'>Subscribe</button>
          </div>
          <p className='text-white font-lato text-[14px] my-5'>By clicking subscribe, I acknowledge that I have read and agree to Bookio’s</p>
          <a className='text-white underline' href="http://google.com" target="_blank" rel="noreferrer">Terms of Use and Privacy Policy.</a>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
