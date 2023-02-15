import React from 'react'
import './Shop.css'

const ShopBasicCategory = ({
  catImg,
  ctTitle,
  bCategory1,
  bCategory2,
  bCategory3,
  bCategory4,
  bCategory5,
  bCategory6,
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${catImg})` }}
      className='basic_cat grid grid-cols-2 py-8 bg-no-repeat bg-center bg-cover cursor-pointer'
    >
      <div className='pl-3'>
        <h2 className='text-primary text-xl font-bold font-libre relative t-before'>
          {ctTitle}
        </h2>
        <p className='mt-8 relative triangle_icon pl-3 text-sm'>{bCategory1}</p>
        <p className='mt-2 relative triangle_icon pl-3 text-sm'>{bCategory2}</p>
        <p className='mt-2 relative triangle_icon pl-3 text-sm'>{bCategory3}</p>
        <p className='mt-2 relative triangle_icon pl-3 text-sm'>{bCategory4}</p>
        {bCategory5 && (
          <p className='mt-2 relative triangle_icon pl-3 text-sm'>
            {bCategory5}
          </p>
        )}
        {bCategory6 && (
          <p className='mt-2 relative triangle_icon pl-3 text-sm'>
            {bCategory6}
          </p>
        )}
      </div>
    </section>
  )
}

export default ShopBasicCategory
