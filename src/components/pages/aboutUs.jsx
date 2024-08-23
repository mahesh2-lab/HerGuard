import React from "react";
import FloatingNavBar from "../FloatingNavBar";

const AboutUs = () => {
  return (
    <>
      <FloatingNavBar />
      <div className=" w-4/6 bg-[#fefff9] mx-auto gap-y-10 grid grid-cols-6 mt-40 ">
        <div className="  rounded-3xl py-32 px-24 col-span-6 bg-[#f3f8e2] text-center">
          <h1
            className="text-8xl font-black  text-inherit text-pretty "
            style={{ fontFamily: "Reservation Wide,sans-serif" }}
          >
            Empowering Safety for All
          </h1>
          <p class="text-2xl font-medium leading-8 m-0 text-inherit mt-4">
            HerGuard is dedicated to{" "}
            <b class=" text-[0.85em]">
              creating safer environments by providing real-time insights{" "}
            </b>
          </p>
        </div>
        <div className="col-span-3 rounded-3xl  py-24"></div>
        <div className="col-span-3 rounded-3xl bg-black py-24"></div>
      </div>
    </>
  );
};

export default AboutUs;

//  creating safer environments by providing real-time insights and empowering communities.
