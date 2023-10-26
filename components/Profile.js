import React from 'react'

function Profile() {
  return (
    <div className='flex   text-white  items-center justify-between mt-14 ml-10'>

        <img className='w-16 h-16 rounded-full border-none flex'
        src='/LOGO.png'/>

        <div className='scale-90'>
            <h2 className='font-bold'>Srinivash</h2>
            <h3 className='text-gray-400'>Welcome To Devbrosgram</h3>
        </div>

        <button className='text-blue-500'> Sign Out</button>
        
    </div>
  )
}

export default Profile