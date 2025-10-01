import PostPage from '@/app/(postPage)/postpage/page'
import Posts from '@/app/compunents/allPosts/posts'
import Post from '@/app/compunents/createPost/post'
import PostCreate from '@/app/compunents/postpageCreate/postCreate'
import React from 'react'

function UploadPage() {
  return (
    <div className='mt-30 overflow-y-auto'>
       {/* // hero compuentns */}
        <Post />
        <Posts />
       
    </div>
  )
}

export default UploadPage