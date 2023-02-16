import React from 'react'
import BreakCumb from '../../Shared/BreadCumb/BreakCumb'
import { Input, Textarea } from '@material-tailwind/react'

const Contact = () => {
  return (
    <section className='contact_section'>
      <div className='contact_main'>
        {/* breadCumb  */}
        <div className='breadCumb'>
          <BreakCumb
            first={'Home'}
            second={'Contact'}
            route={'/contact'}
            MyAccount={'Contact'}
          />
        </div>
        {/* map  */}
        <div className='map mb-16'>
          <iframe
            title='My Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165967.82912136006!2d89.13406068028944!3d23.1918867246301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10709910ee59%3A0x9b23368424b1b5b!2sJessore%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1676534541853!5m2!1sen!2sbd'
            width='100%'
            height='600'
            style={{ border: '0' }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='contact_information px-10 grid grid-cols-12 gap-5 mb-16'>
          <div className='col-span-5'>
            <div className='contact_icon'>
              <div className='contact_icon_one flex items-start border-b border-[#E8E8E8] my-8 pb-5'>
                <div>
                  <i class='ri-home-heart-line text-3xl p-3 border border-[#064532] text-[#064532]'></i>
                </div>
                <div className='pl-5'>
                  <h4 className='uppercase font-libre font-medium tracking-tighter'>
                    Store Location
                  </h4>
                  <p className='text-gray'>
                    9204 Glen Ridge Court Beverly, MA 01915
                  </p>
                </div>
              </div>
              <div className='contact_icon_one flex items-start border-b border-[#E8E8E8] my-8 pb-5'>
                <div>
                  <i class='ri-phone-line text-3xl p-3 border border-[#064532] text-[#064532]'></i>
                </div>
                <div className='pl-5'>
                  <h4 className='uppercase font-libre font-medium tracking-tighter'>
                    CALL US
                  </h4>
                  <p className='text-gray'>(234)400-5174-888</p>
                </div>
              </div>
              <div className='contact_icon_one flex items-start border-b border-[#E8E8E8] my-8 pb-5'>
                <div>
                  <i class='ri-mail-unread-line text-3xl p-3 border border-[#064532] text-[#064532]'></i>
                </div>
                <div className='pl-5'>
                  <h4 className='uppercase font-libre font-medium tracking-tighter'>
                    CARRED
                  </h4>
                  <p className='text-gray'>developer.nazmul1@gmail.com</p>
                </div>
              </div>
              <div className='contact_icon_one flex items-start border-b border-[#E8E8E8] my-8 pb-5'>
                <div>
                  <i class='ri-question-answer-line text-3xl p-3 border border-[#064532] text-[#064532]'></i>
                </div>
                <div className='pl-5'>
                  <h4 className='uppercase font-libre font-medium tracking-tighter'>
                    FAX
                  </h4>
                  <p className='text-gray'>400-5174-888</p>
                </div>
              </div>
              <div className='contact_icon_one flex items-start border-b border-[#E8E8E8] my-8 pb-5'>
                <div>
                  <i class='ri-time-line text-3xl p-3 border border-[#064532] text-[#064532]'></i>
                </div>
                <div className='pl-5'>
                  <h4 className='uppercase font-libre font-medium tracking-tighter'>
                    OPEN HOURS
                  </h4>
                  <p className='text-gray'>Mon-Sat : 08.00 - 18.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-7'>
            {/* leave Us message  */}
            <div className='leave_message relative'>
              <h2 className='text-3xl font-libre font-bold'>
                Leave Us a Message
              </h2>
              <div className='absolute bottom-[-15px] left-0 w-full h-[1px] bg-[#E8E8E8]'></div>
              <div className='absolute bottom-[-15px] left-0 w-2/5 h-[4px] bg-primary'></div>
            </div>
            {/* contact form  */}
            <div className='form mt-10'>
              <div className='grid grid-cols-2 gap-5'>
                <div className='w-full'>
                  <Input label='Name*' />
                </div>
                <div className='w-full'>
                  <Input label='Email address*' />
                </div>
              </div>
              {/* textarea  */}
              <div className='w-full mt-5'>
                <Textarea className='w-full h-[250px]' label='Message' />
              </div>
              <button className='uppercase px-8 py-3 mt-3 bg-black text-white'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
