import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const slider = () => {
    const [index,setIndex] = useState(0)
const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  return (
    <div class="absolute bg-orange-700 flex overflow-hidden">
        <Image class="absolute h-24 w-24 my-28 cursor-pointer" onClick={()=>handleArrow("l")} src="/img/arrowl.png" alt="" width={145} height ={10} />
      <div class="flex object-contain transition ease-in-out delay-150" style={{transform:`translateX(${-100*index}vw)`}} >
        <Image src="/img/slider1.png" alt="" width={2000} height={10} /> 
        <Image src="/img/slider2.png" alt="" width={2000} height ={100} />
        <Image src="/img/slider3.png" alt="" width={2000} height ={100} />
      </div>
      {/* <div class="h-25 w-50 flex">
        
      </div>
      <div class="h-25 w-50 flex">
        
      </div> */}
      <Image class="absolute h-24 w-24 my-28 right-0 cursor-pointer" onClick={()=>handleArrow("r")} src="/img/arrowr.png" alt="" width={145} height ={10} />
    </div>
  )
}

export default slider
