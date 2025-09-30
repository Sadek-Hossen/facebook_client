import UploadPage from '@/app/(post)/upload/page'
import Leftpage from '@/app/(rightLeft)/left/page'
import RightPage from '@/app/(rightLeft)/right/page'

import React from 'react'

function Index() {
  return (
    <div className='grid lg:grid-cols-3 px-2'>
    <Leftpage />
    <UploadPage />
    <RightPage />
    </div>
  )
}

export default Index