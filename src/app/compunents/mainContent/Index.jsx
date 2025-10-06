"use client"
import UploadPage from '@/app/(post)/upload/page'
import Leftpage from '@/app/(rightLeft)/left/page'
import RightPage from '@/app/(rightLeft)/right/page'
import React from 'react'

function Index() {
  return (
    <div
      className="grid lg:grid-cols-3 px-4 pb-30 min-h-screen animated-bg"
    >
      <Leftpage />
      <UploadPage />
      <RightPage />

      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-bg {
          background: linear-gradient(270deg, #a78bfa, #ec4899, #facc15, #3b82f6);
          background-size: 800% 800%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default Index
