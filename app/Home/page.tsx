import React from 'react'
import { Main } from '../_components/Maincontent'
import { Overview } from '../_components/Overview'
export default function Home(){
  return (
      <div className='w-[95%] ml-2 h-screen absolute inline-flex flex-row max-md:flex-col max-md:overflow-scroll  top-0  p-0'>
        <Main/>
        <Overview/>
      </div>

  )
}