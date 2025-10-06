"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import PostStyle from '../stylePost/PostStyle';

function Posts() {
  const [posts, setPosts] = useState([]); // plural 
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  console.log("backend url : ", BACKEND_URL);

  useEffect(() => {
    const facthingData = async () => {
      try {
        const respons = await axios.get(`${BACKEND_URL}/api/post`);
        console.log("posts :", respons.data.posts);
        setPosts(respons.data.posts || []);
      } catch (error) {
        console.error("Error fetching post:", error);
        alert("post fetching failed from All product file");
      }
    };
    facthingData();
  }, [BACKEND_URL]);

  console.log(posts);

  return (
    <div>
    

      <div className=" mx-auto mt-4 grid grid-cols-1  gap-6">
        {posts?.map((p) => (   // plural posts
          <PostStyle product={p} key={p._id} />
        ))}
      </div>
    </div>
  )
}

export default Posts
