import React from 'react'
import './FantasticChoice.css'

const FantasticChoice = () => {
  return (
    <section className='w-full my-16'>
      <div className='choice_main w-[85%] h-[600px] flex items-center relative'>
        <div className='pl-10 text-white'>
          <p className='font-bold font-lato text-lg'>
            Welcome to the Wonderful World of Books
          </p>
          <h2 className='text-5xl font-libre font-bold my-5'>
            Cheap Books, <br /> Fantastic Choice{' '}
          </h2>
          <hr className='w-[60px] border-b-2' />
          <p className='w-3/5 pr-3 my-8'>
            If you’re looking for great value second hand books, then World of
            Books is the place for you. As you may already know, we aren’t like
            other online book stores. For starters, we don’t believe that books
            should only be read once, or have a single owner. Literature should
            endure and be continually recycled, which is why we help millions of
            used books find new homes every year.{' '}
          </p>
          <button className='border-2 px-8 py-2 font-bold font-lato hover:bg-black hover:border-transparent transition-all duration-[.2s] '>Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default FantasticChoice
