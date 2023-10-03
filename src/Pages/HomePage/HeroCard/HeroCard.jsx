import React from 'react'
import './HeroCard.css'
import { Button } from '@material-tailwind/react'
import { useGetAllBooksQuery } from '../../../redux/features/books/bookApiSlice'
import { Link } from 'react-router-dom'

const HeroCard = () => {
  const { data: books } = useGetAllBooksQuery()
  const topRatedBook = books?.data
    ? [...books?.data].sort((a, b) => b?.sellCount - a?.sellCount).slice(0, 1)
    : []

  return (
    <section className='hero_card my-10 px-3 md:px-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 w-full'>
        {/* card 1 */}
        {books?.data?.slice(0, 1)?.map((book, index) => (
          <Link key={book?._id} to={`/shop/book/${book?._id}`}>
            <div className='w-full relative'>
              <div className='card-bg-1 card_hover w-full h-[445px] md:h-44 lg:h-72 '></div>
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
          </Link>
        ))}

        {/* card-2  */}
        <div className='w-full relative'>
          <div className='card-bg-2 card_hover w-full h-[445px] md:h-44 lg:h-72 '></div>
          <div className='hero_card_content absolute bottom-7 left-7'>
            <h2 className='text-3xl my-5 font-libre font-bold text-white'>
              Upcoming <br />
              Book.
            </h2>
            <Button
              disabled
              className='bg-[#8F2224] text-[9px] md:text-[12px] rounded-none hover:bg-primary'
            >
              Shop Now
            </Button>
          </div>
        </div>
        {/* card- 3  */}
        {topRatedBook?.map((book, index) => (
          <Link key={book?._id} to={`/shop/book/${book?._id}`}>
            <div className='w-full relative'>
              <div className='card-bg-3 card_hover w-full h-[445px] md:h-44 lg:h-72 '></div>
              <div className='hero_card_content absolute bottom-7 left-7'>
                <h2 className='text-3xl my-5 font-libre font-bold text-white'>
                  Top <br />
                  Rated.
                </h2>
                <Button className='bg-[#8F2224] text-[9px] md:text-[12px] rounded-none hover:bg-primary'>
                  Shop Now
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HeroCard
