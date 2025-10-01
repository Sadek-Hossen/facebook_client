import React from 'react'

function PostStyle({posts}) {
    const {title,image} = posts;

  return (
     <div className="max-w-xs h-[400px] hover:scale-105 hover:bg-fuchsia-300 transition-transform duration-300 overflow-hidden py-19 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 ">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {title}
        </h1>       
      </div>
     
    
    <Image
        className="object-cover w-[50%] rounded-2xl  mx-auto mt-2 "
        src={image}
        alt={title}
        width={250}
        height={150}
      />
    </div>
  )
}

export default PostStyle