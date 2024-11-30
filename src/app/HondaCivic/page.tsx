import React from 'react'
import Image from 'next/image'
import image from '../../../public/HondaCivic.jpg'
import Link from 'next/link'


function HondaCivic() {
    return (
        <div>
          <h1 className='text-center text-3xl underline mt-4'>Honda Civic 2024 Price in Pakistan, Images, Reviews & <br />Specs</h1>
          <div className='flex justify-center'>
          <Image
          src="/HondaCivic.jpg"
          width={350}
          height={350}
          alt=" Honda Civic"
              />
        </div>
        <div className='text-center px-40'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos? Sequi dolorum fugit cumque nemo perspiciatis, officia quod. Reprehenderit iure natus excepturi vitae odit, autem architecto beatae dolorem distinctio iusto.
        Modi molestias maxime provident ratione vero voluptatum laboriosam, sequi iusto unde praesentium maiores quas beatae corrupti itaque vel quia perferendis magnam perspiciatis quibusdam. Commodi facilis minus .</p>
        <h1 className='text-green-500 text-xl p-6'>PKR 91,00,000</h1>
       <Link href="MakePayment"><button className='bg-blue-800 text-white text-sm p-3 px-4 rounded-md mb-4'>Make Payment</button> </Link>
        
        
        </div>
        
        </div>
      )
}

export default HondaCivic