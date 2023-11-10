import React from 'react'
import { App, AppB } from '../assets'

export default function Body() {
  return(
    <>
      <main className='top-0 relative p-6 lg:px-8 w-auto mt-20'>
        <div className='grid grid-cols-2 justify-between items-center'>
          <div className='px-3 w-[500px] flex flex-col gap-6'>
            <h1 className='text-4xl font-bold'>Dedicate yourself to the things that really matter</h1>
            <p className='text-2xl text-gray-500'>Nec lacinia. Quod dicta donec perspiciatis rutrum saepe egestas, porro repellat curabitur, blandit rerum nostrud id conubia phasellus officiis penatibus ac fringilla delectus eu cum platea aspernatur taciti, maecenas natoque reiciendis aenean, viverra unde irure, eum eget voluptate, enim lorem.!</p>
            <div className='grid grid-cols-2 gap-5'>
              <a href='#' className='bg-green px-5 py-5 text-center rounded text-white font-bold hover:border-2 hover:text-green hover:bg-white'>Read More</a>
              <a href='#' className='bg-white border-2 px-5 py-5 text-center rounded text-green font-bold hover:border-2 hover:text-white hover:bg-green'>Download</a>
            </div>
          </div>
          <div className='px-10'>
            <img src={App} alt='App Image' className='absolute top-[-80px] right-[300px]'/>
            <img src={AppB} alt='App Image' className='relative bottom-[-80px] right-[-80px]'/>
          </div>
        </div>
      </main>
    </>
  )
}