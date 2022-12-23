import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import MobileMenu from '../MobileMenu/MobileMenu'
import BookOfTheMonth from './BookOfTheMonth/BookOfTheMonth'
import Discount from './Discount/Discount'
import MIddleHeder from './Header/MIddleHeder'
import TopHeader from './Header/TopHeader'
import Hero from './Hero/Hero'
import HeroCard from './HeroCard/HeroCard'
import TopCategories from './TopCategories/TopCategories'
import Trending from './Trending/Trending'

const HomePage = () => {
  return (
    <section className='homepage'>
      <TopHeader />
      <MIddleHeder />
      <Hero />
      <HeroCard />
      <Discount />
      <Trending />
      <TopCategories />
      <BookOfTheMonth />
      <Footer />
      <MobileMenu />
    </section>
  )
}

export default HomePage
