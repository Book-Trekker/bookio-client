// import React, { useState } from "react";
// import swipe from "../../../assets/images/account/swipe.gif";

// import { useSelector, useDispatch } from "react-redux";
// import {
//   registerThunk,
//   signupThunk,
// } from "../../../reduxStore/slice/authSlice";

// const SignUp = () => {
//   const [role, setRole] = useState("user");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [user, setUser] = useState({});

//   const dispatch = useDispatch();
//   // const { user, error } = useSelector((state) => state.auth);
//   // console.log(user);
//   const handleCheckboxClick = (event) => {
//     if (event.target.value === role) {
//       // Uncheck the box if it's already checked
//       setRole(null);
//     } else {
//       // Check the box and uncheck the other one
//       setRole(event.target.value);
//     }
//   };

//   const registerDataChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // console.log("user", user);
//     dispatch(registerThunk({ ...user, role }));
//   };

//   return (
//     <section className="login border-2 border-[#eaeaea] rounded pt-0 md:pt-12 pb-4 w-full">
//       <div className="login_title w-full">
//         <div className="block md:hidden w-full">
//           <div className="flex justify-center items-center gap-4 w-full">
//             <div className="flex items-center justify-center">
//               <h3 className="font-libre text-gray text-sm flex justify-center items-center">
//                 <span className="flex justify-center items-center">
//                   <i class="ri-arrow-left-s-fill text-primary text-3xl"></i>
//                 </span>{" "}
//                 Swipe Left
//               </h3>
//             </div>
//             <div className="w-14 flex items-center justify-center">
//               <img src={swipe} alt="swipe/img" />
//             </div>
//             <div className="flex items-center justify-center text-gray text-sm">
//               <h3 className="font-libre">To Login</h3>
//             </div>
//           </div>
//         </div>
//         <h2 className="custom_border relative flex items-center justify-center text-2xl font-bold text-black font-libre pb-2">
//           <span>
//             <i className="ri-logout-box-line pr-2"></i>
//           </span>{" "}
//           Register
//         </h2>
//       </div>
//       <form
//         onSubmit={handleRegister}
//         className="input_field px-2 md:px-12 py-5 text-left w-full"
//       >
//         {/* input email  */}
//         <div className="input_email flex flex-col mb-2">
//           <label htmlFor="email" className="input-label pb-2 text-[#767a79]">
//             Email address <span className="text-red-500">*</span>
//           </label>
//           <input
//             className="border-2 px-2 py-4 border-[#eaeaea]"
//             type="email"
//             autoComplete="off"
//             name="email"
//             id="email"
//             value={registerDataChange.email}
//             onChange={registerDataChange}
//           />
//         </div>
//         {/* input password  */}
//         <div className="input_email flex flex-col mb-2">
//           <label htmlFor="password" className="input-label pb-2 text-[#767a79]">
//             Password <span className="text-red-500">*</span>
//           </label>
//           <div className="w-full relative">
//             <input
//               className="w-full border-2 px-2 py-4 border-[#eaeaea]"
//               type={passwordVisible ? "text" : "password"}
//               autoComplete="off"
//               name="password"
//               id="password"
//               value={registerDataChange.password}
//               onChange={registerDataChange}
//             />
//             <span
//               onClick={() => setPasswordVisible(!passwordVisible)}
//               className="absolute right-2 top-2 text-3xl text-[#767a79] "
//             >
//               {passwordVisible ? (
//                 <i class="ri-eye-off-line"></i>
//               ) : (
//                 <i class="ri-eye-line"></i>
//               )}
//             </span>
//           </div>
//         </div>

//         {/* conditional input field  */}

//         {/* input First Name  */}
//         {role === "vendor" && (
//           <div className="input_email flex flex-col mb-2">
//             <label htmlFor="fname" className="input-label pb-2 text-[#767a79]">
//               First Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               className="border-2 px-2 py-4 border-[#eaeaea]"
//               type="text"
//               autoComplete="off"
//               name="fname"
//               id="fname"
//               value={registerDataChange.fname}
//               onChange={registerDataChange}
//             />
//           </div>
//         )}

//         {/* input Last Name  */}
//         {role === "vendor" && (
//           <div className="input_email flex flex-col mb-2">
//             <label htmlFor="lname" className="input-label pb-2 text-[#767a79]">
//               Last Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               className="border-2 px-2 py-4 border-[#eaeaea]"
//               type="text"
//               autoComplete="off"
//               name="lname"
//               id="lname"
//               value={registerDataChange.lname}
//               onChange={registerDataChange}
//             />
//           </div>
//         )}

//         {/* input shop Name  */}
//         {role === "vendor" && (
//           <div className="input_email flex flex-col mb-2">
//             <label htmlFor="shop" className="input-label pb-2 text-[#767a79]">
//               Shop Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               className="border-2 px-2 py-4 border-[#eaeaea]"
//               type="text"
//               autoComplete="off"
//               name="shop"
//               id="shop"
//               value={registerDataChange.shop}
//               onChange={registerDataChange}
//             />
//           </div>
//         )}

//         {/* input phone number  */}
//         {role === "vendor" && (
//           <div className="input_email flex flex-col mb-2">
//             <label htmlFor="phone" className="input-label pb-2 text-[#767a79]">
//               Phone Number <span className="text-red-500">*</span>
//             </label>
//             <input
//               className="border-2 px-2 py-4 border-[#eaeaea]"
//               type="number"
//               autoComplete="off"
//               name="phone"
//               id="phone"
//               value={registerDataChange.phone}
//               onChange={registerDataChange}
//             />
//           </div>
//         )}

//         {/* I am a vendor */}
//         <div className="flex justify-between py-2">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 rounded-full text-gray-600"
//               value="user"
//               checked={role === "user"}
//               onChange={handleCheckboxClick}
//             />
//             <span className="ml-2 text-gray-700">I am a customer</span>
//           </label>

//           <label className="inline-flex items-center ml-6">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 rounded-full text-gray-600"
//               value="vendor"
//               checked={role === "vendor"}
//               onChange={handleCheckboxClick}
//             />
//             <span className="ml-2 text-gray-700">I am a vendor</span>
//           </label>
//         </div>

//         {/* login button  */}
//         <div className="login_btn my-3">
//           <button
//             type="submit"
//             className={
//               role
//                 ? "text-center bg-[#B9B9B9] w-full text-white py-4 text-sm hover:bg-primary"
//                 : "text-center bg-[#B9B9B9] disabled:bg-gray pointer-events-none   w-full text-white py-4 text-sm "
//             }
//           >
//             Register
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default SignUp;
