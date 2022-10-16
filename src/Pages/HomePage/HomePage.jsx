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
      <h2 className="2xl">Test</h2>
    </section>
  )
}

export default HomePage
