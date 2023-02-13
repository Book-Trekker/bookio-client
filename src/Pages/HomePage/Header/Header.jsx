import React from 'react'
import MobileHeader from '../BottomHeader/MobileHeader'
import MIddleHeder from './MIddleHeder'
import TopHeader from './TopHeader'
import BottomHeader from '../BottomHeader/BottomHeader'

const Header = () => {
  return (
    <section className='main_header'>
      <MobileHeader />
      <TopHeader />
      <MIddleHeder />
      <BottomHeader />
    </section>
  )
}

export default Header
