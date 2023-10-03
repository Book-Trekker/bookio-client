import React from 'react'

const Loading = () => {
  return (
    <section className='w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-80'>
      <div className='w-full h-screen flex justify-center items-center'>
        <img className='w-32' src='loading.gif' alt='loading/img' />
      </div>
    </section>
  )
}

export default Loading
