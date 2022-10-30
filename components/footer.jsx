import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div class="bg-gray-800 flex h-max">
      {/* <div class="flex-1 relative">
        <Image class="object-contain h-96" src="/img/bg.png" width={5000} height={500} alt="" />
      </div> */}
      <div class="bg-gray-800 h-max flex p-12 space-x-20 justify-center m-auto" >
        <div>
          <h2 class="text-gray-300 text-2xl w-40 font-bold">
            OH YES, WE DID. THE PIZZA PLAZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div>
          <h1 class="text-lg text-yellow-400">FIND OUR RESTAURANTS</h1>
          <p class="text-gray-200 my-7">
            Ambedkar Road
            <br /> Wadala
            <br /> +91 1234567890
          </p>
          <p class="text-gray-200 my-7">
            Chattrapati Shivaji Chowk
            <br /> Dadar
            <br /> +91 1234567890
          </p>
          <p class="text-gray-200">
          Inorbit Mall
            <br /> Vashi
            <br /> +91 1234567890
          </p>
        </div>
        <div>
          <h1 class="text-lg text-yellow-400">WORKING HOURS</h1>
          <p class="text-gray-200 my-7">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p class="text-gray-200 my-7">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
