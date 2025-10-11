"use client";
import Image from "next/image";
import React, { useState } from "react";

function PostStyle({ product }) {
  const [showFull, setShowFull] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(product?.likes?.length || 0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Handle Like
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikesCount(prev => prev + 1);
    }
  };

  // Handle Comment
  const handleComment = () => {
    if (newComment.trim() === "") return;
    setComments(prev => [...prev, newComment]);
    setNewComment("");
  };

  return (
    <div className="relative h-[450px] w-full bg-gray-200 rounded-lg shadow-lg flex flex-col justify-between">
      {/* Post Content */}
      <div className="p-4 overflow-y-auto flex-1">
        <h1
          className={`font-bold text-gray-800 dark:text-white ${
            !showFull ? "line-clamp-2" : ""
          }`}
        >
          {product?.title}
        </h1>

        {product?.title?.length > 50 && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            {showFull ? "See Less" : "See More"}
          </button>
        )}

        <Image
          className="object-cover w-[90%] rounded-2xl mx-auto mt-2"
          src={product?.image}
          alt={product?.title}
          width={250}
          height={150}
        />

        {/* Comments List */}
        <div className="mt-3 space-y-2">
          {comments.length > 0 && (
            <h3 className="text-sm font-semibold text-gray-700">
              Comments:
            </h3>
          )}
          {comments.map((cmt, index) => (
            <p
              key={index}
              className="text-sm text-gray-800 bg-white px-3 py-1 rounded-lg shadow-sm"
            >
              💬 {cmt}
            </p>
          ))}
        </div>
      </div>

      {/* Like + Comment bar (Fixed Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-4 py-2 flex items-center justify-between rounded-b-lg">
        {/* Like button */}
        <button
          onClick={handleLike}
          className="flex items-center gap-1 text-lg focus:outline-none"
        >
          <span
            className={`transition-colors duration-300 ${
              liked ? "text-green-500" : "text-gray-500"
            }`}
          >
            👍
          </span>
          <span
            className={`text-sm font-medium ${
              liked ? "text-green-600" : "text-gray-700"
            }`}
          >
            {liked ? "Liked" : "Like"}
          </span>
          <span className="text-gray-500 text-sm ml-1">({likesCount})</span>
        </button>

        {/* Comment input */}
        <div className="flex items-center gap-2 w-2/3">
          <input
            type="text"
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:border-green-500"
          />
          <button
            onClick={handleComment}
            className="text-green-600 text-sm font-semibold hover:underline"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostStyle;
