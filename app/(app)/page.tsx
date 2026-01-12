"use client";
import React from 'react'
import { Main } from '../_components/Maincontent';
import { Overview } from '../_components/Overview';
import { SIdebar } from '../_components/Sidebar';
import { Sidebar } from 'react-pro-sidebar';
export default function Home(){
  return (
    <>
      <div className='w-[95%] ml-2 h-screen absolute inline-flex flex-row max-md:flex-col overflow-y-scroll top-0 p-0 font-sans'>
        <Main/>
        {/* <Overview/> */}
      </div>
      </>
  )
}