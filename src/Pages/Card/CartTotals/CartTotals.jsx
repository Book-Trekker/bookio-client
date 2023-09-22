import React, { useEffect, useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import {motion, useAnimation } from "framer-motion"



export default function CartTotals() {
  const [selectedOption, setSelectedOption] = useState("Free_shipping");
  const [extraInfo, setExtraInfo] = useState(false);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const controls = useAnimation();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const toggleExtraInfo = () => {
    setExtraInfo(!extraInfo);
    controls.start({ height: extraInfo ? 0 : 'auto' });
  };
  return (
    <div className="bg-[#f6f6f6] mb-10">
      <div>
        <div className="bg-[#e9e9e9] p-4 font-bold">
          <h2>CART TOTALS</h2>
        </div>
        <div className=" p-6 ">
          <div className="grid grid-cols-2">
            <h2 className="font-bold">Subtotal</h2>
            <div>
              <h3 className="text-[1.3rem] font-[600]">$90.00</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-5 ">
            <div className="flex items-center">
              <h2 className="font-bold">Shipping</h2>
            </div>
            <div>
              <div>
                <div className="flex items-center gap-2 text-[#767a79]">
                  <input
                    id="Free_shipping"
                    checked={selectedOption === "Free_shipping"}
                    onChange={handleOptionChange}
                    type="radio"
                  />
                  <label htmlFor="Free_shipping">Free shipping</label>
                </div>
                <di className="flex items-center gap-2 text-[#767a79]">
                  <input
                    checked={selectedOption === "Flat_rate"}
                    onChange={handleOptionChange}
                    id="Flat_rate"
                    type="radio"
                  />
                  <label htmlFor="Flat_rate">Flat rate</label>
                </di>
                <h5 className="text-[#767a79] mt-3">
                  Shipping to <span className="font-[600]">Bangladesh.</span>
                </h5>
                <button
                onClick={()=> setExtraInfo((prev)=> !prev )}
                className="cursor-pointer font-[600] mt-4 paymentHeader border-b-2">
                  Change address
                </button>{" "}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: extraInfo ? 1 : 0, height: extraInfo ? 'auto' : 0 }}
                  transition={{ duration: 0.5 }}

                
                className="mt-4 flex flex-col gap-3 overflow-hidden ">
                  <CountrySelect
                    onChange={(e) => {
                      setCountryid(e.id);
                    }}
                    placeHolder="Select Country"
                  />

                  <StateSelect
                    countryid={countryid}
                    onChange={(e) => {
                      setstateid(e.id);
                    }}
                    placeHolder="Select State"
                  />

                  <CitySelect
                    countryid={countryid}
                    stateid={stateid}
                    onChange={(e) => {
                      console.log(e);
                    }}
                    placeHolder="Select City"
                  />

                  <LanguageSelect
                    onChange={(e) => {
                      console.log(e);
                    }}
                    placeHolder="Select Language"
                  />
                   <button className="bg-[#000] py-3 px-5 font-bold mt-4 inline text-white">Update</button>
                </motion.div>
                 
              </div>
              
            </div> 
            
          </div>
          <div className="grid grid-cols-2 mt-8 items-center">
            <h2 className="font-bold text-[1.2rem]">Total</h2>
            <div>
              <h3 className="text-[1.8rem] font-[600]">$90.00</h3>
            </div>
          </div>

          <button className="bg-[#000] text-white w-full mt-4 py-6 uppercase ">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
