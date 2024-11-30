import React from 'react'

function Footer() {
  return (
    <div className='flex bg-myfoot text-white justify-around text-sm font-thin'>
     <ul> 
        <h5 className='text-lg font-light'>Cars By Make</h5>
      <li>Toyota</li>
      <li>Suzuki</li>
      <li>Corola</li>
      </ul>
      <ul>
        <h5 className='text-lg font-light'>Cars By City</h5>
      <li>Karachi</li>
      <li>Lahore</li>
      <li>Islamabad</li>
      </ul>
      <ul>
        <h5 className='text-lg font-light'>Explore PakWheels</h5>
      <li>New Cars</li>
      <li>Used Bikes<li>
      </li>Used Bikes</li>
      </ul>
      <ul>
        <h5 className='text-lg font-light'>Cars by Province</h5>
      <li>Punjab</li>
      <li>Sindh</li>
      <li>Balochistan</li>
      <li>KPK</li>
      </ul>
     
    </div>
  )
}

export default Footer
