import UploadPage from '@/app/(post)/upload/page'
import Leftpage from '@/app/(rightLeft)/left/page'
import RightPage from '@/app/(rightLeft)/right/page'

import React from 'react'

function Index() {
  return (
    <div className='grid lg:grid-cols-3  px-4 bg-gray-200 pb-30'>
    <Leftpage />
    <UploadPage />
    <RightPage />
    </div>
  )
}

export default Index