"use client"
import React from 'react'
import { productszu } from '../_store/data'
export const Overview = () => {
  const allProducts=productszu((state)=>state.dupli)
  return (
    <div className='bg-[#c7c4bf] w-[20%] max-md:w-[100%] max-md:flex max-md:center max-md:items-center max-md:flex-col max-md:mt-[25px]'>
        <p className='text-1xl m-5'>Overview</p>
        <p className='text-2xl ml-5'>Total</p>
        <p className='text-3xl ml-5 mb-10'>{allProducts.length}</p>
        <p className='text-1xl ml-5'>Products 
            Reserved</p>
        <p className='text-3xl ml-5 mb-10'>6</p>
        <p className='text-1xl ml-5'>Stock Issue</p>
        <p className='text-3xl ml-5 mb-10 text-red-500'>2</p>
    </div>
  )
}
