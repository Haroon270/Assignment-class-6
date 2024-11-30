import React from "react";
import Link from "next/link";
import ThankYou from "../ThankYou/page";
function Payment() {
  return (
    <div className="bg-featurebg flex flex-col justify-center items-center w-full h-auto">
      <h1 className="text-3xl pb-20 font-bold pt-6">Enter Your Details</h1>
      <div className="flex flex-col gap-6 px-10 border-black m-8">
        {/* First */}
        <div className="">
          <input
            className="bg-white border border-gray-400 py-1 px-4 text-sm"
            type="text"
            placeholder="Enter Your FullName"
          />
        </div>
        {/* Second */}
        <div>
          <input
            className="bg-white border border-gray-400 py-1 px-4 text-sm"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        {/* Third */}
        <div>
          <input
            className="bg-white border border-gray-400 py-1 px-4 text-sm"
            type="text"
            placeholder="Card No"
          />
        </div>
        {/* Fourth */}
        <div>
          <input
            className="bg-white border border-gray-400 py-1 px-4 text-sm"
            type="text"
            placeholder="Address"
          /> </div> 
          <div> 
            <Link href="ThankYou"> <button
            className="text-white bg-blue-900 p-2 px-3 rounded-md text-sm mb-10 ">
              Place Your Order
          </button></Link> 
          </div>
      
      </div>
    </div>
  );
}

export default Payment;
