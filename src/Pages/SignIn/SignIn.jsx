import React from "react";
import loginImage from "../../assets/gif/login.gif";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function SignIp() {
  return (
    <div className="px-10 mb-12">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <img src={loginImage} alt="" />
        </div>
        <div className="col-span-5">
          <h3 className="accountTitle">Login In</h3>
          <p className="text-[rgba(75,85,99,1)] text-[.875rem] mt-[.5rem] font-Fira">
            Do not have an account yet?
            <Link
              to="/sign_up"
              className="text-[rgba(79,70,229,1)] font-[600] ml-2 text-[1.2rem] "
            >
              Sign Up 🚀
            </Link>
          </p>
          <div className="mt-5">
            <h3 className="text-[rgba(75,85,99,1)] text-[1.1rem] mb-2 font-semibold">
              Sign in with
            </h3>
            <div className="flex flex-col  ">
              <button className="socialLogin flex items-center justify-center">
                <i class="ri-google-line text-xl mr-2"></i>
                Google
              </button>
              <button className="socialLogin flex items-center justify-center">
                <i class="ri-github-fill text-xl mr-2"></i>
                Github
              </button>
              <button className="socialLogin flex items-center justify-center">
                <i class="ri-facebook-line text-xl mr-2"></i>
                Facebook
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex items-center mt-5 mb-6">
              <hr className="flex-grow border-[rgba(209,213,219,1)] border-t" />
              <p className="mx-3 text-[rgba(55,65,81,1)]">Or continue with</p>
              <hr className="flex-grow border-[rgba(209,213,219,1)] border-t" />
            </div>
            <div className="">
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  label="name@email.com"
                  className=""
                  icon={<i class="ri-mail-send-line"></i>}
                />
                <Input
                  type="password"
                  label="Password"
                  className=""
                  icon={<i class="ri-lock-unlock-line"></i>}
                />
              </div>
              <div className="mt-3 flex items-center">
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-blue-500"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
              </div>
              <Button className="bg-secondary mt-3">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
