"use client"
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

function LeftCompunent() {
  return (
    <div className='fixed h-[400px] pb-6 pl-5 overflow-y-scroll'>

      <div 
        className="flex gap-5 items-center w-full py-4 px-3 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer mb-3"
        style={{background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite'}}
      >
        <GroupIcon className="text-white" />
        <h1 className="text-white font-semibold text-lg">Friends</h1>
      </div>

      <div 
        className="flex gap-5 items-center w-full py-4 px-3 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer mb-3"
        style={{background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite'}}
      >
        <AccessAlarmsIcon className="text-white" />
        <h1 className="text-white font-semibold text-lg">Memorized</h1>
      </div>

      <div 
        className="flex gap-5 items-center w-full py-4 px-3 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer mb-3"
        style={{background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite'}}
      >
        <TurnedInIcon className="text-white" />
        <h1 className="text-white font-semibold text-lg">Saved</h1>
      </div>

      <div 
        className="flex gap-5 items-center w-full py-4 px-3 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer mb-3"
        style={{background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite'}}
      >
        <GroupsIcon className="text-white" />
        <h1 className="text-white font-semibold text-lg">Group</h1>
      </div>

      <div 
        className="flex gap-5 items-center w-full py-4 px-3 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer mb-3"
        style={{background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite'}}
      >
        <OndemandVideoIcon className="text-white" />
        <h1 className="text-white font-semibold text-lg">Reels</h1>
      </div>

      <div 
        className="flex gap-5 items-center w-full py-4 px-3 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer mb-3"
        style={{background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite'}}
      >
        <StorefrontIcon className="text-white" />
        <h1 className="text-white font-semibold text-lg">MarketPlace</h1>
      </div>

      <div 
        className="flex gap-5 items-center w-full py-4 px-3 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer mb-3"
        style={{background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite'}}
      >
        <DynamicFeedIcon className="text-white" />
        <h1 className="text-white font-semibold text-lg">Feeds</h1>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

    </div>
  )
}

export default LeftCompunent
