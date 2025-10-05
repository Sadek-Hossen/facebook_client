import Image from 'next/image'
import React from 'react'

function PostStyle({product}) {
   

  return (
     <div className=" h-[400px] w-full overflow-y-hidden py-19 bg-gray-200 rounded-lg shadow-lg ">
      <div className="w-full ">
        <h1 className="font-bold text-gray-800  dark:text-white">
          {product?.title}
        </h1>       
      </div>
     
    
    <Image
        className="object-cover w-[90%] rounded-2xl  mx-auto mt-2 "
        src={product?.image}
        alt={product?.title}
        width={250}
        height={150}
      />
    </div>
  )
}

export default PostStyle