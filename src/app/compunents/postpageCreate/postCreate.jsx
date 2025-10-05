"use client";
import React, { useRef, useState } from "react";
import { FaUserFriends, FaSmile, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";
import { MdGif } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

function PostCreate() {
  const [uloading, setUploadeing] = useState(false);
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // ✅ preview url
  const fileInputRef = useRef(null);

  const router = useRouter();
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

  const handlePost = async () => {
    if (!text && !selectedFile) return;

    setUploadeing(true);
    try {
      let imageUrl = "";

      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const res = await axios.post(
          "https://api.imgbb.com/1/upload?expiration=600&key=b6e18f4608d6b1712bb1e021a5205fac",
          formData
        );

        imageUrl = res?.data?.data?.display_url;
      }

      const postData = {
        title: text,
        image: imageUrl,
      };

      await axios.post(`${BACKEND_URL}/api/post/postCreate`, postData);

      alert("✅ Post Created Successfully!");
      setText("");
      setSelectedFile(null);
      setPreviewUrl(null); // ✅ clear preview
      router.push("/");
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Post failed! Check console for error.");
    } finally {
      setUploadeing(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // ✅ set preview
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white w-[32%] rounded-xl shadow-lg border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="text-lg font-semibold">Create post</h2>
          <Link href="/">
            <button className="text-gray-500 hover:text-black text-2xl">✖</button>
          </Link>
        </div>

        {/* User Info */}
        <div className="flex items-center px-4 py-3">
          <img
            src="img/profile.jpeg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold text-sm">user Name</p>
            <button className="flex items-center text-xs bg-gray-200 px-2 py-1 rounded-md">
              <FaUserFriends className="mr-1" /> Friends
            </button>
          </div>
        </div>

        {/* Input Box */}
        <div className="px-4">
          <textarea
            placeholder="What's on your mind?"
            className="w-full outline-none border-0 focus:ring-0 resize-none text-gray-700 text-lg placeholder-gray-500"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        {/* Image Preview */}
        {previewUrl && (
          <div className="px-4 py-2">
            <img src={previewUrl} alt="preview" className="w-full h-auto rounded" />
          </div>
        )}

        {/* Add to your post */}
        <div className="px-4 py-2">
          <div className="flex justify-between items-center border rounded-lg px-3 py-2">
            <p className="text-gray-600 text-sm">Add to your post</p>
            <div className="flex space-x-3 text-xl text-gray-500">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <BsFillImageFill
                className="text-green-500 cursor-pointer"
                onClick={handleImageClick}
              />
              <FaUserFriends className="text-blue-500 cursor-pointer" />
              <FaSmile className="text-yellow-500 cursor-pointer" />
              <FaMapMarkerAlt className="text-red-500 cursor-pointer" />
              <MdGif className="text-cyan-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Post Button */}
        <div className="px-4 py-2">
          <button
            type="button"
            className={`w-full font-semibold py-2 rounded-md ${
              text || selectedFile
                ? "bg-blue-500 text-white cursor-pointer"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handlePost}
            disabled={!text && !selectedFile}
          >
            {uloading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCreate;
