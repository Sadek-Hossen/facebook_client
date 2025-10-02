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
    <div className='fixed gap-y-3 w-1/3 mx-10 pr-20 py'> 
      <div className='flex gap-4 w-[100%] hover:bg-gray-300  py-4 px-3 rounded-2xl '> <GroupIcon className='text-blue-500 ' /> <h1>Frinds</h1>  </div>
      <div className='flex gap-4 w-[100%] hover:bg-gray-300  py-4 px-3 rounded-2xl '> <AccessAlarmsIcon className='text-blue-500' /> <h1>Memurized</h1>  </div>
      <div className='flex gap-4 w-[100%] hover:bg-gray-300  py-4 px-3 rounded-2xl '> <TurnedInIcon className='text-blue-500' /> <h1>Saved</h1>  </div>
      <div className='flex gap-4 w-[100%] hover:bg-gray-300  py-4 px-3 rounded-2xl '> <GroupsIcon className='text-blue-500' /> <h1>Group </h1>  </div>
      <div className='flex gap-4 w-[100%] hover:bg-gray-300  py-4 px-3 rounded-2xl '> <OndemandVideoIcon className='text-blue-500' /> <h1>Reels</h1>  </div>
      <div className='flex gap-4 w-[100%] hover:bg-gray-300  py-4 px-3 rounded-2xl '> <StorefrontIcon className='text-blue-500' /> <h1>MarketPlace</h1>  </div>
      <div className='flex gap-4 w-[100%] hover:bg-gray-300  py-4 px-3 rounded-2xl '> <DynamicFeedIcon className='text-blue-500' /> <h1>Feeds</h1>  </div>
      
    
      
    </div>
  )
}

export default LeftCompunent