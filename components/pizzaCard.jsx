import React from 'react'
import Image from 'next/image'
const pizzaCard = () => {
  return (
    <div class="w-1/4 px-3 py-3 flex flex-col items-center justify-center cursor-pointer">
        <Image src="/img/pizza.png" alt="" width={250} height={500} />
        <h1 class="text-lg font-bold text-orange-700">PIZZA NAME</h1>
        <span class="text-lg font-bold  text-gray-700">Rs 300</span>
        <p class="text-center text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum provident sit soluta, ex laborum ducimus!</p> 
    </div>
  )
}

export default pizzaCard
