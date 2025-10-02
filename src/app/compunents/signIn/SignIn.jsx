"use client";

import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ||  "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/user/userCreate`,
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Backend JSON parse 
          },
        }
      );

      console.log(response);

      if (response.status === 201) {
        setSuccess("Sign up successful!");
        setFormData({ name: "", email: "", password: "" });
        alert("😀 User created successfully");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(
        err.response?.data?.message || err.message || "Sign up failed"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <div className="flex justify-center items-center w-[50%] mx-auto mb-10"><img src="img/facebook.png" alt="facebook" className="rounded-full w-[50%]" /></div>
        <div className="flex ">
          <Link href="/" >
            <h2 className="text-2xl font-bold mb-6 hover:bg-gray-500 p-2 cursor-pointer rounded-2xl transition-all"><ArrowBackIcon /></h2>
          
          </Link>
          <h2 className="text-2xl font-bold text-center mx-auto mb-6">Sign Up</h2>
        
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full hover:opacity-70 transition-all cursor-pointer p-3 bg-green-500 text-white rounded mb-4"
        >
          Sign Up
        </button>

        <button
          type="button"
          className="w-full hover:opacity-70 transition-all cursor-pointer flex items-center gap-2 justify-center p-3 bg-blue-500 text-white rounded"
        >
          <GoogleIcon /> Sign Up with Google
        </button>
      </form>
    </div>
  );
}
