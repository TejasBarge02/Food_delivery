import React from 'react'
import { useState } from "react";
import Image from 'next/image';

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
      id: 1,
      img: "/img/pizza.png",
      name: "CAMPAGNOLA",
      price: [19.9, 23.9, 27.9],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    };
  return (
    <div class="h-max flex">
      <div class="flex-1 h-full flex items-center justify-center">
        <div class="w-4/5 h-4/5">
          <Image src={pizza.img} objectFit="contain" width={500} height={500} alt="" />
        </div>
      </div>
      <div class="flex-1 p-5">
        <h1 class="text-3xl font-bold">{pizza.name}</h1>
        <span class="text-orange-700 text-2xl border-b-2 border-orange-700">${pizza.price[size]}</span>
        <p>{pizza.desc}</p>
        <h3 class="text-xl font-bold my-9">Choose the size</h3>
        <div class="flex justify-between w-2/5">
          <div class="w-7 h-7 relative cursor-pointer" onClick={() => setSize(0)}>
            <Image src="/img/size.png" width={50} height={50} alt="" />
            <span class="absolute bg-green-700 text-white -top-5 -right-4 text-xs py-1">Small</span>
          </div>
          <div class="h-10 w-10 relative cursor-pointer" onClick={() => setSize(1)}>
            <Image src="/img/size.png" width={50} height={50} alt="" />
            <span class="absolute bg-green-700 text-white -top-5 -right-4 text-xs py-1">Medium</span>
          </div>
          <div class="w-12 h-12 relative cursor-pointer" onClick={() => setSize(2)}>
            <Image src="/img/size.png" width={50} height={50} alt="" />
            <span class="absolute bg-green-700 text-white -top-5 -right-4 text-xs py-1">Large</span>
          </div>
        </div>
        <h3 class="text-xl font-bold">Choose additional ingredients</h3>
        <div class="flex my-7">
          <div class="flex items-center mx-3 text-sm">
            <input
              type="checkbox"
              id="double"
              name="double"
              class="w-5 h-5"
            />
            <label htmlFor="double" class="mx-2">Double Ingredients</label>
          </div>
          <div class="flex items-center mx-3 text-sm">
            <input
              class="w-5 h-5"
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese" class="mx-2">Extra Cheese</label>
          </div>
          <div class="flex items-center mx-3 text-sm">
            <input
              class="w-5 h-5"
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy" class="mx-2">Spicy Sauce</label>
          </div>
          <div class="flex items-center mx-3 text-sm">
            <input
              class="w-5 h-5"
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic" class="mx-2">Garlic Sauce</label>
          </div>
        </div>
        <div>
            <input type="number"  class="w-13 h-8" defaultValue={1}/>
            <button class="h-8 m-3 bg-orange-700 text-white border-none cursor-pointer p-1">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
