import React from 'react'
import Image from 'next/image'

function Stories() {
  return (
    <div className='flex w-screen items-center bg-black'>
    <div className='mx-auto flex justify-center'>
 <div className='relative   h-24 w-24  mt-2'>
 <Image
        src={'1.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-0.5 mt-2'>
 <Image
        src={'2.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative hidden md:block h-24 w-24 m-0.5 mt-2'>
 <Image
        src={'3.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-1 mt-2'>
 <Image
        src={'4.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-1 mt-2'>
 <Image
        src={'5.png'} layout='fill' objectFit='contain'/>
 </div>
 <div className='relative  h-24 w-24 m-1 mt-2'>
 <Image
        src={'6.png'} layout='fill' objectFit='contain'/>
 </div>
 
 </div>
    </div>
  )
}

export default Stories
