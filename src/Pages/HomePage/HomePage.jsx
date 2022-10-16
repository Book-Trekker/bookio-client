import React from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'
import MIddleHeder from './Header/MIddleHeder'
import TopHeader from './Header/TopHeader'
import Hero from './Hero/Hero'
import HeroCard from './HeroCard/HeroCard'

const HomePage = () => {
  return (
    <section className='homepage'>
      <TopHeader />
      <MIddleHeder />
      <Hero />
      <HeroCard />
      <MobileMenu />
    </section>
  )
}

export default HomePage
