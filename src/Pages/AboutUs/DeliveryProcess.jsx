import React from 'react'

const DeliveryProcess = ({icon, title, subtitle}) => {
  return (
    <section className='delivery_process'>
      <div className='delivery_icon w-full h-40 items-center px-5 flex border border-[#E0E0E0]'>
        <div className='icon__ flex items-center text-5xl text-secondary'>
          <i class={icon}></i>
        </div>
        <div className='icon__ pl-3'>
          <h4 className='text-lg text-black font-bold font-libre'>{title}</h4>
          <p className='text-lato text-gray'>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default DeliveryProcess
