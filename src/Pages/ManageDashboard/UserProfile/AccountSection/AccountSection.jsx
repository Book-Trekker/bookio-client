import { Option, Select } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";

const AccountSection = () => {
  const [username, setUsername] = useState("ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [fullName, setFullName] = useState("John Doe");
  const [title, setTitle] = useState("administrator");

  return (
    <div>
      <div>
        <h3 className="text-[1.5rem] mt-10 px-4">Account</h3>
        <div className="flex flex-col gap-6 mt-8 px-4">
          <div className="grid grid-cols-12  items-center">
            <div className="col-span-4 ">
              <label htmlFor="username">Username</label>
            </div>
            <div className="col-span-6">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border w-full px-5 py-2 text-blue-gray-700 font-medium rounded-sm border-green-200 text-[1rem]"
                type="text"
                placeholder="username"
              />
            </div>
          </div>
          <div className="grid grid-cols-12  items-center">
            <div className="col-span-4">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-span-6">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border w-full px-5 py-2 text-blue-gray-700 font-medium rounded-sm border-green-200 text-[1rem]"
                type="email"
                placeholder="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-12  items-center">
            <div className="col-span-4">
              <label htmlFor="password">Password</label>
            </div>
            <div className="col-span-6">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full px-5 py-2 text-blue-gray-700 font-medium rounded-sm border-green-200 text-[1rem]"
                type="password"
                placeholder="password"
              />
            </div>
          </div>
          <div className="grid grid-cols-12  items-center">
            <div className="col-span-4">
              <label htmlFor="fullName">Full name</label>
            </div>
            <div className="col-span-6">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border w-full px-5 py-2 text-blue-gray-700 font-medium rounded-sm border-green-200 text-[1rem]"
                type="text"
                placeholder="full name"
              />
            </div>
          </div>
          <div className="grid grid-cols-12  items-center">
            <div className="col-span-4">
              <label htmlFor="title">Title</label>
            </div>
            <div className="col-span-6">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border w-full px-5 py-2 text-blue-gray-700 font-medium rounded-sm border-green-200 text-[1rem]"
                type="text"
                placeholder="title"
              />
            </div>
          </div>
          <div className="grid grid-cols-12  items-center">
            <div className="col-span-4">
              <label htmlFor="username">Full name</label>
            </div>
            <div className="col-span-6">
              <Select variant="outlined" label="Select Version">
                <Option>Bangla</Option>
                <Option>Hindi</Option>
                <Option>English</Option>
                <Option>Cheyna</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
