import React from 'react'

const FaqInfo = ({ title }) => {
  return (
    <section className='faq_ px-10'>
      <div className='faq_main_'>
        <span className='faq_heading_ text-[24px] md:text-[28px] font-libre font-bold pb-8 block'>
          {title}
        </span>
        <span className='faq_subtitle font-lato font-bold text-gray'>
          When do I receive my order?
        </span>
        <p className='text-[#767a79] pb-5'>
          When placing the order, a day of shipment is indicated. After the
          order has been placed, the same delivery time will also be stated on
          the order confirmation. It is therefore never possible that during the
          order, the shipping day on the website, is different than on the order
          confirmation.
        </p>
        <span className='faq_subtitle font-lato font-bold text-gray'>
          I now see the longer delivery time of (a part of) my order. How can I
          cancel it?
        </span>
        <p className='text-[#767a79] pb-5'>
          If the order has a longer delivery time than you had previously seen,
          it is of course possible to cancel (a part of) the order. For this you
          can contact our customer service. They will cancel the order for you.
          The purchase amount will be back on your bank account within two
          working days. When an order has already been shipped, it can no longer
          be cancelled.
        </p>
        <span className='faq_subtitle font-lato font-bold text-gray'>
          When will I receive the invoice for my order?
        </span>
        <p className='text-[#767a79] pb-5'>
          When you have paid for the order, you will not automatically receive
          an invoice for your order. If you wish to receive an invoice, this can
          be done in two ways.The first way is through your account at our
          store. When you log in to your account you can see your orders and
          download the invoice.
        </p>
      </div>
    </section>
  )
}

export default FaqInfo
