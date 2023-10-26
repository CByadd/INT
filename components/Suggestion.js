import React from 'react'

function Suggestion() {
  return (
    <div className='absolute  right-0 absolute child w-80 h-auto'>
        <h2 className='mt-7 ml-3 text-gray-400'>Suggested For You</h2>


        <div>
        <div className='flex  text-white  items-center justify-between  mt-4 '>

<img className='w-14 h-14 rounded-full  ml flex'
src='/yash.png'/>

<div className='scale-90 left-14 absolute'>
    <h2 className='font-bold flex'>Yash</h2>
    <h3 className='flex text-gray-400'>Master Developer</h3>
</div>

<button className='text-blue-500 mr-4'> Follow</button>

</div>
        </div>
        <div>
        <div className='flex  text-white  items-center justify-between  mt-4 '>

<img className='w-14 h-14 rounded-full  ml flex'
src='/x.jpg'/>

<div className='scale-90 left-14 absolute'>
    <h2 className='font-bold flex'>Mike</h2>
    <h3 className='flex text-gray-400'>New To Devbrosgram</h3>
</div>

<button className='text-blue-500 mr-4'> Follow</button>

</div>
        </div>
        <div>
        <div className='flex  text-white  items-center justify-between  mt-4 '>

<img className='w-14 h-14 rounded-full ml flex'
src='/y.jpg'/>

<div className='scale-90 left-14 absolute'>
    <h2 className='font-bold flex'>Thiru</h2>
    <h3 className='flex text-gray-400'>Devbro Recommended</h3>
</div>

<button className='text-blue-500 mr-4'> Follow</button>

</div>
        </div>
        <div>
        <div className='flex  text-white  items-center justify-between  mt-4 '>

<img className='w-14 h-14 rounded-full ml flex'
src='/z.jpg'/>

<div className='scale-90 left-14 absolute'>
    <h2 className='font-bold flex'>Tharun</h2>
    <h3 className='flex text-gray-400'>Pro PlayBoy</h3>
</div>

<button className='text-blue-500 mr-4'> Follow</button>

</div>
        </div>
    </div>
  )
}

export default Suggestion