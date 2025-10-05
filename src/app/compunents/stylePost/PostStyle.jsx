import Image from "next/image";
import React, { useState } from "react";

function PostStyle({ product }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="h-[400px] w-full overflow-y-hidden py-6 bg-gray-200 rounded-lg shadow-lg">
      <div className="w-full">
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
      </div>

      <Image
        className="object-cover w-[90%] rounded-2xl mx-auto mt-2"
        src={product?.image}
        alt={product?.title}
        width={250}
        height={150}
      />
    </div>
  );
}

export default PostStyle;
