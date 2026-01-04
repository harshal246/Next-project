"use client"
import React from 'react'
import { productszu } from '../_store/data'
export const Overview = () => {
  const allProducts=productszu((state)=>state.dupli)
  return (
    <div className="w-full p-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  
  <div className="h-[125px] rounded-2xl bg-gradient-to-br from-violet-400 to-violet-500 shadow-sm border border-violet-200 flex flex-col justify-between p-4">
    <span className="text-sm font-medium text-white">
      Products
    </span>
    <span className="text-4xl mb-[10px] font-bold text-white">
      {allProducts.length}
    </span>
  </div>

  <div className="h-[125px] rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white flex flex-col justify-between p-4">
    <span className="text-sm font-medium">
      Products Reserved
    </span>
    <span className="text-4xl mb-[10px] font-bold text-white">
      6
    </span>
  </div>

  <div className="h-[125px] rounded-2xl bg-gradient-to-br from-violet-600 to-violet-700 text-white flex flex-col justify-between p-4">
    <span className="text-sm font-medium">
      Stock Issue
    </span>
    <span className="text-4xl mb-[10px] font-bold text-white">
      2
    </span>
  </div>

</div>


    // <div className='bg-[#c7c4bf] w-[20%] max-md:w-[100%] max-md:flex max-md:center max-md:items-center max-md:flex-col max-md:mt-[25px]'>
    //     <p className='text-1xl m-5'>Overview</p>
    //     <p className='text-2xl ml-5'>Total</p>
    //     <p className='text-3xl ml-5 mb-10'>{allProducts.length}</p>
    //     <p className='text-1xl ml-5'>Products 
    //         Reserved</p>
    //     <p className='text-3xl ml-5 mb-10'>6</p>
    //     <p className='text-1xl ml-5'>Stock Issue</p>
    //     <p className='text-3xl ml-5 mb-10 text-red-500'>2</p>
    // </div>
  )
}
