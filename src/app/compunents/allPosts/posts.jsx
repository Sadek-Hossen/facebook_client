"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostStyle from '../stylePost/PostStyle';

function Posts() {
    const [post,setPost] =useState([])
 const BACKEND_URL=process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
 console.log("backend url : " , BACKEND_URL);
 useEffect(()=>{
    const facthingData = async ()=>{
        try {
         const respons =await axios.get(`${BACKEND_URL}/api/post`);
         console.log("posts :", respons.data.post);
         setPost(respons.data.post || []);
        } catch (error) {
            console.error("Error fatching  post:", error);
            alert("post facthing faile from All product file")
        }
    }
     facthingData();
 }, [BACKEND_URL])
  return (
    <div>
       <h1 className="text-center py-6 text-2xl font-bold">
        Here our All products
      </h1>

      

      <div className="container mx-auto grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {post?.map((p) => (
          <PostStyle product={p} key={p._id} />
        ))}
      </div>
    </div>
  )
}

export default Posts