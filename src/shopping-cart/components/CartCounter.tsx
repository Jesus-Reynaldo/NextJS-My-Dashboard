'use client'
import { useState } from "react"

interface Props{
  value:number
}

export const CartCounter = ({value=10}:Props) => {
  const [count, setCount]=useState(value)
  function handleCount(){
    setCount((x)=>x+1)
  }
  function handleSubtract(){
    setCount((x)=>x-1)
  }
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button onClick={handleCount} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button onClick={handleSubtract} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}
