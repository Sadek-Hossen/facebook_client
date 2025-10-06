"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import StyleUser from '../styleUser/styleUser';


function ShowUser() {
  const [users, setUsers] = useState([]); // plural 
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
  console.log("backend url : ", BACKEND_URL);

  useEffect(() => {
    const facthingData = async () => {
      try {
        const respons = await axios.get(`${BACKEND_URL}/api/user/get`);
        console.log("users :", respons.data.user);
        setUsers(respons.data.user || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("user fetching failed from All product file");
      }
    };
    facthingData();
  }, [BACKEND_URL]);

  console.log(users);

  return (
    <div>
      <h1 className="text-center py-6 text-2xl font-bold ">
        Here Our All  Users Name
      </h1>

      <div className=" mx-auto ">
        {users?.map((p) => (   // plural posts
          <StyleUser user={p} key={p._id} />
        ))}
      </div>
    </div>
  )
}

export default ShowUser
