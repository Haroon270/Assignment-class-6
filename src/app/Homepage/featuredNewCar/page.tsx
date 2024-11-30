import React from "react";
import Link from "next/link";
import Image from "next/image";
import Corolla from "../../../public/Corolla.jpg";
import Cover from "../../../public/Cover.jpg";
import Honda from "../../../public/Honda.jpg";
import Suzuki from "../../../public/Suzuki.jpg";

function FeaturedNewCars() {
  return (
    <div className="bg-featurebg">
      <div className="flex justify-between pt-10 pb-0 px-32 ">
        <h2 className="text-2xl">Featured New Cars</h2>
      <h2>View All New Cars</h2>

      </div>
      <div>
        <ul className="flex justify-start space-x-10 pt-10 pb-8 px-32 text-lg ">
          <li>Popular</li>
          <li>Upcoming</li>
          <li>Newly Launche</li>
        </ul>
      </div>
      <hr className="bg-blue-700" />
      <div className="flex w-full h-96 justify-center space-x-6 items-center  bg-featurebg">
        
        {/* 1st image */}

        <div className="bg-white h-72 w-60" >
          <Link href="ToyotaCorola"><Image src="/Corolla.jpg" width={400} height={400} alt="Pak wheels" /></Link>
          <h3 className="bg-white text-center text-blue-900 pt-2 ">
         Toyota Corola
          </h3>
          <h4 className="text-green-500 text-center text-sm">
            PKR 59.7 - 75.5 lacs
          </h4>
          <h5 className="text-center text-sm">626 Reviews</h5>
        </div>
              {/* 2nd image */}

        <div className="bg-white h-72 w-60">
          <Link href="SuzukiAlto"><Image src="/Suzuki.png" width={400} height={400} alt="Pak wheels" /></Link>
          <h3 className="bg-white text-center text-blue-900 pt-2 ">
            Suzuki Alto
          </h3>
          <h4 className="text-green-500 text-center text-sm">
          PKR 23.3 - 30 Lacs
          </h4>
          <h5 className="text-center text-sm">823 Reviews</h5>
        </div>
        {/* 3rd image */}
        <div className="bg-white h-72 w-60">
          <Link href="HondaCivic"><Image src="/HondaCivic.jpg" width={400} height={400} alt="Honda Civic" /></Link>
          <h3 className="bg-white text-center text-blue-900 pt-2 ">
            Honda Civic
          </h3>
          <h4 className="text-green-500 text-center text-sm">
            PKR 86.6 - 99.0 lacs
          </h4>
          <h5 className="text-center text-sm">758 Reviews</h5>
        </div>
          {/* 4th image */}
        <div className="bg-white h-72 w-60 ">
          <Link href="HondaCity" > <Image src="/Honda.jpg" width={400} height={400} alt="Honda City" />
          </Link>     
          <h3 className="bg-white text-center text-blue-900 pt-2 ">
          Honda City
          </h3>
          <h4 className="text-green-500 text-center text-sm">

          PKR 46.5 - 58.5 lacs
          </h4>
          <h5 className="text-center text-sm">364 Reviews</h5>
        </div>
      </div>
    </div>
  );
}

export default FeaturedNewCars;
