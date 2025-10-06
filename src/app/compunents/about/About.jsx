import React from 'react'
import GetUser from '@/(allUser)/getAllUser/page'

function About() {
  return (
    <div className="min-h-screen -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 pt-28">
     

      <div className=" w-[95%] md:w-[50%] mx-auto p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl">
        <GetUser />
      </div>
    </div>
  )
}

export default About
