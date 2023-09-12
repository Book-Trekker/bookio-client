import React from 'react'

export default function CardProducts() {
  return (
    <section>
      <div className='hidden md:grid md:grid-cols-4 justify-between font-libre text-xl text-primary px-5 py-3 border-2 border-[#3b323221]'>
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>SubTotal</h1>
      </div>
      <div className='hidden md:grid md:grid-cols-4 border-t-transparent justify-between font-lato text-lg text-primary px-5 py-3 border-2 border-[#3b323221]'>
        <h1>Healed New Life</h1>
        <h1>$90.00</h1>
        <h1>Quantity</h1>
        <h1 className='flex justify-between'>
          <span>$1,800.00</span>
          <span>
            <i class='ri-delete-bin-3-line hover:text-white p-2 rounded-full hover:bg-red-200 cursor-pointer transition-all duration-300'></i>
          </span>
        </h1>
      </div>
    </section>
  )
}
