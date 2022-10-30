import React from 'react'
import PizzaCard from "./pizzaCard"

const pizzaList = () => {
  return (
    <div>
      <div class="px-3 py-3 flex flex-col items-center my-10">
        <h1 class="text-5xl b font-bold">THE BEST PIZZA IN THE TOWN</h1>
        <p class="text-2x text-gray-700 w-1/2 text-center my-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quis molestias totam temporibus quisquam rem dolores sunt distinctio corrupti, ipsa ut, quibusdam ad voluptate. Id ducimus est voluptate! Soluta corrupti aspernatur vitae, rerum, necessitatibus ipsam impedit fugit maiores, vel tempora accusantium sed esse nam sit dicta assumenda vero qui voluptas?</p>
        <div class="w-full flex items-center justify-center flex-wrap my-20">
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
      </div>
    </div>


    
  )
}

export default pizzaList











