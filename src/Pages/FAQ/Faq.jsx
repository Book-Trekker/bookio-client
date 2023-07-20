import React from 'react'
import Breadcumb from '../../Shared/BreadCumb/BreakCumb'
import FaqInfo from './FaqInfo'
import Header from '../HomePage/Header/Header'
import Footer from '../../Shared/Footer/Footer'

const Faq = () => {
  return (
    <section className='faq_section'>
      <Header />
      <div className='breadCumb'>
        <Breadcumb
          first={'Home'}
          second={'Faq'}
          route={'/faq'}
          MyAccount={'Faq'}
        />
      </div>
      <div className='faq_main mt-10 md:mt-10'>
        {/* faq title  */}
        <div className='faq-title text-center py-8 md:py-14'>
          <h2>
            <i class='ri-question-line text-5xl'></i>
          </h2>
          <h1 className='text-xl md:text-4xl lg:text-5xl font-libre font-bold '>
            Frequently Asked Questions.
          </h1>
        </div>
        {/* faq details  */}
        <div className='faq_info grid grid-cols-1 md:grid-cols-2'>
          <FaqInfo title={'01. The order'} />
          <FaqInfo title={'02. Shipment'} />
          <FaqInfo title={'03. The order'} />
          <FaqInfo title={'04. Returns, exchanges and complaints'} />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Faq
