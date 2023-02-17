import React from 'react'
import '../../style/Global.css'
import { Avatar } from '@material-tailwind/react'

const SortedListCard = ({title, profile, bg}) => {
  return (
    <section className='sorted_list_card text-white'>
      <div className='sorted_list_main'>
        <div className='shadow p-3'>
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className='sorted_card_ w-full h-72 relative bg-cover bg-no-repeat bg-center'
          >
            <div className='sorted_card_content absolute top-0 left-0 bg-black opacity-50 z-20 w-full h-full'></div>
            {/* sorted content  */}
            <div className='absolute top-0 left-0 z-20 w-full h-full p-5'>
              <div className='sorted_close text-right'>
                <span className='bg-[#999999] px-2 py-1 rounded-full'>
                  Closed
                </span>
              </div>
              <div className='store_list_content'>
                <h2 className='text-3xl font-libre text-shadow'>{title}</h2>
                <div className='rating flex items-center'>
                  <i class='ri-star-fill text-yellow text-2xl py-1'></i>
                  <i class='ri-star-fill text-yellow text-2xl py-1'></i>
                  <i class='ri-star-fill text-yellow text-2xl py-1'></i>
                  <i class='ri-star-fill text-yellow text-2xl py-1'></i>
                  <i class='ri-star-line text-yellow text-2xl py-1'></i>
                </div>
                <p className='text-xl font-lato font-medium'>1430 Satrkey,</p>
                <p className='text-xl font-lato font-medium'>Pretoria,</p>
                <p className='text-xl font-lato font-medium'>Austria</p>
                <div className='call flex items-center'>
                  <span>
                    <i class='ri-phone-fill text-2xl pr-2'></i>
                  </span>
                  <span className='text-2xl text-lato font-medium'>
                    1240145645
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* profile section  */}
          <div className='sorted_cart_profile text-black flex justify-between px-5 mt-5'>
            <span className='cursor-pointer bg-white hover:bg-primary hover:text-white shadow border rounded-full border-gray w-10 h-10 flex justify-center items-center'>
              <i class='ri-arrow-right-s-line text-3xl'></i>
            </span>
            <div className='profile w-24 h-24 -mt-20 p-2 bg-white rounded-full static z-50'>
              <Avatar className='w-full h-full' src={profile} alt='avatar' variant='circular' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SortedListCard
