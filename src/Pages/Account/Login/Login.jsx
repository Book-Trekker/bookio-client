// import React from "react";
// import "./Login.css";
// import { Checkbox } from "@material-tailwind/react";
// import { useFormik } from "formik";
// import { signUpSchema } from "../../../schemas";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import swipe from "../../../assets/images/account/swipe.gif";
// import { useDispatch } from "react-redux";
// import { loginThunk, userLogOut } from "../../../reduxStore/slice/authSlice";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [users, setUsers] = useState({});
//   const dispatch = useDispatch();

//   const registerDataChange = (e) => {
//     setUsers({ ...users, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log(users);
//     dispatch(loginThunk(users));
//     console.log("success to login");
//   };
//   const handleLogout = () => {
//     dispatch(userLogOut());
//     console.log("success to logout");
//   };

//   return (
//     <section className="login border-2 border-[#eaeaea] rounded pt-0 md:pt-12 pb-4 w-full">
//       <div className="login_title">
//         <div className="block md:hidden">
//           <div className="flex justify-center items-center gap-4 w-full">
//             <div className="flex items-center justify-center">
//               <h3 className="font-libre text-gray text-sm flex justify-center items-center">
//                 Swipe Right{" "}
//                 <span className="flex justify-center items-center">
//                   <i class="ri-arrow-right-s-fill text-primary text-3xl"></i>
//                 </span>{" "}
//               </h3>
//             </div>
//             <div className="w-14 flex items-center justify-center">
//               <img src={swipe} alt="swipe/img" />
//             </div>
//             <div className="flex items-center justify-center text-gray text-sm">
//               <h3 className="font-libre">To Register</h3>
//             </div>
//           </div>
//         </div>
//         <h2 className="custom_border relative flex items-center justify-center text-center text-2xl font-bold text-black font-libre pb-2">
//           <span>
//             <i className="ri-user-line px-2"></i>
//           </span>{" "}
//           Login
//         </h2>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       <form
//         onSubmit={handleLogin}
//         className="input_field px-5 md:px-12 py-5 text-left"
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
//             values={registerDataChange.email}
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
//               values={registerDataChange.password}
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
//         {/* remember me  */}
//         <div className="remember_me flex flex-col md:flex-row md:justify-between md:items-center">
//           <Checkbox className="rounded-full" label="Remember Me" />
//           <Link to={""} className="border-b-[1px]">
//             Lost Your Password?
//           </Link>
//         </div>
//         {/* login button  */}
//         <div className="login_btn my-3">
//           <button className="text-center bg-black w-full text-white py-4 text-sm hover:bg-primary">
//             LOGIN
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;
