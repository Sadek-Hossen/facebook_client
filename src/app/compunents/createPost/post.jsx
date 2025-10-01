"use client"

import Link from 'next/link'
import React from 'react'

function Post() {
  return (
    <div>
      <section className='bg-[#ffffff] px-3  mt-3 p-2 rounded-2xl shadow-2xl'>
       <div className='flex justify-start  items-center '>
        <div className=''>
        <img src="img/profile.jpeg" alt="profile image" className='rounded-full h-[40px]  border-black hover:opacity-80' />
       </div>
        <div className='w-full'>
    <a href="/postpage">
            <input type="text" placeholder="What's your mind ?" className='rounded-full outline-none bg-gray-300 px-2 py-2 w-full hover:bg-gray-400/80 transition-all cursor-pointer'  />
        
    
      </a>    
        </div>
       </div>
       <hr className='my-4 text-gray-300' />
       <div className='flex justify-around items-center py-3 px-2 '>
       
        <Link  href="/postpage">
         <div className='flex items-center px-1 cursor-pointer hover:bg-gray-300 py-2 rounded-2xl   gap-2'>
       
          <img src="img/video.png" alt="" />
          <h1 className='text-[12px]'>Live Video</h1>
         
        </div>
        </Link>
         <Link  href="/postpage">
        <div  className='flex items-center px-2 cursor-pointer hover:bg-gray-300 py-2 rounded-2xl  gap-2'>
          <img src="img/image.png" alt="" />
          <h1 className='text-[12px]'>

            Photo/video
          </h1>
        </div>
        </Link>
         <Link  href="/postpage">
        <div  className='flex items-center px-2 cursor-pointer hover:bg-gray-300 py-2 rounded-2xl  gap-2'>
          <img src="img/emoji.png" alt="" />
          <h1 className='text-[12px]'>Feeling/activity</h1>
        </div>
        </Link>
       </div>
      </section>
    </div>
  )
}

export default Post