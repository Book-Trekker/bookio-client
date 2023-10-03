import React from 'react'
import ProfileSection from './ProfileSection/ProfileSection'
import AccountSection from './AccountSection/AccountSection'

const UserProfile = () => {
  return (
    <div>
      <div>
        <div className='bg-[#fafafa]'>
          <ProfileSection />
          <AccountSection />
        </div>
      </div>
    </div>
  )
}

export default UserProfile