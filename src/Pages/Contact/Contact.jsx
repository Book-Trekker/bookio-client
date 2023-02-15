import React from 'react'
import BreakCumb from '../../Shared/BreadCumb/BreakCumb'


const Contact = () => {
  return (
    <section className='contact_section'>
      <div className='contact_main'>
        {/* breadCumb  */}
        <div className='breadCumb'>
          <BreakCumb
            first={'Home'}
            second={'Contact'}
            route={'/contact'}
            MyAccount={'Contact'}
          />
        </div>
        {/* map  */}
        <div className='map'>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
