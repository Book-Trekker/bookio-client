import React from 'react'
import './HeroCard.css'

const HeroCard = () => {
  return (
    <section className='hero_card my-10 px-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
        {/* card 1 */}
        <div className='card-bg-1 w-full h-[445px] md:h-44 lg:h-72'></div>
        <div className='card-bg-2 w-full h-[445px] md:h-44 lg:h-72'></div>
        <div className='card-bg-3 w-full h-[445px] md:h-44 lg:h-72'></div>
      </div>
    </section>
  )
}

export default HeroCard
