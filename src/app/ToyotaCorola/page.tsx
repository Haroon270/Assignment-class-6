import React from 'react'
import Image from 'next/image'
import image from '../../../public/Corolla.jpg'
import Link from 'next/link'
const Toyota = () => {
  return (
    <div>
      <h1 className='text-center text-3xl underline mt-4'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & <br />Specs</h1>
      <div className='flex justify-center'>
      <Image
      src="/Corolla.jpg"
      width={350}
      height={350}
      alt=" Toyota Corolla"
          />
    </div>
    <div className='text-center px-40'>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, dignissimos? Sequi dolorum fugit cumque nemo perspiciatis, officia quod. Reprehenderit iure natus excepturi vitae odit, autem architecto beatae dolorem distinctio iusto.
    Modi molestias maxime provident ratione vero voluptatum laboriosam, sequi iusto unde praesentium maiores quas beatae corrupti itaque vel quia perferendis magnam perspiciatis quibusdam. Commodi facilis minus .</p>
    <h1 className='text-green-500 text-xl p-6'>PKR 50,00,000</h1>
    <Link href="MakePayment"><button className='bg-blue-800 text-white text-sm p-3 px-4 rounded-md mb-4'>Make Payment</button></Link>
    
    
    </div>
    
    </div>
  )
}

export default Toyota
