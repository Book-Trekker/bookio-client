import React from 'react';

const VendorInfo = () => {
    return (
        <div>
            <h2 className='font-libre font-bold text-xl my-5'>VENDOR INFORMATION</h2>
            <p className='py-2 font-normal text-gray text-sm'>Store Name: <span>Bookio</span></p>
            <p className='py-2 font-normal text-gray text-sm'>Vendor: <span className='text-black font-normal text-opacity-95'>Bookio</span></p>
            <p className='py-2 font-normal text-gray text-sm'>Address: <span>Bookio</span></p>
            <p className='py-2 font-normal text-gray text-sm'><span>5.00 </span> rating from 1 user</p>
        </div>
    );
};

export default VendorInfo;