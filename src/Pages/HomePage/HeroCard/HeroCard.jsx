import React from 'react'
import './HeroCard.css'
import { Button } from '@material-tailwind/react'

const HeroCard = () => {
  return (
    <section className='hero_card my-10 px-3 md:px-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 w-full'>
        {/* card 1 */}
        <div className='card-bg-1 w-full h-[445px] md:h-44 lg:h-72 relative'>
          <div className='hero_card_content absolute bottom-7 left-7'>
            <h2 className='text-3xl my-5 font-libre font-bold text-white'>
              New <br />
              Release.
            </h2>
            <Button className='bg-[#8F2224] text-[9px] md:text-[12px] rounded-none hover:bg-primary'>
              Shop Now
            </Button>
          </div>
        </div>
        {/* card-2  */}
        <div className='card-bg-2 w-full h-[445px] md:h-44 lg:h-72 relative'>
          <div className='hero_card_content absolute bottom-7 left-7'>
            <h2 className='text-3xl my-5 font-libre font-bold text-white'>
              Pre Order <br />
              Now.
            </h2>
            <Button className='bg-[#2C8A6B] text-[9px] md:text-[12px] rounded-none hover:bg-primary'>
              Shop Now
            </Button>
          </div>
        </div>
        {/* card- 3  */}
        <div className='card-bg-3 w-full h-[445px] md:h-44 lg:h-72 relative'>
          <div className='hero_card_content absolute bottom-7 left-7'>
            <h2 className='text-3xl my-5 font-libre font-bold text-white'>
              Top <br />
              Rated.
            </h2>
            <Button className='bg-[#3076D2] text-[9px] md:text-[12px] rounded-none hover:bg-primary'>
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCard
