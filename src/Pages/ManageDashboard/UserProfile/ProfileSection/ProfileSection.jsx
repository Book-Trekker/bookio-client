import React from "react";

const ProfileSection = () => {
  return (
    <div>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4">
          <div className="">
            <img
              style={{ clipPath: "circle(40%)" }}
              className="w-[400px] "
              src="https://media.istockphoto.com/id/501788332/photo/shes-young-and-goal-oriented.jpg?s=612x612&w=0&k=20&c=KL7_Hi9n5T7WMm6R9jgJcRV-c4nerYPVbeQYkH60G_M="
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-2">
          <h3 className="text-[2.2rem] font-semibold">John Doe</h3>
          <h5 className="text-blue-400 flex items-center gap-2">
            ryan@rockettheme.com{" "}
            <span className="text-black"> - Administrator</span>
          </h5>
          <p>
            <span className="opacity-40">Avatar by</span> gravatar{" "}
            <span className="opacity-40">Or upload your own....</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
