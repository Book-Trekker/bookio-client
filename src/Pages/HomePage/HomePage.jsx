import React from 'react'
import MIddleHeder from './Header/MIddleHeder'
import TopHeader from './Header/TopHeader'
import Hero from './Hero/Hero'

const HomePage = () => {
  return (
    <section className='homepage'>
      <TopHeader />
      <MIddleHeder />
      <Hero />
    </section>
  )
}

export default HomePage
