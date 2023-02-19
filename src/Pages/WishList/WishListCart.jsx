import React from 'react'


const WishListCart = ({img, title}) => {
  return (
    <div className='wisht_list_card grid grid-cols-1 md:grid-cols-2 w-full'>
      <div className='border border-[#e6e6e6] flex items-center'>
        <div className='flex p-3 items-center'>
          <div>
            <img className='w-24' src={img} alt='wishlist/book' />
          </div>
          <div className='pl-3'>
            <h4 className='font-lato font-semibold'>{title}</h4>
            <p className='text-secondary text-xl'> <span className='line-through text-gray text-sm'>$300.00</span> $280.00</p>
            <p className='text-gray text-small'>June 19, 2022</p>
          </div>
        </div>
      </div>
      <div className='pl-2 border border-[#e6e6e6] flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start'>
        <p className='text-gray'>In stock</p>
        <button className='px-3 py-1 bg-primary hover:bg-black text-white my-2'>Add to cart</button>
      </div>
    </div>
  )
}

export default WishListCart
