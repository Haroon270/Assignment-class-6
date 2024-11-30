import React from "react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

const HeroSection = () => {
  return (
    <div className="bg-featurebg border">
      <hr className="text-slate-700"/>
      <h1 className="text-center text-2xl pt-10">Sell Your Car on PakWheels and Get the Best Price</h1>
      <div className="flex justify-evenly p-10 content-between ">
      <div className="" >
        <h2 className="text-blue-900 text-xl pb-6">Post your Ad on PakWheels</h2>
        <ul className="text-sm gap-3">
          <li  className="py-2">Post your Ad for Free in 3 Easy Steps</li>
          <li className="py-2">Get Genuine offers from Verified Buyers</li>
          <li className="py-2">Sell your car Fast at the Best Price</li>
        </ul>
        <button className="bg-red-600 p-3 px-12 rounded-md text-md text-white mt-10">Post Your Ad</button>
      </div>

      <div>
        <h2 className="text-blue-900 text-xl pb-6">Try PakWheels Sell It For Me</h2>
        <ul className="text-sm ">
          <li className="py-2">Dedicated Sales Expert to Sell your Car</li>
          <li className="py-2"> We Bargain for you and share the Best Offer</li>
          <li className="py-2">We ensure Safe & Secure Transaction</li>
        </ul>
        <button className="bg-blue-900 opacity-4 p-3 px-8 rounded-md text-md text-white mt-10">Rigister Your Car</button>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
