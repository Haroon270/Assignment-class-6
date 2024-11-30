import React from "react";
import logo from "../../../public.logo.svg";
import Image from "next/image";

function Navbar() {
  return (
    <header>
      {/* min div */} 
      <div className="h-8 w-full bg-myColor text-white flex justify-between px-20 items-center text-sm">
        <div>
        <p className="px-2">Download App via SMS</p>
      </div>
      <div>
        <ul className="flex space-x-4 ">
          <li className="text-red-600">اردو</li> 
          <li>Sign Up</li>
          <li>Sign In</li>
        </ul>
      </div>
      </div>
<hr  className="text-white font-thin"/>
      {/* main navbar */}
      
     <div className="flex justify-evenly bg-myColor px-8 text-white w-full h-20 ">
     <div className="flex ">
      <Image
      src="/logo.svg"
      width={140}
      height={140}
      alt="Pak wheels"
    />
     </div> 
      <button data-dropdown-trigger="{hover|click}">Used Cars</button>
      <button>New Cars</button>
      <button>Bikes</button>
      <button>Auto Store</button>
      <button>Vedio</button>
      <button>Forums</button>
      <button>Blog</button>
      <button>More</button>
      <button className="bg-red-500 mt-5 mb-5 px-5 rounded-md">Post an Add</button>
    </div>  
    
     </header>
  );
}

export default Navbar;
