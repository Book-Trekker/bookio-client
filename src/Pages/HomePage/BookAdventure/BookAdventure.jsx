import React from 'react'
import './BookAdventure.css'

const BookAdventure = () => {
  return (
    <section className='book-adventure p-10 w-full'>
        <div className="adventure_main flex justify-center items-center w-full h-[550px]">
            <div className='text-center'>
                <h2 className='text-5xl text-primary font-bold font-libre'>Book Yours <br /> Own Adventures </h2>
                <p className='py-4 text-primary font-bold text-sm font-libre'>MORE BANG FOR YOUR BOOK</p>
                <button className='px-6 py-2 bg-primary text-white hover:bg-black'>Shop now</button>
            </div>
        </div>
    </section>
  )
}

export default BookAdventure